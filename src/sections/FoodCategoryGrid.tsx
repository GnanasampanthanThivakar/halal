import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  { name: 'Gourmet Burger', image: '/images/food-burger-black.jpg' },
  { name: 'Fresh Pizza', image: '/images/category-pizza.jpg' },
  { name: 'Grilled Chicken', image: '/images/category-grill-chicken.jpg' },
  { name: 'Delicious Sandwich', image: '/images/food-sandwich.jpg' },
];

const FoodCategoryGrid: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1, scale: 0.9 });

  return (
    <section className="py-20 md:py-24 bg-primary-green">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-white">Let&apos;s See Our Fast Food </span>
            <span className="text-accent-yellow">Category</span>
          </h2>
        </div>

        {/* Image Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-inter font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategoryGrid;
