import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  // 特性数组
  const features = [
    {
      id: 1,
      title: t('features.zeroCost'),
      description: t('features.zeroCost.description')
    },
    {
      id: 2,
      title: t('features.quality'),
      description: t('features.quality.description')
    },
    {
      id: 3,
      title: t('features.textUnderstanding'),
      description: t('features.textUnderstanding.description')
    },
    {
      id: 4,
      title: t('features.speed'),
      description: t('features.speed.description')
    },
    {
      id: 5,
      title: t('features.privacy'),
      description: t('features.privacy.description')
    },
    {
      id: 6,
      title: t('features.styles'),
      description: t('features.styles.description')
    }
  ];

  // 评价数组
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.person1.name'),
      title: t('testimonials.person1.title'),
      quote: t('testimonials.person1.quote')
    },
    {
      id: 2,
      name: t('testimonials.person2.name'),
      title: t('testimonials.person2.title'),
      quote: t('testimonials.person2.quote')
    },
    {
      id: 3,
      name: t('testimonials.person3.name'),
      title: t('testimonials.person3.title'),
      quote: t('testimonials.person3.quote')
    },
    {
      id: 4,
      name: t('testimonials.person4.name'),
      title: t('testimonials.person4.title'),
      quote: t('testimonials.person4.quote')
    },
    {
      id: 5,
      name: t('testimonials.person5.name'),
      title: t('testimonials.person5.title'),
      quote: t('testimonials.person5.quote')
    },
    {
      id: 6,
      name: t('testimonials.person6.name'),
      title: t('testimonials.person6.title'),
      quote: t('testimonials.person6.quote')
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Raphael AI | {t('nav.features')}</title>
        <meta name="description" content={t('features.subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* 主要功能部分 */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-center mb-4">{t('features.title')}</h1>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 数据统计部分 */}
        <section className="mb-20 bg-gray-50 py-12 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t('stats.title')}</h2>
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

        {/* 评价部分 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <div className="flex items-center text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 示例图片展示 */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">{t('inspiration.title')}</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('inspiration.subtitle')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={`/examples/example-${num}.jpg`} 
                  alt={`${t('inspiration.example')} ${num}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features; 