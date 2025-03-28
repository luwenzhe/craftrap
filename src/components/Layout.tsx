import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={dir}>
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Raphael AI Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold">Raphael AI</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/features" className="hover:text-blue-600">
            {t('nav.features')}
          </Link>
          <Link href="/faq" className="hover:text-blue-600">
            {t('nav.faq')}
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
            {t('nav.pricing')}
          </Link>
          <Link href="/expand-image" className="hover:text-blue-600">
            {t('nav.expandImage')}
          </Link>
          <LanguageSelector />
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img src="/logo.png" alt="Raphael AI Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">Raphael AI</span>
              </div>
              <p className="text-gray-600 mt-2">
                {t('footer.description')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3">{t('footer.about')}</h3>
                <ul className="space-y-2">
                  <li><Link href="/features" className="text-gray-600 hover:text-blue-600">{t('nav.features')}</Link></li>
                  <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600">{t('nav.pricing')}</Link></li>
                  <li><Link href="/partners" className="text-gray-600 hover:text-blue-600">Partners</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">{t('footer.tools')}</h3>
                <ul className="space-y-2">
                  <li><Link href="/expand-image" className="text-gray-600 hover:text-blue-600">{t('nav.expandImage')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">{t('footer.copyright')}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 