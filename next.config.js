/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n: {
        locales: ["it"],
        defaultLocale: "it",
    },
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
          },
        ]
      },
  }
  
  module.exports = nextConfig