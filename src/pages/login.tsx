import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // This would be determined based on user's language preference
  // For this example, we'll default to English
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // In a real implementation, this would call your authentication API
      // For this example, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login success
      console.log('Logged in with:', email);
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError(language === 'en' ? 'Invalid email or password' : '邮箱或密码无效');
    } finally {
      setIsLoading(false);
    }
  };
  
  const translations = {
    title: language === 'en' ? 'Login | AI Image Generator' : '登录 | AI 图像生成器',
    metaDescription: language === 'en' 
      ? 'Log in to your AI Image Generator account' 
      : '登录您的 AI 图像生成器账户',
    header: language === 'en' ? 'AI Image Generator' : 'AI 图像生成器',
    features: language === 'en' ? 'Features' : '功能',
    faq: language === 'en' ? 'FAQ' : '常见问题',
    pricing: language === 'en' ? 'Pricing' : '定价',
    login: language === 'en' ? 'Login' : '登录',
    welcomeBack: language === 'en' ? 'Welcome Back' : '欢迎回来',
    loginSubtitle: language === 'en' 
      ? 'Log in to your account to access your AI image generation dashboard' 
      : '登录您的账户以访问 AI 图像生成仪表板',
    emailPlaceholder: language === 'en' ? 'Email address' : '邮箱地址',
    passwordPlaceholder: language === 'en' ? 'Password' : '密码',
    forgotPassword: language === 'en' ? 'Forgot password?' : '忘记密码？',
    loginButton: language === 'en' ? 'Log in' : '登录',
    loginLoading: language === 'en' ? 'Logging in...' : '登录中...',
    noAccount: language === 'en' ? 'Don\'t have an account?' : '没有账户？',
    signUp: language === 'en' ? 'Sign up' : '注册',
    continueWithGoogle: language === 'en' ? 'Continue with Google' : '使用 Google 继续',
    continueWithFacebook: language === 'en' ? 'Continue with Facebook' : '使用 Facebook 继续',
    or: language === 'en' ? 'or' : '或',
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
                {translations.welcomeBack}
              </h1>
              <p className="text-center text-gray-600 mb-8">
                {translations.loginSubtitle}
              </p>
              
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      {translations.forgotPassword}
                    </Link>
                  </div>
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
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? translations.loginLoading : translations.loginButton}
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  {translations.noAccount}{' '}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                    {translations.signUp}
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

export default LoginPage;