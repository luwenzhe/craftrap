import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

const ExpandImage = () => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);

  // 这些函数在实际应用中会实现真正的上传和处理逻辑
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // 处理文件上传
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // 处理文件上传
    }
  };

  const handleSampleClick = (sampleNumber: number) => {
    // 处理点击示例图片
  };

  // 步骤数据
  const steps = [
    {
      id: 1,
      title: t('expandImage.howItWorks.step1.title'),
      description: t('expandImage.howItWorks.step1.description')
    },
    {
      id: 2,
      title: t('expandImage.howItWorks.step2.title'),
      description: t('expandImage.howItWorks.step2.description')
    },
    {
      id: 3,
      title: t('expandImage.howItWorks.step3.title'),
      description: t('expandImage.howItWorks.step3.description')
    }
  ];

  // 特性数据
  const features = [
    {
      id: 1,
      title: t('expandImage.features.feature1.title'),
      description: t('expandImage.features.feature1.description')
    },
    {
      id: 2,
      title: t('expandImage.features.feature2.title'),
      description: t('expandImage.features.feature2.description')
    },
    {
      id: 3,
      title: t('expandImage.features.feature3.title'),
      description: t('expandImage.features.feature3.description')
    },
    {
      id: 4,
      title: t('expandImage.features.feature4.title'),
      description: t('expandImage.features.feature4.description')
    }
  ];

  // FAQ数据
  const faqs = [
    {
      id: 1,
      question: t('expandImage.faq.question1'),
      answer: t('expandImage.faq.answer1')
    },
    {
      id: 2,
      question: t('expandImage.faq.question2'),
      answer: t('expandImage.faq.answer2')
    },
    {
      id: 3,
      question: t('expandImage.faq.question3'),
      answer: t('expandImage.faq.answer3')
    },
    {
      id: 4,
      question: t('expandImage.faq.question4'),
      answer: t('expandImage.faq.answer4')
    },
    {
      id: 5,
      question: t('expandImage.faq.question5'),
      answer: t('expandImage.faq.answer5')
    },
    {
      id: 6,
      question: t('expandImage.faq.question6'),
      answer: t('expandImage.faq.answer6')
    },
    {
      id: 7,
      question: t('expandImage.faq.question7'),
      answer: t('expandImage.faq.answer7')
    },
    {
      id: 8,
      question: t('expandImage.faq.question8'),
      answer: t('expandImage.faq.answer8')
    },
    {
      id: 9,
      question: t('expandImage.faq.question9'),
      answer: t('expandImage.faq.answer9')
    },
    {
      id: 10,
      question: t('expandImage.faq.question10'),
      answer: t('expandImage.faq.answer10')
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Raphael AI | {t('nav.expandImage')}</title>
        <meta name="description" content={t('expandImage.subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* 顶部横幅 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('expandImage.title')}</h1>
          <p className="text-xl text-gray-600">{t('expandImage.subtitle')}</p>
        </div>

        {/* 上传区域 */}
        <div className="max-w-xl mx-auto mb-16">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition duration-300 ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <input 
              type="file" 
              id="fileInput" 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
            <div className="mb-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                {t('expandImage.uploadButton')}
              </button>
            </div>
            <p className="text-gray-500">{t('expandImage.dropText')}</p>
          </div>

          {/* 示例图片 */}
          <div className="mt-6">
            <p className="text-center text-gray-600 mb-4">{t('expandImage.noPhoto')}</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <div 
                  key={num}
                  className="overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => handleSampleClick(num)}
                >
                  <img 
                    src={`/examples/example-${num}.jpg`} 
                    alt={`${t('expandImage.sample')} ${num}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            {t('expandImage.agreement')}
          </p>
        </div>

        {/* 工作原理 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('expandImage.howItWorks.title')}</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('expandImage.howItWorks.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 功能展示 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('expandImage.features.title')}</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('expandImage.features.description')}
          </p>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                <div className="flex-1 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">视频演示</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">{t('expandImage.faq.title')}</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('expandImage.faq.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  {faq.id}. {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ExpandImage; 