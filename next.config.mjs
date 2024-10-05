/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "mm"],
    defaultLocale: "en-US",
    localeDetection: false,
    domains: [
      {
        domain: "poneyape-b.pages.dev",
        defaultLocale: "en-US",
      },
      {
        domain: "poneyape-b.pages.dev/?lang=mm",
        defaultLocale: "my-MY",
      },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
