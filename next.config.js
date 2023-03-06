/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(withMDX(nextConfig));
