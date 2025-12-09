/** @type {import('next').NextConfig} */
const nextConfig = {
  // این بخش باعث میشه خطاهای ESLint نادیده گرفته بشن
  eslint: {
    ignoreDuringBuilds: true,
  },
  // این بخش باعث میشه خطاهای TypeScript نادیده گرفته بشن
  typescript: {
    ignoreBuildErrors: true,
  },
  // تنظیمات عکس که قبلاً داشتیم (برای اطمینان)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;