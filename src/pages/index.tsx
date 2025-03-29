import React, { useState } from 'react';
import Head from 'next/head';
import { generateImage } from '../api/generateImage';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

const Home = () => {
  const { t, language } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [aspect, setAspect] = useState('square');
  const [style, setStyle] = useState('');
  const [color, setColor] = useState('');
  const [lighting, setLighting] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const response = await generateImage({
        prompt,
        negativePrompt,
        aspect: aspect as 'square' | 'portrait' | 'landscape',
        style,
        color,
        lighting
      });
      
      if (response.success) {
        setGeneratedImage(response.imageUrl);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRandomPrompt = () => {
    const randomPrompts = [
      "A serene Japanese garden with cherry blossoms and a small koi pond",
      "Futuristic cityscape with flying cars and neon lights",
      "Enchanted forest with glowing mushrooms and fairy lights",
      "Cosmic landscape with vibrant nebulas and distant galaxies",
      "Ancient temple ruins overgrown with tropical vegetation"
    ];
    
    const zhRandomPrompts = [
      "宁静的日本花园，樱花盛开，有一个小锦鲤池塘",
      "未来主义城市景观，有飞行汽车和霓虹灯",
      "魔法森林，有发光的蘑菇和仙灯",
      "宇宙景观，有鲜艳的星云和遥远的星系",
      "被热带植被覆盖的古代寺庙废墟"
    ];
    
    const prompts = language === 'zh' ? zhRandomPrompts : randomPrompts;
    setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  const handleClear = () => {
    setPrompt('');
    setNegativePrompt('');
    setAspect('square');
    setStyle('');
    setColor('');
    setLighting('');
    setGeneratedImage('');
  };

  const examples = [
    '/examples/example-1.jpg',
    '/examples/example-2.jpg',
    '/examples/example-3.jpg',
    '/examples/example-4.jpg',
  ];

  return (
    <Layout>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
      </Head>

      <main>
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('home.hero.title')}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">{t('home.hero.subtitle')}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('generator.title')}</h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      {t('generator.promptPlaceholder')}
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                      rows={3}
                      placeholder={t('generator.promptPlaceholder')}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      {t('generator.negativePrompt')}
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                      rows={2}
                      placeholder={t('generator.negativePromptPlaceholder')}
                      value={negativePrompt}
                      onChange={(e) => setNegativePrompt(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {showAdvanced ? t('generator.hideAdvanced') : t('generator.showAdvanced')}
                    </button>
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating || !prompt.trim()}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50"
                    >
                      {isGenerating ? t('generator.generating') : t('generator.generate')}
                    </button>
                  </div>

                  {showAdvanced && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('generator.aspectRatio')}</label>
                        <select 
                          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
                          value={aspect}
                          onChange={(e) => setAspect(e.target.value)}
                        >
                          <option value="square">{t('generator.aspectRatio.square')}</option>
                          <option value="portrait">{t('generator.aspectRatio.portrait')}</option>
                          <option value="landscape">{t('generator.aspectRatio.landscape')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('generator.style')}</label>
                        <select 
                          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                        >
                          <option value="">{t('generator.style.none')}</option>
                          <option value="realistic">{t('generator.style.realistic')}</option>
                          <option value="anime">{t('generator.style.anime')}</option>
                          <option value="digital">{t('generator.style.digital')}</option>
                          <option value="oil">{t('generator.style.oil')}</option>
                          <option value="watercolor">{t('generator.style.watercolor')}</option>
                          <option value="sketch">{t('generator.style.sketch')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('generator.color')}</label>
                        <select 
                          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                        >
                          <option value="">{t('generator.color.none')}</option>
                          <option value="vibrant">{t('generator.color.vibrant')}</option>
                          <option value="pastel">{t('generator.color.pastel')}</option>
                          <option value="monochrome">{t('generator.color.monochrome')}</option>
                          <option value="dark">{t('generator.color.dark')}</option>
                          <option value="bright">{t('generator.color.bright')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('generator.lighting')}</label>
                        <select 
                          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900"
                          value={lighting}
                          onChange={(e) => setLighting(e.target.value)}
                        >
                          <option value="">{t('generator.lighting.none')}</option>
                          <option value="soft">{t('generator.lighting.soft')}</option>
                          <option value="dramatic">{t('generator.lighting.dramatic')}</option>
                          <option value="studio">{t('generator.lighting.studio')}</option>
                          <option value="neon">{t('generator.lighting.neon')}</option>
                          <option value="natural">{t('generator.lighting.natural')}</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex items-center justify-center">
                  {generatedImage ? (
                    <div className="text-center">
                      <img 
                        src={generatedImage} 
                        alt="Generated AI Image" 
                        className="rounded-lg shadow-lg max-w-full max-h-[512px] mx-auto" 
                      />
                      <div className="flex justify-center space-x-4 mt-4">
                        <a 
                          href={generatedImage}
                          download="raphael-ai-image.jpg"
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                        >
                          {t('generator.download')}
                        </a>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-lg">
                          {t('generator.share')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <p>{t('generator.placeholder')}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('features.title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('features.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.zeroCost')}</h3>
                <p className="text-gray-600">{t('features.zeroCost.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.quality')}</h3>
                <p className="text-gray-600">{t('features.quality.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.textUnderstanding')}</h3>
                <p className="text-gray-600">{t('features.textUnderstanding.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.speed')}</h3>
                <p className="text-gray-600">{t('features.speed.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.privacy')}</h3>
                <p className="text-gray-600">{t('features.privacy.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.styles')}</h3>
                <p className="text-gray-600">{t('features.styles.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('testimonials.title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonials.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">{t(`testimonials.${index}.text`)}</p>
                  <div className="flex items-center">
                    <img 
                      src={`/testimonial-${index}.jpg`} 
                      alt={t(`testimonials.${index}.name`)}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{t(`testimonials.${index}.name`)}</p>
                      <p className="text-sm text-gray-500">{t(`testimonials.${index}.title`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home; 