const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextTranslate = require('next-translate')

module.exports = nextTranslate(
  withBundleAnalyzer({
    i18n: {
      locales: ['en', 'ar'],
      defaultLocale: 'en',
      domains: [
        {
          domain: 'ahmedjadan.dev',
          defaultLocale: 'en',
        }
      ]
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  })
)

