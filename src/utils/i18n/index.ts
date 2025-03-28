import { languages, defaultLanguage, getLanguageByCode, getTextDirection } from './config';
import en from './translations/en';
import zh from './translations/zh';
import zhTW from './translations/zh-TW';
import ja from './translations/ja';
import ko from './translations/ko';
import ar from './translations/ar';

// 翻译对象的类型定义
type TranslationDictionary = {
  [key: string]: string;
};

// 所有语言的翻译集合
type TranslationsCollection = {
  [key: string]: TranslationDictionary;
};

const translations: TranslationsCollection = {
  en,
  zh,
  'zh-TW': zhTW,
  ja,
  ko,
  ar
};

export {
  languages,
  defaultLanguage,
  getLanguageByCode,
  getTextDirection,
  translations,
  type TranslationDictionary,
  type TranslationsCollection
}; 