import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PricingPlans from '../components/PricingPlans';
import { useLanguage } from '../context/LanguageContext';

const PricingPage = () => {
  const { t, language, setLanguage } = useLanguage();

  const plans = [
    {
      id: 'free',
      name: language === 'en' ? 'Free' : '免费版',
      price: '0',
      currency: language === 'en' ? '$' : '¥',
      period: language === 'en' ? 'Forever' : '永久免费',
      features: [
        language === 'en' ? '15 images per day' : '每天15张图片',
        language === 'en' ? 'Basic styles' : '基础风格',
        language === 'en' ? 'Standard quality' : '标准质量',
        language === 'en' ? 'Community support' : '社区支持'
      ],
      buttonText: language === 'en' ? 'Get Started' : '开始使用',
      buttonLink: '/signup',
      isPopular: false
    },
    {
      id: 'pro',
      name: language === 'en' ? 'Pro' : '专业版',
      price: language === 'en' ? '9.99' : '68',
      currency: language === 'en' ? '$' : '¥',
      period: language === 'en' ? 'per month' : '每月',
      features: [
        language === 'en' ? '100 images per day' : '每天100张图片',
        language === 'en' ? 'All styles' : '所有风格',
        language === 'en' ? 'High quality' : '高质量',
        language === 'en' ? 'Priority support' : '优先支持',
        language === 'en' ? 'No watermarks' : '无水印'
      ],
      buttonText: language === 'en' ? 'Subscribe' : '订阅',
      buttonLink: '/signup?plan=pro',
      isPopular: true
    },
    {
      id: 'enterprise',
      name: language === 'en' ? 'Enterprise' : '企业版',
      price: language === 'en' ? '49.99' : '328',
      currency: language === 'en' ? '$' : '¥',
      period: language === 'en' ? 'per month' : '每月',
      features: [
        language === 'en' ? 'Unlimited images' : '无限图片',
        language === 'en' ? 'All styles' : '所有风格',
        language === 'en' ? 'Maximum quality' : '最高质量',
        language === 'en' ? 'Dedicated support' : '专属支持',
        language === 'en' ? 'API access' : 'API访问',
        language === 'en' ? 'Commercial usage' : '商业使用授权'
      ],
      buttonText: language === 'en' ? 'Contact Sales' : '联系销售',
      buttonLink: '/contact',
      isPopular: false
    }
  ];

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

      <main className="min-h-screen bg-white text-gray-900">
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            </Link>
            <h1 className="text-2xl font-bold">
              {language === 'en' ? 'AI Image Generator' : 'AI 图像生成器'}
            </h1>
          </div>
          
          <nav className="flex space-x-6 items-center">
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
              onChange={(e) => setLanguage(e.target.value as 'en' | 'zh' | 'ja' | 'ko' | 'ar')}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="ar">العربية</option>
            </select>
          </nav>
        </header>

        <section className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {language === 'en' ? 'Plans & Pricing' : '方案与定价'}
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
            {language === 'en' 
              ? 'Choose the perfect plan for your needs. All plans include access to our FLUX.1-Dev AI image generator.' 
              : '选择适合您需求的完美方案。所有方案均包含使用我们的 FLUX.1-Dev AI 图像生成器的权限。'}
          </p>
        </section>

        <PricingPlans plans={plans} title={title} locale={language} />

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            {language === 'en' ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {language === 'en' ? 'Still have questions?' : '还有疑问？'}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
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

        <footer className="bg-gray-50 py-12">
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
                    <Link href="/expand-image" className="hover:text-indigo-300">
                      {language === 'en' ? 'Expand Image' : '扩展图像'}
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
                    <Link href="/terms" className="hover:text-indigo-300">
                      {language === 'en' ? 'Terms of Service' : '服务条款'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-indigo-300">
                      {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {language === 'en' ? 'Support' : '支持'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="hover:text-indigo-300">
                      {language === 'en' ? 'Contact Us' : '联系我们'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-indigo-300">
                      {language === 'en' ? 'FAQ' : '常见问题'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-indigo-800 pt-8 text-center">
              <p>© 2025 Raphael AI. {language === 'en' ? 'All rights reserved.' : '保留所有权利。'}</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default PricingPage;