/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN,
  },
  images: {
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
