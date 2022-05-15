module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
  env: {
    moralisApiKey: process.env.moralisApiKey,
    moralisApiSecret: process.env.moralisApiSecret,
    BATTLENET_CLIENT_ID: process.env.BATTLENET_CLIENT_ID,
    BATTLENET_CLIENT_SECRET: process.env.BATTLENET_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};
