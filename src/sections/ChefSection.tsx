import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const chefs = [
  { name: 'Alina Morish', title: 'Expert Chef', image: '/images/chef-1.jpg' },
  { name: 'Michel Clark', title: 'Expert Chef', image: '/images/chef-2.jpg' },
  { name: 'Esia Elizabed', title: 'Expert Chef', image: '/images/chef-3.jpg' },
  { name: 'William Lathom', title: 'Expert Chef', image: '/images/chef-4.jpg' },
];

const ChefSection: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.15, y: 40 });

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-text-primary">Meet Our Expert </span>
            <span className="text-accent-red">Chef</span>
          </h2>
        </div>

        {/* Chef Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <div
              key={chef.name}
              className="group cursor-pointer transition-all duration-400 hover:-translate-y-2"
            >
              <div className="rounded-2xl overflow-hidden mb-4 shadow-card group-hover:shadow-card-hover">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-[280px] object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <h3 className="font-inter font-semibold text-lg text-text-primary">
                {chef.name}
              </h3>
              <p className="text-text-muted text-sm">{chef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
