import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const foodItems = [
  { name: 'Delicious Black Burger', price: '$35.00', image: '/images/food-burger-black.jpg' },
  { name: 'Fresh Beef Steak', price: '$30.00', image: '/images/food-steak.jpg' },
  { name: 'Golden Crispy Fries', price: '$20.00', image: '/images/food-fries.jpg' },
  { name: 'Tasty Grilled Sandwich', price: '$25.00', image: '/images/food-sandwich.jpg' },
];

const DeliciousFoodsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/dark-food-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>

      <div className="container-custom relative z-10">
        {/* 50% OFF Badge */}
        <div className="absolute top-0 left-4 md:left-10">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-accent-red rounded-full flex items-center justify-center -rotate-12 shadow-lg">
            <span className="font-barlow font-bold text-lg md:text-xl text-white text-center leading-tight">
              50%
              <br />
              OFF
            </span>
          </div>
        </div>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 pt-8">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-white">Our Delicious Fast </span>
            <span className="text-accent-yellow">Foods</span>
          </h2>
        </div>

        {/* Food Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {foodItems.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer transition-all duration-400 hover:-translate-y-2"
            >
              <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <h3 className="font-inter font-semibold text-base text-white mb-1">
                {item.name}
              </h3>
              <p className="font-barlow font-bold text-lg text-accent-yellow">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliciousFoodsSection;
