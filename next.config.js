/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.orientaluniversity.uz",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
