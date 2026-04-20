import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSnippet: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0, rotate: -2 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
      gsap.fromTo(
        contentRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Food Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/images/ingredients.png"
                alt="Fresh Halal Ingredients"
                className="w-full aspect-square object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Decorative organic shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl -z-10" />
            
            {/* 30 Years Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary-green text-white p-8 rounded-2xl shadow-xl transform rotate-[-5deg]">
              <p className="font-barlow font-black text-5xl leading-none mb-1 text-accent-yellow">30</p>
              <p className="font-barlow font-bold text-xl uppercase leading-none tracking-widest">Years</p>
              <p className="font-inter text-[10px] uppercase tracking-tighter opacity-70">Of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-green/10 text-primary-green rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Our Legacy
            </div>
            <h2 className="font-barlow font-black text-5xl md:text-6xl text-text-primary uppercase leading-tight mb-8">
              The Secret to the <br />
              <span className="text-primary-green">Best Pizza on Earth</span>
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-text-secondary text-lg leading-relaxed">
                Serving Dandenong since 1995. Quality halal ingredients, our own recipes, and friendly service — that's the secret to 30 years of excellence.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We established our business with a simple mission: to provide the community with authentic, delicious pizza using only the freshest certified halal ingredients. Today, we continue that tradition with the same passion and dedication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/about" className="btn-green h-14 px-8 uppercase tracking-widest text-sm font-bold">
                Read Our Story
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center text-primary-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Established</p>
                  <p className="text-text-primary font-bold">Since 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
