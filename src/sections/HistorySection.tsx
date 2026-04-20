import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    year: 1990,
    title: 'Evolution of Restaurants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/food-steak.jpg',
  },
  {
    year: 2018,
    title: 'Fine Dining is the Concept',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/food-burger-black.jpg',
  },
  {
    year: 2023,
    title: 'Modern Fast Food Origins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/food-sandwich.jpg',
  },
];

const HistorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Animate items
      gsap.fromTo(
        '.timeline-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Count up animation for years
      timelineItems.forEach((item, index) => {
        const yearEl = document.querySelector(`.year-${index}`);
        if (yearEl) {
          gsap.fromTo(
            yearEl,
            { textContent: 0 },
            {
              textContent: item.year,
              duration: 1.5,
              delay: 0.3 + index * 0.2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-primary-green relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-white">A History of </span>
            <span className="text-accent-yellow">Restaurant</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/30 origin-left"
          />

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="timeline-item relative">
                {/* Year dot on line */}
                <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-yellow rounded-full border-4 border-primary-green z-10" />

                <div className="flex flex-col items-center text-center">
                  {/* Year */}
                  <div className={`year-${index} font-barlow font-bold text-4xl md:text-5xl text-accent-yellow mb-4`}>
                    {item.year}
                  </div>

                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden mb-4 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-inter font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
