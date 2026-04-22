import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { Phone, ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.hero-el', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.11 })
        .fromTo('.hero-pizza-img', { x: 60, opacity: 0, scale: 1.2 }, { x: -120, opacity: 1, scale: 1.55, duration: 1.1, ease: 'back.out(1.2)' }, '-=0.5')
        .fromTo('.hero-halal-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(2)' }, '-=0.4');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '90vh',
        background: 'linear-gradient(120deg, #FAF6EE 0%, #FDF8F3 55%, #F5EFE0 100%)',
      }}
    >
      {/* Watermark rings */}
      <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-[40px] border-[#DDD3BF]/20 pointer-events-none hidden md:block" />
      <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border-[50px] border-[#DDD3BF]/10 pointer-events-none hidden md:block" />

      {/* Basil leaves */}
      <img src="/images/basil-leaf.png" alt="" className="absolute top-12 left-[46%] w-9 opacity-55 rotate-12 pointer-events-none z-[4] hidden sm:block" style={{ filter: 'blur(2.5px)' }} />
      <img src="/images/basil-leaf.png" alt="" className="absolute top-6 right-[30%] w-7 opacity-40 -rotate-20 pointer-events-none z-[4] hidden sm:block" style={{ filter: 'blur(1.5px)' }} />
      <img src="/images/basil-leaf.png" alt="" className="absolute bottom-20 left-[4%] w-7 opacity-35 rotate-45 pointer-events-none z-[4]" style={{ filter: 'blur(3px)' }} />
      <img src="/images/basil-leaf.png" alt="" className="absolute top-[20%] right-[18%] w-6 opacity-30 rotate-[-30deg] pointer-events-none z-[4] hidden md:block" style={{ filter: 'blur(2px)' }} />

      {/* Mobile pizza background */}
      <div className="absolute inset-0 lg:hidden pointer-events-none z-[1]">
        <img
          src="/images/pizza-hero-main.png.png"
          alt=""
          className="absolute right-0 bottom-0 w-[70%] object-contain object-right-bottom opacity-30"
        />
      </div>

      {/* Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full" style={{ minHeight: '90vh' }}>

        {/* ── TEXT ── */}
        <div
          className="w-full lg:w-1/2 px-6 sm:px-10 lg:py-16 pt-12 pb-8 flex flex-col items-start"
          style={{ paddingLeft: undefined }}
        >
          <div className="w-full lg:pl-[max(24px,calc((100vw-1320px)/2+40px))] lg:pr-8">

            {/* Badge */}
            <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-accent-red/25 text-accent-red font-bold text-[11px] uppercase tracking-widest mb-5">
              <Star className="w-3.5 h-3.5 fill-accent-red" />
              Serving Since 1995
            </div>

            {/* Heading */}
            <h1 className="hero-el font-barlow font-black uppercase leading-[0.88] tracking-tighter mb-2">
              <span className="block text-[clamp(52px,10vw,120px)] text-text-primary">
                Taste of
              </span>
              <span className="block text-[clamp(52px,10vw,120px)] text-accent-red">
                Paradise
              </span>
            </h1>

            {/* Underline */}
            <div className="hero-el flex items-center gap-2 mb-5">
              <div className="h-[3px] w-24 bg-primary-green rounded-full" />
              <img src="/images/basil-leaf.png" alt="" className="w-5 h-5 object-contain opacity-80" />
            </div>

            {/* Subtitle */}
            <p className="hero-el text-[14px] sm:text-[15px] text-text-secondary mb-7 max-w-sm leading-relaxed">
              <strong className="text-text-primary">Fresh. Halal. Delicious.</strong>{' '}
              All our pizzas are crafted with fresh quality Halal ingredients since 1995.
            </p>

            {/* Buttons */}
            <div className="hero-el flex flex-wrap items-center gap-3 mb-8">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-accent-red text-white text-sm font-bold uppercase tracking-widest hover:bg-accent-red-hover transition-all"
              >
                View Menu <ArrowRight size={15} />
              </Link>
              <a
                href="tel:0397939888"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-white border border-border-light text-text-primary text-sm font-bold hover:border-primary-green hover:text-primary-green transition-all"
              >
                <Phone size={14} className="text-primary-green" />
                Call to Order
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-el flex flex-wrap items-center gap-4">
              {/* Google */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 border border-border-light">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-black text-lg text-text-primary leading-none">4.1</span>
                    <div className="flex gap-0.5 ml-1">
                      {[1,2,3,4].map(i => <Star key={i} size={10} className="text-[#FBBC05] fill-[#FBBC05]" />)}
                      <Star size={10} className="text-[#E0E0E0] fill-[#E0E0E0]" />
                    </div>
                  </div>
                  <p className="text-text-muted text-[9px] font-semibold uppercase tracking-wider">1,137 Google Reviews</p>
                </div>
              </div>

              {/* Customers */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`/images/chef-${i}.jpg`} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center text-[8px] font-black border-2 border-white">1K+</div>
                </div>
                <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider leading-tight">
                  Happy<br/>Customers
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ── PIZZA (desktop only) ── */}
        <div className="relative w-1/2 h-full hidden lg:flex items-end justify-center" style={{ minHeight: '90vh' }}>

          {/* Halal badge */}
          <div className="hero-halal-badge absolute top-10 right-[12%] z-20">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <div className="absolute inset-0 rounded-full bg-white border-2 border-primary-green flex flex-col items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" className="mb-0.5">
                  <path d="M17 8C15 5 11 4 8 6c0 0 2 0 3 2 0 0-3 0-4 3 0 0 2-1 4 0 0 0-1 2 0 4 0 0 3-1 4-4 1-2 3-1 2-3z" fill="#1B4D3E"/>
                </svg>
                <p className="font-barlow font-black text-[10px] text-primary-green uppercase tracking-wider leading-none">100%</p>
                <p className="font-barlow font-black text-xl md:text-2xl text-primary-green uppercase leading-none">Halal</p>
                <div className="w-12 h-px bg-primary-green/40 my-1" />
                <p className="text-[7px] font-bold text-primary-green/70 uppercase tracking-widest leading-tight">Premium</p>
                <p className="text-[7px] font-bold text-primary-green/70 uppercase tracking-widest leading-tight">Quality</p>
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
                <circle cx="56" cy="56" r="52" fill="none" stroke="#1B4D3E" strokeWidth="1.5" strokeDasharray="4 4"/>
              </svg>
            </div>
          </div>

          {/* Pizza PNG */}
          <img
            src="/images/pizza-hero-main.png.png"
            alt="Halal Pizza"
            className="hero-pizza-img w-full object-contain object-bottom"
            style={{ maxHeight: '115vh', transformOrigin: 'bottom center' }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
