import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export", // Required for Netlify static deployment
  trailingSlash: true, // Helps with routing
  images: { unoptimized: true }, //
};

export default withNextIntl(nextConfig);
