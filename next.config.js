/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap.xml',
            },
        ];
    },
    images: {
        domains: [
            // Supabase Storage hostname — parsed from NEXT_PUBLIC_SUPABASE_URL
            ...(process.env.NEXT_PUBLIC_SUPABASE_URL
                ? [new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname]
                : []),
        ],
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig