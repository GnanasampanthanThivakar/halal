import React, { useEffect, useRef } from 'react';
import { Heart, CheckCircle, Phone, ArrowRight, ShieldCheck, ChefHat, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <Award size={22} />,      bg: 'bg-primary-green', value: '30+',  label: 'Years Serving',   sub: 'Our community with love' },
  { icon: <ShieldCheck size={22} />, bg: 'bg-accent-red',    value: '100%', label: 'Halal Certified',  sub: 'Quality you can trust' },
  { icon: <ChefHat size={22} />,     bg: 'bg-accent-orange', value: '22+',  label: 'Unique Recipes',   sub: 'Crafted to perfection' },
  { icon: <Users size={22} />,       bg: 'bg-[#7C3AED]',     value: '1K+',  label: 'Happy Customers',  sub: 'And growing every day' },
];

const values = [
  '100% Certified Halal Ingredients',
  'Owner operated since 1995',
  'Friendly family-owned service',
  'Fresh daily sourced produce',
];

const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-el',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
      gsap.fromTo('.stat-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.stats-row', start: 'top 85%' } });
      gsap.fromTo('.story-el',  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.story-section', start: 'top 80%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} style={{ background: 'linear-gradient(135deg, #FAF6EE 0%, #FDF8F3 60%, #F5EFE0 100%)' }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        {/* Pizza image right */}
        <div className="absolute right-0 top-0 h-full w-[48%] pointer-events-none">
          <img
            src="/images/pizza-hero-main.png.png"
            alt=""
            className="w-full h-full object-contain object-right-top"
            style={{ transform: 'scale(1.15)', transformOrigin: 'right top' }}
          />
        </div>

        {/* Leaves */}
        <img src="/images/basil-leaf.png" alt="" className="absolute top-8 left-[42%] w-9 opacity-55 rotate-12 pointer-events-none" style={{ filter: 'blur(1.5px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute bottom-10 left-[3%] w-7 opacity-35 rotate-45 pointer-events-none" style={{ filter: 'blur(2px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-6 right-[42%] w-6 opacity-30 -rotate-20 pointer-events-none" style={{ filter: 'blur(1px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-1/2 right-[38%] w-5 opacity-25 rotate-60 pointer-events-none" style={{ filter: 'blur(2px)' }} />

        <div className="relative z-10 container-custom pt-14 pb-12">
          <div className="max-w-[52%]">

            {/* Badge */}
            <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-green/20 text-primary-green font-bold text-xs uppercase tracking-widest mb-5">
              🍕 Our Journey
            </div>

            {/* Heading */}
            <h1 className="hero-el font-barlow font-black uppercase leading-[0.88] tracking-tighter mb-2">
              <span className="block text-[clamp(50px,7vw,100px)] text-text-primary">About</span>
              <span className="block text-[clamp(50px,7vw,100px)] text-accent-red">Us</span>
            </h1>

            {/* Green underline */}
            <div className="hero-el flex items-center gap-2 mb-5">
              <div className="h-[3px] w-20 bg-primary-green rounded-full" />
              <img src="/images/basil-leaf.png" alt="" className="w-5 h-5 object-contain opacity-80" />
            </div>

            {/* Subtitle */}
            <p className="hero-el text-text-secondary text-[15px] mb-8 max-w-sm leading-relaxed">
              Serving Dandenong since <strong className="text-text-primary">1995</strong> with 100% Halal
              ingredients, secret recipes, and a passion for great pizza.
            </p>

            {/* CTA */}
            <Link
              to="/menu"
              className="hero-el inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary-green text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-green-light transition-all"
            >
              Our Story <ArrowRight size={15} />
            </Link>

          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="stats-row container-custom pb-12">
        <div className="bg-white rounded-2xl border border-border-light px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-light">
            {stats.map((s, i) => (
              <div key={i} className="stat-card flex items-center gap-4 px-6 py-4">
                <div className={`w-12 h-12 rounded-2xl ${s.bg} text-white flex items-center justify-center shrink-0`}>
                  {s.icon}
                </div>
                <div>
                  <p className="font-barlow font-black text-2xl text-text-primary leading-none">{s.value}</p>
                  <p className="font-bold text-xs text-text-primary uppercase tracking-wider mt-0.5">{s.label}</p>
                  <p className="text-text-muted text-[11px] mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <div className="story-section container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — Image */}
          <div className="story-el relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/ingredients.png"
                alt="Our Story"
                className="w-full aspect-square object-cover"
              />
              {/* 30 years badge */}
              <div className="absolute bottom-6 left-6 bg-primary-green text-white rounded-2xl px-5 py-4">
                <p className="font-barlow font-black text-5xl text-accent-yellow leading-none">30</p>
                <p className="font-barlow font-bold text-xl uppercase leading-none">Years</p>
                <p className="text-[9px] uppercase tracking-widest text-white/70 mt-1">Of Excellence</p>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-[30px] border-primary-green/10 pointer-events-none" />
          </div>

          {/* Right — Content */}
          <div className="story-el">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-green/10 text-primary-green rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              ⭐ Our Legacy
            </div>
            <h2 className="font-barlow font-black text-4xl md:text-5xl text-text-primary uppercase leading-tight mb-3">
              The Secret to the <br />
              <span className="text-primary-green">Best Pizza on Earth</span>
            </h2>
            <div className="h-[3px] w-16 bg-accent-red rounded-full mb-6" />

            <p className="text-text-secondary leading-relaxed mb-4">
              We established our business in <strong className="text-text-primary">1995</strong> with a
              simple mission — to provide the community with authentic, delicious pizza using only the
              freshest certified halal ingredients.
            </p>
            <p className="text-text-secondary leading-relaxed mb-7">
              Over <strong className="text-text-primary">30 years</strong>, our passion for quality has
              never changed. Same recipes, same care, same commitment to the Dandenong community that
              embraced us from day one.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                  <CheckCircle size={17} className="text-primary-green shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            {/* Family badge */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border-light">
              <div className="w-11 h-11 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center shrink-0">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <p className="font-barlow font-bold text-sm uppercase tracking-wider text-text-primary">
                  Family Owned &amp; Operated
                </p>
                <p className="text-text-muted text-xs">Passionate about quality since day one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="container-custom pb-16">
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 px-10 md:px-14 py-10"
          style={{ background: 'linear-gradient(90deg, #E21920 0%, #C41218 100%)' }}
        >
          {/* Pizza slice watermark */}
          <div className="absolute right-48 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none text-white">
            <svg width="160" height="160" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              <path d="M11 2v10l-8.5 5A10 10 0 0 1 11 2z"/>
            </svg>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-1">
              Taste the Difference
            </p>
            <h2 className="font-barlow font-black text-3xl md:text-4xl text-white uppercase leading-tight mb-1">
              Order Your Pizza Today!
            </h2>
            <p className="text-white/70 text-sm">
              Fresh ingredients. Authentic taste. Delivered to you.
            </p>
          </div>

          <a
            href="tel:0397938388"
            className="relative z-10 inline-flex items-center gap-3 h-12 px-8 rounded-full bg-white text-accent-red font-black text-base uppercase tracking-wider hover:bg-bg-cream transition-all whitespace-nowrap"
          >
            <Phone size={17} /> (03) 9753 8388
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
