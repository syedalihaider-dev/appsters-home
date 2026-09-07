/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/mobile-app-development-dubai',
        destination: '/location/mobile-app-development-dubai',
      },
      {
        source: '/mobile-app-development-denver',
        destination: '/location/mobile-app-development-denver',
      },
      {
        source: '/mobile-app-development-dallas',
        destination: '/location/mobile-app-development-dallas',
      },
      {
        source: '/mobile-app-development-chicago',
        destination: '/location/mobile-app-development-chicago',
      },
      {
        source: '/mobile-app-development-austin',
        destination: '/location/mobile-app-development-austin',
      },
    ];
  },
};

export default nextConfig;
