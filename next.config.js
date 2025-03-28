/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 为Cloudflare Pages添加的设置
  output: 'export',
  // 禁用图像优化，因为Cloudflare Pages不支持Next.js的图像优化
  images: {
    unoptimized: true,
    domains: ['localhost', 'challenges.cloudflare.com'],
  },
  // 添加页面配置
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // 添加基础路径配置
  basePath: '',
  // 添加资产前缀配置
  assetPrefix: '',
  // 添加环境变量配置
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  }
};

module.exports = nextConfig;