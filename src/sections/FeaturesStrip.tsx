import React from 'react';
import { CheckCircle2, Leaf, ChefHat, Truck } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary-green" />,
    title: '100% Halal Certified',
    description: 'Trusted and verified halal quality'
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary-green" />,
    title: 'Fresh Quality Ingredients',
    description: 'Sourced daily for maximum flavor'
  },
  {
    icon: <ChefHat className="w-8 h-8 text-primary-green" />,
    title: 'Own Secret Recipes',
    description: 'Unique taste you won\'t find elsewhere'
  },
  {
    icon: <Truck className="w-8 h-8 text-primary-green" />,
    title: 'Takeaway & Delivery',
    description: 'Hot and delicious to your doorstep'
  }
];

const FeaturesStrip: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-border-light relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border-light">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="px-6 py-4 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="mb-4 p-3 rounded-2xl bg-primary-green/5 group-hover:bg-primary-green/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-barlow font-bold text-lg uppercase tracking-wider text-text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
