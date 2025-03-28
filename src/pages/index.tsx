import React, { useState } from 'react';
import Head from 'next/head';
import { generateImage } from '../api/generateImage';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

const Home = () => {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('high quality');
  const [aspect, setAspect] = useState('square');
  const [style, setStyle] = useState('');
  const [color, setColor] = useState('');
  const [lighting, setLighting] = useState('');
  const [composition, setComposition] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      // 使用客户端API调用
      const response = await generateImage({
        prompt,
        negativePrompt,
        aspect: aspect as 'square' | 'portrait' | 'landscape',
        style,
        color,
        lighting,
        composition
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
    setPrompt(randomPrompts[Math.floor(Math.random() * randomPrompts.length)]);
  };

  const handleClear = () => {
    setPrompt('');
    setNegativePrompt('high quality');
    setStyle('');
    setColor('');
    setLighting('');
    setComposition('');
  };

  const examples = [
    { id: 1, src: '/examples/example-1.jpg', alt: 'Example 1' },
    { id: 2, src: '/examples/example-2.jpg', alt: 'Example 2' },
    { id: 3, src: '/examples/example-3.jpg', alt: 'Example 3' },
    { id: 4, src: '/examples/example-4.jpg', alt: 'Example 4' },
    { id: 5, src: '/examples/example-5.jpg', alt: 'Example 5' },
    { id: 6, src: '/examples/example-6.jpg', alt: 'Example 6' },
    { id: 7, src: '/examples/example-7.jpg', alt: 'Example 7' },
    { id: 8, src: '/examples/example-8.jpg', alt: 'Example 8' },
    { id: 9, src: '/examples/example-9.jpg', alt: 'Example 9' },
    { id: 10, src: '/examples/example-10.jpg', alt: 'Example 10' },
    { id: 11, src: '/examples/example-11.jpg', alt: 'Example 11' },
    { id: 12, src: '/examples/example-12.jpg', alt: 'Example 12' },
    { id: 13, src: '/examples/example-13.jpg', alt: 'Example 13' },
    { id: 14, src: '/examples/example-14.jpg', alt: 'Example 14' },
    { id: 15, src: '/examples/example-15.jpg', alt: 'Example 15' },
    { id: 16, src: '/examples/example-16.jpg', alt: 'Example 16' },
  ];

  return (
    <Layout>
      <Head>
        <title>Raphael AI | {t('hero.subtitle')}</title>
        <meta name="description" content={t('hero.tagline')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex space-x-2 text-lg font-semibold mb-3">
            <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">{t('hero.tagline')}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-600">
            <span className="flex items-center">
              <span className="font-bold text-blue-600 mr-2">100%</span> {t('hero.free')}
            </span>
            <span className="flex items-center">
              <span className="font-bold text-blue-600 mr-2">✓</span> {t('hero.powered')}
            </span>
            <span className="flex items-center">
              <span className="font-bold text-blue-600 mr-2">✓</span> {t('hero.noLogin')}
            </span>
            <span className="flex items-center">
              <span className="font-bold text-blue-600 mr-2">∞</span> {t('hero.unlimited')}
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">{t('generator.title')}</h2>
            <div className="mb-6">
              <textarea 
                className="w-full border border-gray-300 rounded p-4 text-gray-800"
                placeholder={t('generator.promptPlaceholder')}
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('generator.aspectRatio')}</label>
                <select 
                  className="w-full border border-gray-300 rounded p-2 text-gray-800"
                  value={aspect}
                  onChange={(e) => setAspect(e.target.value)}
                >
                  <option value="square">{t('generator.aspectRatio.square')}</option>
                  <option value="portrait">{t('generator.aspectRatio.portrait')}</option>
                  <option value="landscape">{t('generator.aspectRatio.landscape')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('generator.style')}</label>
                <select 
                  className="w-full border border-gray-300 rounded p-2 text-gray-800"
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
                <label className="block text-sm font-medium mb-2">{t('generator.color')}</label>
                <select 
                  className="w-full border border-gray-300 rounded p-2 text-gray-800"
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
                <label className="block text-sm font-medium mb-2">{t('generator.lighting')}</label>
                <select 
                  className="w-full border border-gray-300 rounded p-2 text-gray-800"
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

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">{t('generator.negativePrompt')}</label>
              <textarea 
                className="w-full border border-gray-300 rounded p-3 text-gray-800"
                placeholder={t('generator.negativePromptPlaceholder')}
                rows={2}
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-4">
              <button 
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-lg ${
                  isGenerating
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? t('generator.generating') : t('generator.generate')}
              </button>
              <button 
                className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
                onClick={handleClear}
              >
                {t('generator.clear')}
              </button>
              <button 
                className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
                onClick={handleRandomPrompt}
              >
                {t('generator.random')}
              </button>
            </div>

            {generatedImage && (
              <div className="mt-8 flex justify-center">
                <div className="text-center">
                  <img 
                    src={generatedImage} 
                    alt="Generated AI Image" 
                    className="rounded-lg shadow-lg max-w-full max-h-[512px]" 
                  />
                  <div className="flex justify-center space-x-4 mt-4">
                    <a 
                      href={generatedImage}
                      download="raphael-ai-image.png"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    >
                      {t('generator.download')}
                    </a>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded">
                      {t('generator.share')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t('inspiration.title')}</h2>
        <p className="text-center text-lg mb-10">{t('inspiration.subtitle')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {examples.map((example) => (
            <div key={example.id} className="relative aspect-square group">
              <Image
                src={example.src}
                alt={example.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                priority={example.id <= 4}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 bg-gray-50 rounded-xl my-16">
        <h2 className="text-3xl font-bold text-center mb-10">{t('features.title')}</h2>
        <p className="text-center text-lg mb-12">{t('features.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.zeroCost')}</h3>
            <p>{t('features.zeroCost.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.quality')}</h3>
            <p>{t('features.quality.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.textUnderstanding')}</h3>
            <p>{t('features.textUnderstanding.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.speed')}</h3>
            <p>{t('features.speed.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.privacy')}</h3>
            <p>{t('features.privacy.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{t('features.styles')}</h3>
            <p>{t('features.styles.description')}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">{t('stats.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3M+</div>
            <div className="text-xl">{t('stats.activeUsers')}</div>
            <div className="text-gray-600">{t('stats.activeUsers.description')}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1,530</div>
            <div className="text-xl">{t('stats.images')}</div>
            <div className="text-gray-600">{t('stats.images.description')}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-xl">{t('stats.rating')}</div>
            <div className="text-gray-600">{t('stats.rating.description')}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 