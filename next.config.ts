/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export
  trailingSlash: true, // Critical for Netlify
  images: { unoptimized: true }, // Disable image optimization
};

module.exports = nextConfig;
