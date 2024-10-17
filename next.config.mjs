/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: `https`,
                hostname: `eventapo.s3.ap-northeast-1.amazonaws.com`
            }
        ],
    },
};

export default nextConfig;
