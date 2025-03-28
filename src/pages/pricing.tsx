import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PricingPlans, { PricingPlan } from '../components/PricingPlans';

const PricingPage = () => {
  const englishPlans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      price: '0',
      currency: '$',
      period: 'forever',
      features: [
        '5 images per day',
        'Standard quality',
        'Basic styles',
        'Square aspect ratio only',
        'No login required'
      ],
      buttonText: 'Get Started Free',
      buttonLink: '/'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '9.99',
      currency: '$',
      period: 'per month',
      features: [
        '100 images per day',
        'High quality',
        'All styles',
        'All aspect ratios',
        'Priority generation',
        'Save favorites'
      ],
      isPopular: true,
      buttonText: 'Upgrade to Pro',
      buttonLink: '/signup?plan=pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '29.99',
      currency: '$',
      period: 'per month',
      features: [
        'Unlimited images',
        'Maximum quality',
        'All styles + custom styles',
        'All aspect ratios',
        'API access',
        'Dedicated support',
        'Team collaboration'
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact'
    }
  ];

  const chinesePlans: PricingPlan[] = [
    {
      id: 'free',
      name: '免费',
      price: '0',
      currency: '¥',
      period: '永久',
      features: [
        '每天 5 张图像',
        '标准质量',
        '基本风格',
        '仅方形宽高比',
        '无需登录'
      ],
      buttonText: '免费开始使用',
      buttonLink: '/'
    },
    {
      id: 'pro',
      name: '专业版',
      price: '68',
      currency: '¥',
      period: '每月',
      features: [
        '每天 100 张图像',
        '高质量',
        '所有风格',
        '所有宽高比',
        '优先生成',
        '保存收藏'
      ],
      isPopular: true,
      buttonText: '升级至专业版',
      buttonLink: '/signup?plan=pro'
    },
    {
      id: 'enterprise',
      name: '企业版',
      price: '198',
      currency: '¥',
      period: '每月',
      features: [
        '无限图像',
        '最高质量',
        '所有风格+自定义风格',
        '所有宽高比',
        'API 访问',
        '专属支持',
        '团队协作'
      ],
      buttonText: '联系销售',
      buttonLink: '/contact'
    }
  ];

  // This would be determined based on user's language preference
  // For this example, we'll default to English
  const [language, setLanguage] = React.useState<'en' | 'zh'>('en');
  const plans = language === 'en' ? englishPlans : chinesePlans;
  const title = language === 'en' ? 'Choose Your Plan' : '选择您的方案';
  
  return (
    <>
      <Head>
        <title>{language === 'en' ? 'Pricing | AI Image Generator' : '定价 | AI 图像生成器'}</title>
        <meta 
          name="description" 
          content={
            language === 'en' 
              ? 'Choose the right plan for your AI image generation needs' 
              : '选择适合您的 AI 图像生成需求的方案'
          } 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            </Link>
            <h1 className="text-2xl font-bold">
              {language === 'en' ? 'AI Image Generator' : 'AI 图像生成器'}
            </h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/features" className="hover:text-indigo-300">
              {language === 'en' ? 'Features' : '功能'}
            </Link>
            <Link href="/faq" className="hover:text-indigo-300">
              {language === 'en' ? 'FAQ' : '常见问题'}
            </Link>
            <Link href="/pricing" className="hover:text-indigo-300">
              {language === 'en' ? 'Pricing' : '定价'}
            </Link>
            <Link href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              {language === 'en' ? 'Login' : '登录'}
            </Link>
            <select 
              className="bg-transparent border border-indigo-600 rounded p-1"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'zh')}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </nav>
        </header>

        <section className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {language === 'en' ? 'Plans & Pricing' : '方案与定价'}
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Choose the perfect plan for your needs. All plans include access to our FLUX.1-Dev AI image generator.' 
              : '选择适合您需求的完美方案。所有方案均包含使用我们的 FLUX.1-Dev AI 图像生成器的权限。'}
          </p>
        </section>

        <PricingPlans plans={plans} title={title} locale={language} />

        <section className="container mx-auto py-16 px-4 bg-indigo-800 bg-opacity-20 rounded-lg max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === 'en' ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'en' 
                  ? 'Can I cancel my subscription at any time?' 
                  : '我可以随时取消订阅吗？'}
              </h3>
              <p>
                {language === 'en'
                  ? 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
                  : '是的，您可以随时取消订阅。您的访问权限将持续到您的计费周期结束。'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'en'
                  ? 'What payment methods do you accept?'
                  : '您接受哪些付款方式？'}
              </h3>
              <p>
                {language === 'en'
                  ? 'We accept all major credit cards, PayPal, and select regional payment methods.'
                  : '我们接受所有主要信用卡、PayPal 和部分地区性支付方式。'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'en'
                  ? 'Do unused daily generations roll over?'
                  : '未使用的每日生成次数会累积吗？'}
              </h3>
              <p>
                {language === 'en'
                  ? 'No, daily generations reset at the end of each day. They do not roll over to the next day.'
                  : '不会，每日生成次数在每天结束时重置。它们不会累积到第二天。'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">
                {language === 'en'
                  ? 'Do you offer refunds?'
                  : '您提供退款吗？'}
              </h3>
              <p>
                {language === 'en'
                  ? 'We offer a 7-day money-back guarantee for new Pro and Enterprise subscriptions if you are not satisfied with our service.'
                  : '对于新的专业版和企业版订阅，如果您对我们的服务不满意，我们提供 7 天退款保证。'}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Still have questions?' : '还有疑问？'}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Contact our support team and we\'ll get back to you as soon as possible.'
              : '联系我们的支持团队，我们将尽快回复您。'}
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block"
          >
            {language === 'en' ? 'Contact Support' : '联系支持团队'}
          </Link>
        </section>

        <footer className="bg-indigo-900 bg-opacity-50 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'About' : '关于'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="hover:text-indigo-300">
                      {language === 'en' ? 'Features' : '功能'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-indigo-300">
                      {language === 'en' ? 'Pricing' : '定价'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="hover:text-indigo-300">
                      {language === 'en' ? 'Partners' : '合作伙伴'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Tools' : '工具'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/extend-image" className="hover:text-indigo-300">
                      {language === 'en' ? 'Extend Image' : '扩展图像'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Legal' : '法律'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="hover:text-indigo-300">
                      {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-indigo-300">
                      {language === 'en' ? 'Terms of Service' : '服务条款'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Contact' : '联系'}
                </h3>
                <p>
                  {language === 'en' ? 'Email: ' : '邮箱: '}
                  support@aiimagemaker.com
                </p>
              </div>
            </div>
            <div className="border-t border-indigo-700 pt-6 text-center">
              <p>
                © 2025 • {language === 'en' ? 'AI Image Generator' : 'AI 图像生成器'}. 
                {language === 'en' ? ' All rights reserved.' : ' 保留所有权利。'}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default PricingPage; 