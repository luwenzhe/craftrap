import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  // FAQ问题和答案的数组
  const faqs = [
    { id: 1, question: t('faq.question1'), answer: t('faq.answer1') },
    { id: 2, question: t('faq.question2'), answer: t('faq.answer2') },
    { id: 3, question: t('faq.question3'), answer: t('faq.answer3') },
    { id: 4, question: t('faq.question4'), answer: t('faq.answer4') },
    { id: 5, question: t('faq.question5'), answer: t('faq.answer5') },
    { id: 6, question: t('faq.question6'), answer: t('faq.answer6') },
    { id: 7, question: t('faq.question7'), answer: t('faq.answer7') },
    { id: 8, question: t('faq.question8'), answer: t('faq.answer8') },
    { id: 9, question: t('faq.question9'), answer: t('faq.answer9') },
    { id: 10, question: t('faq.question10'), answer: t('faq.answer10') },
    { id: 11, question: t('faq.question11'), answer: t('faq.answer11') },
    { id: 12, question: t('faq.question12'), answer: t('faq.answer12') },
  ];

  return (
    <Layout>
      <Head>
        <title>Raphael AI | {t('nav.faq')}</title>
        <meta name="description" content={t('faq.subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{t('faq.title')}</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t('faq.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.id}. {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ; 