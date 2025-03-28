import React from 'react';
import { useLanguage } from '../context/LanguageContext';

type LanguageSelectorProps = {
  className?: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage, availableLanguages } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <select 
      className={`bg-transparent border border-gray-300 rounded p-1 ${className}`}
      value={language}
      onChange={handleLanguageChange}
      aria-label="Select language"
    >
      {availableLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector; 