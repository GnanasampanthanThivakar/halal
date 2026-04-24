import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PromoBannerSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="container-custom py-10">
      <div
        ref={sectionRef}
        className="relative rounded-3xl overflow-hidden flex items-center px-8 md:px-12 py-10 md:py-0 bg-[#121212] shadow-2xl border border-white/5"
        style={{ minHeight: '180px' }}
      >
        {/* RIGHT — Premium Faded Image Background */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-1/2 pointer-events-none z-0"
          style={{ 
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', 
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' 
          }}
        >
          <img
            src="/images/deal_promo_image.png"
            alt="Drink and Garlic Bread"
            className="w-full h-full object-cover object-[center_30%] opacity-80 md:opacity-100"
          />
        </div>

        {/* LEFT — Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-auto">
          {/* Text */}
          <div className="flex flex-col items-start gap-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-accent-red/20 border border-accent-red/30 rounded-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
              <p className="text-accent-red text-[9px] font-bold uppercase tracking-[0.2em] leading-none">
                Special Deal
              </p>
            </div>
            <h2 className="font-barlow font-black uppercase leading-[1.1] text-3xl md:text-4xl drop-shadow-md">
              <span className="text-white">1.25L Drink &</span><br />
              <span className="text-accent-yellow">Garlic Bread</span>
            </h2>
          </div>

          {/* Pricing & CTA */}
          <div className="flex flex-col items-start gap-3 mt-2 md:mt-0 md:pl-8 md:border-l border-white/10">
            <div className="flex items-baseline gap-2 drop-shadow-md">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Only</span>
              <span className="font-barlow font-black text-white text-4xl md:text-5xl leading-none">$5</span>
            </div>
            <a
              href="tel:0397939888"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-accent-red text-white text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_rgba(211,47,47,0.4)] hover:bg-accent-red-hover transition-all hover:scale-105 active:scale-95"
            >
              Order Now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBannerSection;
