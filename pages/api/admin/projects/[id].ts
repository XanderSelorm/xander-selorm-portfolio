import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdminSession } from 'lib/auth-guard';
import { upsertProject, deleteProject } from 'lib/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await requireAdminSession(req, res);
  if (!session) return;

  const id = req.query.id as string;

  if (req.method === 'PUT') {
    const body = req.body;
    if (!body?.name || !body?.description || !body?.stack) {
      return res
        .status(400)
        .json({ error: 'name, description, and stack are required' });
    }
    try {
      const project = await upsertProject(id, {
        name: body.name,
        url: body.url ?? null,
        description: body.description,
        image: body.image ?? '',
        stack: body.stack,
        linkText: body.linkText,
        page: body.page,
        order_index: body.order_index ?? 0,
      });
      return res.status(200).json(project);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await deleteProject(id);
      return res.status(204).end();
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
