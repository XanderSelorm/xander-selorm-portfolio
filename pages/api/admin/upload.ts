import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdminSession } from 'lib/auth-guard';
import { supabaseAdmin } from 'lib/supabase';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable Next.js body parser — formidable handles the multipart stream
export const config = {
  api: { bodyParser: false },
};

const BUCKET = 'project-images';
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await requireAdminSession(req, res);
  if (!session) return;

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = formidable({ maxFileSize: 5 * 1024 * 1024 }); // 5 MB cap

  try {
    const [, files] = await form.parse(req);
    const fileField = files.image;
    const file = Array.isArray(fileField) ? fileField[0] : fileField;

    if (!file) {
      return res
        .status(400)
        .json({ error: 'No file uploaded. Use field name "image".' });
    }

    const ext = path.extname(file.originalFilename ?? '').toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return res
        .status(400)
        .json({ error: `File type "${ext}" is not allowed.` });
    }

    const storagePath = `${Date.now()}-${file.originalFilename ?? 'upload'}`;
    const fileBuffer = fs.readFileSync(file.filepath);

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(storagePath, fileBuffer, {
        contentType: file.mimetype ?? 'image/jpeg',
        upsert: false,
      });

    if (uploadError) {
      return res.status(500).json({ error: uploadError.message });
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(BUCKET)
      .getPublicUrl(storagePath);

    return res.status(200).json({ url: urlData.publicUrl });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
