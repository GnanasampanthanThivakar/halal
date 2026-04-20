import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountdownTimer from '@/components/CountdownTimer';

gsap.registerPlugin(ScrollTrigger);

const PromoBannerSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B1A 0%, #FFC107 100%)',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <p className="font-bangers text-lg md:text-xl tracking-wider text-white mb-2">
              SUPER DELICIOUS
            </p>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-4">
              BURGER
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Limited Time Offer
            </p>
            <CountdownTimer />
          </div>

          {/* Right - Burger Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end items-center">
            <img
              src="/images/promo-burger.png"
              alt="Promotional burger"
              className="w-[300px] md:w-[400px] object-contain drop-shadow-2xl"
            />
            {/* Order Now button positioned near burger */}
            <a
              href="#order"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 btn-green shadow-lg"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerSection;
