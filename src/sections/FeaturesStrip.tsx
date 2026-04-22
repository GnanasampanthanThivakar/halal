import React from 'react';
import { ShieldCheck, Leaf, ChefHat, Bike } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: '100% Halal Certified',
    description: 'Trusted and certified halal quality',
    color: 'text-accent-red',
    bgColor: 'bg-accent-red/8',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Fresh Quality Ingredients',
    description: 'Sourced daily for maximum flavor',
    color: 'text-primary-green',
    bgColor: 'bg-primary-green/8',
  },
  {
    icon: <ChefHat className="w-7 h-7" />,
    title: 'Own Secret Recipes',
    description: "Unique taste you won't find elsewhere",
    color: 'text-accent-red',
    bgColor: 'bg-accent-red/8',
  },
  {
    icon: <Bike className="w-7 h-7" />,
    title: 'Takeaway & Delivery',
    description: 'Hot and delicious to your doorstep',
    color: 'text-primary-green',
    bgColor: 'bg-primary-green/8',
  },
];

const FeaturesStrip: React.FC = () => {
  return (
    <section className="relative z-20 py-16 bg-white border-y border-border-light/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border-light/60">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-6 py-4 flex flex-col items-center text-center group cursor-default"
            >
              <div className={`mb-4 w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-barlow font-bold text-base uppercase tracking-wider text-text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
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
