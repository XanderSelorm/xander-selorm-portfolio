/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'ui-avatars.com',
            'via.placeholder.com',
            'treesyt.herokuapp.com',
            'localhost',
            'www.treesyt.com',
            'test.treesyt.com',
            'media.istockphoto.com',
            'www.azom.com',
            'gcx.com.gh',
            'i.pinimg.com'
        ],
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig