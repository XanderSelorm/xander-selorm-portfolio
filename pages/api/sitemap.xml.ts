import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjects } from 'lib/data-service';

const SITE_URL = 'https://www.xanderselorm.me';

/**
 * Static pages with their change frequency and priority.
 */
const staticPages: { path: string; changefreq: string; priority: number }[] = [
    { path: '/', changefreq: 'monthly', priority: 1.0 },
    { path: '/about-me', changefreq: 'monthly', priority: 0.8 },
    { path: '/projects', changefreq: 'monthly', priority: 0.9 },
    { path: '/contact', changefreq: 'yearly', priority: 0.7 },
];

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse,
) {
    const projects = await getProjects();
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    const urls = [
        // Static pages
        ...staticPages.map(
            (p) => `
  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
        ),
        // Dynamic project pages
        ...projects.map(
            (project) => `
  <url>
    <loc>${SITE_URL}/projects/${project.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
        ),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200',
    );
    res.status(200).send(sitemap);
}
