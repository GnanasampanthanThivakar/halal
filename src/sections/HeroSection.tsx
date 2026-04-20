import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { Phone, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
      )
      .fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, duration: 1.2, rotate: 0, ease: 'back.out(1.2)' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] md:min-h-screen bg-bg-cream/40 overflow-hidden flex items-center pt-20"
    >
      {/* Background Graphic Elements */}
      <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-primary-green/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-orange/5 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div ref={contentRef} className="text-center lg:text-left order-2 lg:order-1">
            <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-sm uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
              Serving Since 1995
            </div>
            
            <h1 className="hero-el font-barlow font-black text-6xl md:text-8xl lg:text-9xl text-text-primary leading-[0.9] uppercase mb-6 tracking-tighter">
              Taste of <br />
              <span className="text-primary-green">Paradise</span>
            </h1>
            
            <p className="hero-el font-inter text-xl md:text-2xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0">
              "Fresh. Halal. Delicious." All our pizzas are crafted with fresh quality Halal ingredients since 1995.
            </p>

            <div className="hero-el flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/menu" 
                className="btn-green h-16 px-10 text-lg uppercase tracking-widest gap-2"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)' }}
              >
                View Menu <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:0397939888" 
                className="flex items-center gap-3 font-barlow font-bold text-xl text-text-primary hover:text-primary-green transition-colors px-6 py-4"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary-green">
                  <Phone size={20} fill="currentColor" />
                </div>
                Call to Order
              </a>
            </div>

            {/* Google Reviews Badge */}
            <div className="hero-el flex items-center justify-center lg:justify-start gap-4 mt-10 pt-8 border-t border-border-light/50">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-lg border border-border-light">
                {/* Google G Logo */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-2xl text-text-primary leading-none">4.1</span>
                    <div className="flex gap-px">
                      {[1,2,3,4].map(i => (
                        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#FBBC05">
                          <path d="M10 1l2.39 6.17H19l-5.3 4.06L15.76 18 10 14.27 4.24 18l2.06-6.77L1 7.17h6.61z"/>
                        </svg>
                      ))}
                      {/* Half star for 4.1 */}
                      <svg width="14" height="14" viewBox="0 0 20 20">
                        <defs>
                          <linearGradient id="halfStar">
                            <stop offset="20%" stopColor="#FBBC05"/>
                            <stop offset="20%" stopColor="#E0E0E0"/>
                          </linearGradient>
                        </defs>
                        <path d="M10 1l2.39 6.17H19l-5.3 4.06L15.76 18 10 14.27 4.24 18l2.06-6.77L1 7.17h6.61z" fill="url(#halfStar)"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest leading-none mt-1">1,137 Google Reviews</p>
                </div>
              </div>
              <div className="hidden sm:flex -space-x-2">
                {['A','S','P','M'].map((letter, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-md">
                    {letter}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-accent-yellow text-text-primary flex items-center justify-center text-[10px] font-black border-2 border-white shadow-md">
                  1K+
                </div>
              </div>
            </div>
          </div>

          {/* Pizza Image Right */}
          <div ref={imageRef} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-[300px] md:w-[500px] lg:w-[600px] aspect-square">
              {/* Halal Badge Overlay */}
              <div className="absolute top-0 right-0 z-20 w-32 h-32 md:w-40 md:h-40 glass-card rounded-full p-4 flex flex-col items-center justify-center text-center animate-spin-slow hover:pause-animation">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary-green">100% Halal</span>
                <span className="text-[14px] md:text-lg font-black uppercase text-text-primary">Certified</span>
              </div>
              
              <div className="absolute inset-0 bg-primary-green/10 rounded-full blur-3xl" />
              <img
                src="/images/pizza-hero.png"
                alt="Signature Halal Pizza"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_32px_64px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none whitespace-nowrap overflow-hidden">
        <span className="font-barlow font-black text-[20vw] uppercase leading-none">
          Taste of Paradise
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
