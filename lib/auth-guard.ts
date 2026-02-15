import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Validates the admin session in an API route.
 * Returns the session if authenticated, otherwise writes a 401 and returns null.
 *
 * Usage:
 *   const session = await requireAdminSession(req, res);
 *   if (!session) return; // response already sent
 */
export async function requireAdminSession(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return session;
}
