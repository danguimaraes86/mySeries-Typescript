/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: [ 'en-US', 'pt-BR' ]
  },
  images: {
    domains: ['image.tmdb.org']
  },
}

module.exports = nextConfig
