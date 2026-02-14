/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // your static export
  images: {
    unoptimized: true, // disables Image Optimization API
  },
};

module.exports = nextConfig;
