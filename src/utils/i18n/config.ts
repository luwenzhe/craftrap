export interface Language {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl'; // 文本方向：ltr (从左到右) 或 rtl (从右到左)
}

export const languages: Language[] = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    dir: 'ltr'
  },
  { 
    code: 'zh', 
    name: 'Chinese (Simplified)', 
    nativeName: '简体中文',
    dir: 'ltr'
  },
  { 
    code: 'zh-TW', 
    name: 'Chinese (Traditional)', 
    nativeName: '繁體中文',
    dir: 'ltr'
  },
  { 
    code: 'ja', 
    name: 'Japanese', 
    nativeName: '日本語',
    dir: 'ltr'
  },
  { 
    code: 'ko', 
    name: 'Korean', 
    nativeName: '한국어',
    dir: 'ltr'
  },
  { 
    code: 'ar', 
    name: 'Arabic', 
    nativeName: 'العربية',
    dir: 'rtl'
  }
];

export const defaultLanguage = 'en';

export const getLanguageByCode = (code: string): Language => {
  const language = languages.find(lang => lang.code === code);
  return language || languages.find(lang => lang.code === defaultLanguage)!;
};

export const getTextDirection = (languageCode: string): 'ltr' | 'rtl' => {
  const language = getLanguageByCode(languageCode);
  return language.dir;
}; 