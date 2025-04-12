/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'seeklogo.com',  // Already added earlier
      'miro.medium.com' // Added new domain
    ],
  },
};

module.exports = nextConfig;
