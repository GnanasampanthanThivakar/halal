import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  { name: 'Grill Chicken', count: 22, image: '/images/category-grill-chicken.jpg' },
  { name: 'Delicious Burger', count: 23, image: '/images/category-burger.jpg' },
  { name: 'Box Meals', count: 22, image: '/images/category-box-meals.jpg' },
  { name: 'Combo Foods', count: 20, image: '/images/category-combo.jpg' },
  { name: 'Dominos Pizza', count: 25, image: '/images/category-pizza.jpg' },
  { name: 'Grill Chicken', count: 22, image: '/images/category-grill-chicken.jpg' },
];

const CategorySection: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1, y: 40 });

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-bangers text-sm tracking-wider text-accent-red mb-1">
            BROWSE FAST FOODS
          </p>
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-text-primary uppercase">
            <span className="text-primary-green">Category</span>
          </h2>
        </div>

        {/* Category Cards - Horizontal scroll */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start flex flex-col items-center cursor-pointer group"
              style={{ width: '160px' }}
            >
              <div className="w-[140px] h-[140px] rounded-full border-4 border-white shadow-card overflow-hidden transition-all duration-400 group-hover:shadow-card-hover group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                />
              </div>
              <h3 className="font-inter font-semibold text-base text-text-primary mt-4 text-center">
                {cat.name}
              </h3>
              <p className="text-text-muted text-[13px]">{cat.count} Items Available</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
