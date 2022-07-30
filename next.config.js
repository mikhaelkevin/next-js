/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    hostname: ["static.coinstats.app"],
  },
};

module.exports = nextConfig;
