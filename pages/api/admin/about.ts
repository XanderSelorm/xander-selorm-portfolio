import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdminSession } from 'lib/auth-guard';
import { getAboutBrief, updateAboutBrief } from 'lib/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await requireAdminSession(req, res);
  if (!session) return;

  if (req.method === 'GET') {
    try {
      const brief = await getAboutBrief();
      return res.status(200).json({ brief });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === 'PUT') {
    const { brief } = req.body;
    if (!Array.isArray(brief) || !brief.every(s => typeof s === 'string')) {
      return res
        .status(400)
        .json({ error: 'brief must be an array of strings' });
    }
    try {
      const updated = await updateAboutBrief(brief);
      return res.status(200).json({ brief: updated });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
