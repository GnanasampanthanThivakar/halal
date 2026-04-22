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
        className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-8 md:py-0 gap-6 md:gap-0"
        style={{
          background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)',
          minHeight: '130px',
        }}
      >
        {/* Subtle green glow bottom-right */}
        <div className="absolute bottom-0 right-1/3 w-40 h-20 bg-primary-green/10 blur-2xl pointer-events-none" />

        {/* LEFT — Text */}
        <div className="relative z-10 flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.25em]">
            Craving Pizza?
          </p>
          <h2 className="font-barlow font-black uppercase leading-tight text-2xl md:text-3xl lg:text-4xl">
            <span className="text-accent-yellow">Get 20% Off </span>
            <span className="text-white">On Your First Order!</span>
          </h2>
          <a
            href="tel:0397939888"
            className="mt-1 inline-flex items-center gap-2 h-9 px-5 rounded-md bg-accent-red text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-red-hover transition-all hover:-translate-y-0.5"
          >
            Order Now <ArrowRight size={13} />
          </a>
        </div>

        {/* CENTER — Pizza image (overflows top on desktop) */}
        <div className="relative z-10 flex items-end justify-center md:-mt-10 md:-mb-1">
          <img
            src="/images/pizza-hero-main.png.png"
            alt="Pizza"
            className="w-[160px] md:w-[240px] lg:w-[280px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* RIGHT — Promo code */}
        <div className="relative z-10 flex flex-col items-center justify-center border-2 border-dashed border-accent-red/60 rounded-lg px-6 py-4">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
            Use Code:
          </p>
          <p className="font-barlow font-black text-accent-red text-2xl md:text-3xl uppercase tracking-wider">
            PARADISE20
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoBannerSection;
