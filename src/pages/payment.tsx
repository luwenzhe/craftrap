import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PaymentPage = () => {
  const router = useRouter();
  const { plan } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    // 从 URL 参数中获取语言设置
    const lang = router.query.lang as 'en' | 'zh';
    if (lang) {
      setLanguage(lang);
    }
  }, [router.query.lang]);

  const handlePayment = async () => {
    setIsLoading(true);
    setError('');

    try {
      // 模拟支付过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 支付成功后重定向到仪表板
      window.location.href = '/dashboard';
    } catch (err) {
      setError(language === 'en' ? 'Payment failed' : '支付失败');
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    title: language === 'en' ? 'Payment | AI Image Generator' : '支付 | AI 图像生成器',
    metaDescription: language === 'en' 
      ? 'Complete your subscription payment' 
      : '完成您的订阅支付',
    header: language === 'en' ? 'AI Image Generator' : 'AI 图像生成器',
    features: language === 'en' ? 'Features' : '功能',
    faq: language === 'en' ? 'FAQ' : '常见问题',
    pricing: language === 'en' ? 'Pricing' : '定价',
    login: language === 'en' ? 'Login' : '登录',
    paymentTitle: language === 'en' ? 'Complete Your Payment' : '完成支付',
    paymentSubtitle: language === 'en' 
      ? 'Please review your order and complete the payment' 
      : '请检查您的订单并完成支付',
    planDetails: language === 'en' 
      ? `Selected Plan: ${plan === 'pro' ? 'Pro Plan' : 'Free Plan'}`
      : `已选择方案：${plan === 'pro' ? '专业版' : '免费版'}`,
    price: language === 'en' 
      ? `Price: ${plan === 'pro' ? '$9.99/month' : 'Free'}`
      : `价格：${plan === 'pro' ? '¥68/月' : '免费'}`,
    paymentButton: language === 'en' ? 'Complete Payment' : '完成支付',
    paymentLoading: language === 'en' ? 'Processing...' : '处理中...',
    cancelButton: language === 'en' ? 'Cancel' : '取消',
  };

  return (
    <>
      <Head>
        <title>{translations.title}</title>
        <meta name="description" content={translations.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            </Link>
            <h1 className="text-2xl font-bold">{translations.header}</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/features" className="hover:text-blue-600">
              {translations.features}
            </Link>
            <Link href="/faq" className="hover:text-blue-600">
              {translations.faq}
            </Link>
            <Link href="/pricing" className="hover:text-blue-600">
              {translations.pricing}
            </Link>
            <Link href="/login" className="text-blue-600 hover:underline">
              {translations.login}
            </Link>
            <select 
              className="bg-transparent border border-gray-300 rounded p-1"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'zh')}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </nav>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
                {translations.paymentTitle}
              </h1>
              <p className="text-center text-gray-600 mb-6">
                {translations.paymentSubtitle}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  {translations.planDetails}
                </p>
                <p className="text-xl font-bold text-blue-600">
                  {translations.price}
                </p>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <div className="space-y-4">
                <button 
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? translations.paymentLoading : translations.paymentButton}
                </button>
                
                <Link 
                  href="/pricing"
                  className="block w-full text-center text-gray-600 hover:text-gray-900"
                >
                  {translations.cancelButton}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-50 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              © 2025 • {language === 'en' ? 'AI Image Generator' : 'AI 图像生成器'}. 
              {language === 'en' ? ' All rights reserved.' : ' 保留所有权利。'}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default PaymentPage; 