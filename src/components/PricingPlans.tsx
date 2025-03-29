import React from 'react';
import Link from 'next/link';

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  currency: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
  period: string;
};

type PricingPlansProps = {
  plans: PricingPlan[];
  title: string;
  locale?: 'en' | 'zh' | 'ja' | 'ko' | 'ar';
};

const PricingPlans: React.FC<PricingPlansProps> = ({ plans, title, locale = 'en' }) => {
  const popularLabel = locale === 'zh' ? '热门' : 'POPULAR';
  
  return (
    <section className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`${
              plan.isPopular 
                ? 'bg-indigo-700 bg-opacity-30 border-2 border-pink-500 transform scale-105' 
                : 'bg-indigo-800 bg-opacity-20 border border-indigo-600'
            } p-6 rounded-lg`}
          >
            {plan.isPopular && (
              <div className="bg-pink-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                {popularLabel}
              </div>
            )}
            <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
            <p className="text-4xl font-bold mb-1">
              {plan.currency}{plan.price}
            </p>
            <p className="text-sm mb-6">{plan.period}</p>
            <ul className="text-left space-y-2 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <Link
              href={plan.buttonLink}
              className={`w-full inline-block py-2 px-4 rounded font-bold ${
                plan.isPopular
                  ? 'bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans; 