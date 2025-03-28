import React, { useState, useCallback } from 'react';
import { ImageService } from '../services/imageService';
import { useLanguage } from '../context/LanguageContext';

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function ImageGenerator() {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [widgetId, setWidgetId] = useState('');
  const [showResult, setShowResult] = useState(false);

  // 初始化 Turnstile
  React.useEffect(() => {
    // 加载 Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // 渲染 Turnstile widget
      const widgetId = window.turnstile.render('#turnstile-container', {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          setTurnstileToken(token);
        },
      });
      setWidgetId(widgetId);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    if (!turnstileToken) {
      setError('Please complete the verification');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await ImageService.generateImage(prompt, turnstileToken);
      
      if (!result.success) {
        setError(result.error || 'Failed to generate image');
        return;
      }

      setGeneratedImage(result.imageUrl || '');
      setShowResult(true);
    } catch (err) {
      setError('Failed to generate image');
      console.error('Generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            {t('generator.promptLabel')}
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            required
          />
        </div>

        <div id="turnstile-container" className="my-4"></div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading || !turnstileToken}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            loading || !turnstileToken ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? t('generator.generating') : t('generator.generate')}
        </button>
      </form>

      {showResult && generatedImage && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">{t('generator.result')}</h2>
          <img
            src={generatedImage}
            alt="Generated"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
} 