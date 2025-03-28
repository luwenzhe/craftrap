import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, defaultLanguage, languages, getTextDirection } from '../utils/i18n';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
  availableLanguages: typeof languages;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 先从本地存储获取语言设置，如果没有则使用浏览器语言或默认语言
  const getBrowserLanguage = (): string => {
    if (typeof window === 'undefined') return defaultLanguage;
    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) return savedLanguage;
    
    const browserLang = navigator.language.split('-')[0];
    const isSupported = languages.some(lang => lang.code === browserLang);
    
    return isSupported ? browserLang : defaultLanguage;
  };

  const [language, setLanguageState] = useState<string>(defaultLanguage);
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    setLanguageState(getBrowserLanguage());
  }, []);

  useEffect(() => {
    // 设置文档方向
    const direction = getTextDirection(language);
    setDir(direction);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // 保存语言选择到本地存储
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
  };

  // 翻译函数
  const t = (key: string): string => {
    if (!translations[language] || !translations[language][key]) {
      // 如果找不到翻译，使用英语作为回退
      return translations[defaultLanguage][key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, availableLanguages: languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 