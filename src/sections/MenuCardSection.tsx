import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['All Menu', 'Fast Foods', 'Food Delivery', 'Diet Foods'];

const menuItems = [
  { name: 'Grilled Salmon with Oil Sauce', price: '$40', description: 'Fresh salmon grilled to perfection', category: 'Fast Foods', image: '/images/food-steak.jpg' },
  { name: 'Roast Beef with Vegetable', price: '$40', description: 'Slow roasted beef with seasonal vegetables', category: 'Fast Foods', image: '/images/food-burger-black.jpg' },
  { name: 'Marrakesh Vegetarian Curry', price: '$30', description: 'Spicy Moroccan curry with fresh vegetables', category: 'Diet Foods', image: '/images/category-box-meals.jpg' },
  { name: 'Spicy Vegan Potato Curry', price: '$50', description: 'Creamy potato curry with aromatic spices', category: 'Diet Foods', image: '/images/food-sandwich.jpg' },
  { name: 'Apple Pie with Cream', price: '$30', description: 'Classic apple pie with vanilla cream', category: 'Food Delivery', image: '/images/food-fries.jpg' },
  { name: 'French Onion Soup', price: '$20', description: 'Rich onion soup with melted cheese', category: 'Food Delivery', image: '/images/category-combo.jpg' },
];

const MenuCardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeTab === 0
    ? menuItems
    : menuItems.filter(item => item.category === tabs[activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.menu-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-animate on tab change
  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      listRef.current.querySelectorAll('.menu-item'),
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
    );
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-bg-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-text-primary">Our Fast Foods Menu </span>
            <span className="text-accent-red">Card</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-10 mb-10 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`font-inter font-medium text-sm pb-2 border-b-2 transition-colors ${
                activeTab === index
                  ? 'text-primary-green border-primary-green'
                  : 'text-text-secondary border-transparent hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu List */}
        <div ref={listRef} className="max-w-3xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="menu-item flex items-center gap-4 py-4 border-b border-border-light"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-grow min-w-0">
                <h3 className="font-inter font-semibold text-base text-text-primary truncate">
                  {item.name}
                </h3>
                <p className="text-text-muted text-[13px] hidden sm:block">{item.description}</p>
              </div>
              <span className="font-barlow font-bold text-lg text-accent-red flex-shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative side images */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src="/images/hero-food-platter.jpg"
          alt=""
          className="w-48 h-auto rounded-r-2xl"
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src="/images/invite-food.jpg"
          alt=""
          className="w-48 h-auto rounded-l-2xl"
        />
      </div>
    </section>
  );
};

export default MenuCardSection;
