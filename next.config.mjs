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
      {
        source: '/app-publishing',
        destination: '/app-publishing/index.html',
      },
      {
        source: '/app-publishing/thank-you',
        destination: '/app-publishing/thank-you.html',
      },
      {
        source: '/app-publishing/php/send-lead.php',
        destination: '/api/app-publishing',
      },
      {
        source: '/custom-software-development',
        destination: '/custom-software-development/index.html',
      },
      {
        source: '/custom-software-development/thank-you',
        destination: '/custom-software-development/thank-you.html',
      },
      {
        source: '/custom-software-development/php/send-lead.php',
        destination: '/api/custom-software-development',
      }
    ];
  },
};

export default nextConfig;
