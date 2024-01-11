/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? "https://asatru.live" : undefined,
}

module.exports = nextConfig
