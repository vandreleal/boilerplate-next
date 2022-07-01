/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

const nextConfig = withPlugins([withBundleAnalyzer, withPWA], {
  compiler: {
    emotion: true,
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
