/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st998361.static.jp",
      },
      {
        protocol: "https",
        hostname: "speakerdeck.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://speakerdeck.com https://www.google.com https://www.gstatic.com;
              frame-src 'self' https://speakerdeck.com http://speakerdeck.com https://www.google.com;
              img-src 'self' https://st998361.static.jp https://speakerdeck.com;
              style-src 'self' 'unsafe-inline';
              font-src 'self';
            `.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
