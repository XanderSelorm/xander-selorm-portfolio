import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdminSession } from 'lib/auth-guard';
import { getProjects, upsertProject } from 'lib/data-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await requireAdminSession(req, res);
  if (!session) return;

  if (req.method === 'GET') {
    try {
      const projects = await getProjects();
      return res.status(200).json(projects);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (!body?.name || !body?.description || !body?.stack) {
      return res
        .status(400)
        .json({ error: 'name, description, and stack are required' });
    }
    try {
      const id: string =
        body.id ||
        body.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') ||
        crypto.randomUUID().slice(0, 8);

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
      return res.status(201).json(project);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
