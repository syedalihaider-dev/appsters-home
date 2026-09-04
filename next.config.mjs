/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/mobile-app-development-dubai',
        destination: '/location-lp/mobile-app-development-dubai',
      },
      {
        source: '/mobile-app-development-denver',
        destination: '/location-lp/mobile-app-development-denver',
      },
      {
        source: '/mobile-app-development-dallas',
        destination: '/location-lp/mobile-app-development-dallas',
      },
      {
        source: '/mobile-app-development-chicago',
        destination: '/location-lp/mobile-app-development-chicago',
      },
      {
        source: '/mobile-app-development-austin',
        destination: '/location-lp/mobile-app-development-austin',
      },
    ];
  },
};

export default nextConfig;
