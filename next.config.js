/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
        ],
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig