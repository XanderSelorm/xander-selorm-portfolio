/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
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