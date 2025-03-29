import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const router = useRouter();
  const { plan } = router.query;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError(language === 'en' ? 'Passwords do not match' : '密码不匹配');
      setIsLoading(false);
      return;
    }

    try {
      // 模拟注册过程
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 根据选择的计划重定向
      if (plan === 'pro') {
        window.location.href = '/payment?plan=pro';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(language === 'en' ? 'Registration failed' : '注册失败');
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    title: language === 'en' ? 'Sign Up | AI Image Generator' : '注册 | AI 图像生成器',
    metaDescription: language === 'en' 
      ? 'Create your AI Image Generator account' 
      : '创建您的 AI 图像生成器账户',
    header: language === 'en' ? 'AI Image Generator' : 'AI 图像生成器',
    features: language === 'en' ? 'Features' : '功能',
    faq: language === 'en' ? 'FAQ' : '常见问题',
    pricing: language === 'en' ? 'Pricing' : '定价',
    login: language === 'en' ? 'Login' : '登录',
    createAccount: language === 'en' ? 'Create Account' : '创建账户',
    signupSubtitle: language === 'en' 
      ? 'Sign up to start generating amazing AI images' 
      : '注册以开始生成令人惊叹的 AI 图像',
    emailPlaceholder: language === 'en' ? 'Email address' : '邮箱地址',
    passwordPlaceholder: language === 'en' ? 'Password' : '密码',
    confirmPasswordPlaceholder: language === 'en' ? 'Confirm password' : '确认密码',
    signupButton: language === 'en' ? 'Sign up' : '注册',
    signupLoading: language === 'en' ? 'Creating account...' : '创建账户中...',
    haveAccount: language === 'en' ? 'Already have an account?' : '已有账户？',
    loginLink: language === 'en' ? 'Log in' : '登录',
    continueWithGoogle: language === 'en' ? 'Continue with Google' : '使用 Google 继续',
    continueWithFacebook: language === 'en' ? 'Continue with Facebook' : '使用 Facebook 继续',
    or: language === 'en' ? 'or' : '或',
    selectedPlan: language === 'en' 
      ? `Selected Plan: ${plan === 'pro' ? 'Pro' : 'Free'}`
      : `已选择方案：${plan === 'pro' ? '专业版' : '免费版'}`,
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
                {translations.createAccount}
              </h1>
              <p className="text-center text-gray-600 mb-4">
                {translations.signupSubtitle}
              </p>
              {plan && (
                <p className="text-center text-blue-600 font-medium mb-6">
                  {translations.selectedPlan}
                </p>
              )}
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900" 
                    placeholder={translations.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input 
                    id="password"
                    type="password" 
                    className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900" 
                    placeholder={translations.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input 
                    id="confirmPassword"
                    type="password" 
                    className="w-full bg-white border border-gray-300 rounded p-3 text-gray-900" 
                    placeholder={translations.confirmPasswordPlaceholder}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? translations.signupLoading : translations.signupButton}
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  {translations.haveAccount}{' '}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    {translations.loginLink}
                  </Link>
                </p>
              </div>
              
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {translations.or}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <img src="/google-icon.png" alt="Google" className="h-5 w-5 mr-2" />
                    {translations.continueWithGoogle}
                  </button>
                  
                  <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <img src="/facebook-icon.png" alt="Facebook" className="h-5 w-5 mr-2" />
                    {translations.continueWithFacebook}
                  </button>
                </div>
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

export default SignupPage; 