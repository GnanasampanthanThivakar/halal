import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, Pizza, Zap } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

gsap.registerPlugin(ScrollTrigger);

const deals = [
  {
    id: 1,
    badge: 'Hot Deal',
    badgeColor: 'bg-primary-green',
    title: 'Family Deal',
    titleColor: 'text-primary-green',
    description: '2 Large pizzas + garlic bread. Perfect for a cozy night in.',
    price: '$19.99',
    originalPrice: '$27.99',
    save: '28%',
    saveBg: 'bg-primary-green',
    icon: <Pizza size={22} />,
    iconBg: 'bg-primary-green',
    btnBorder: 'border-primary-green text-primary-green hover:bg-primary-green hover:text-white',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    badge: 'Best Value',
    badgeColor: 'bg-accent-red',
    title: 'Group Pack',
    titleColor: 'text-accent-red',
    description: '3 Medium pizzas, great group price.',
    price: '$29.99',
    originalPrice: '$40.99',
    save: '28%',
    saveBg: 'bg-accent-red',
    icon: <Users size={22} />,
    iconBg: 'bg-accent-red',
    btnBorder: 'border-accent-red text-accent-red hover:bg-accent-red hover:text-white',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    badge: 'Limited',
    badgeColor: 'bg-accent-orange',
    title: 'Lunch Special',
    titleColor: 'text-accent-orange',
    description: 'Small pizza + drink combo. Quick, fresh, and filling.',
    price: '$9.99',
    originalPrice: '$13.99',
    save: '29%',
    saveBg: 'bg-accent-orange',
    icon: <Zap size={22} />,
    iconBg: 'bg-accent-orange',
    btnBorder: 'border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  },
];

const Specials: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-el', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
      gsap.fromTo('.deal-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.deals-grid', start: 'top 80%' },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} style={{ background: 'linear-gradient(135deg, #FAF6EE 0%, #FDF8F3 60%, #F5EFE0 100%)' }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
        {/* Pizza image right — hidden on mobile */}
        <div className="absolute right-0 top-0 h-full w-[48%] pointer-events-none hidden md:block">
          <img
            src="/images/pizza-hero-main.png.png"
            alt=""
            className="w-full h-full object-contain object-right-top"
            style={{ transform: 'scale(1.15)', transformOrigin: 'right top' }}
          />
        </div>

        {/* Basil leaves */}
        <img src="/images/basil-leaf.png" alt="" className="absolute top-8 left-[44%] w-9 opacity-50 rotate-12 pointer-events-none" style={{ filter: 'blur(1.5px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute bottom-10 left-[4%] w-7 opacity-35 rotate-45 pointer-events-none" style={{ filter: 'blur(2px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-1/3 right-[46%] w-6 opacity-30 -rotate-20 pointer-events-none" style={{ filter: 'blur(1px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-6 right-[35%] w-7 opacity-40 rotate-30 pointer-events-none" style={{ filter: 'blur(2px)' }} />

        <div className="relative z-10 container-custom pt-10 md:pt-14 pb-10 md:pb-12">
          <div className="max-w-full md:max-w-[55%]">

            {/* Badge */}
            <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-accent-red/20 text-accent-red font-bold text-xs uppercase tracking-widest mb-5 shadow-sm">
              🔥 Limited Time Offers
            </div>

            {/* Heading */}
            <h1 className="hero-el font-barlow font-black uppercase leading-[0.88] tracking-tighter mb-4">
              <span className="block text-[clamp(40px,7vw,100px)] text-text-primary">Special</span>
              <span className="block text-[clamp(40px,7vw,100px)] text-accent-red">Deals</span>
            </h1>

            {/* Decorative */}
            <div className="hero-el flex items-center gap-2 mb-5">
              <div className="h-[3px] w-20 bg-primary-green rounded-full" />
              <img src="/images/basil-leaf.png" alt="" className="w-5 h-5 object-contain opacity-80" />
              <div className="h-[3px] w-10 bg-accent-red/40 rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="hero-el text-text-secondary text-[15px] mb-7 max-w-sm leading-relaxed">
              All pizzas made with fresh quality halal ingredients.<br />
              Takeaway or Delivery — call us now for the best prices.
            </p>

            {/* Countdown */}
            <div className="hero-el flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-text-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Offer Ends In</span>
              </div>
              <CountdownTimer />
            </div>

          </div>
        </div>
      </div>

      {/* ── DEAL CARDS ── */}
      <div className="container-custom pt-4 pb-12">
        <div className="deals-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map(deal => (
            <div key={deal.id} className="deal-card bg-white rounded-2xl border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col">

              {/* Image */}
              <div className="relative h-52 rounded-t-2xl overflow-hidden bg-bg-cream">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${deal.badgeColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                  {deal.id === 1 && '🍕'}
                  {deal.id === 2 && '👑'}
                  {deal.id === 3 && '⚡'}
                  {deal.badge}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-1">
                {/* Icon circle — sits on image/content border */}
                <div className={`w-14 h-14 rounded-full ${deal.iconBg} text-white flex items-center justify-center shadow-lg -mt-7 mb-4 border-4 border-white`}>
                  {deal.icon}
                </div>

                <h3 className={`font-barlow font-black text-2xl uppercase tracking-tight ${deal.titleColor} mb-1`}>
                  {deal.title}
                </h3>
                <div className="w-8 h-0.5 bg-border-light mb-3" />
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {deal.description}
                </p>

                {/* Price row */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-barlow font-black text-3xl ${deal.titleColor}`}>{deal.price}</span>
                  <span className="text-text-muted line-through text-base font-medium">{deal.originalPrice}</span>
                  <span className={`${deal.saveBg} text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full`}>
                    Save {deal.save}
                  </span>
                </div>

                {/* Button */}
                <a
                  href="tel:0397939888"
                  className={`w-full h-11 rounded-full border-2 ${deal.btnBorder} font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all`}
                >
                  Order Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PARTY / EVENT BANNER ── */}
      <div className="container-custom pb-16">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)', minHeight: '220px' }}
        >
          {/* BG image */}
          <div className="absolute inset-0">
            <img
              src="/images/restaurant-interior.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-14 py-10 md:py-12 text-center md:text-left">

            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                <div className="h-px w-6 bg-white/40" />
                <span className="text-white/50 text-xs uppercase tracking-widest">➤</span>
              </div>
              <h2 className="font-barlow font-black text-2xl md:text-4xl text-white uppercase leading-tight mb-1">
                Hosting a Party
              </h2>
              <p className="text-white/80 italic text-xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                or Event?
              </p>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <span className="text-white/50 text-xs uppercase tracking-widest">➤</span>
                <div className="h-px w-6 bg-white/40" />
              </div>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                We specialize in large orders for parties, workplaces, and community events. Contact us for custom pricing on bulk orders.
              </p>
            </div>

            {/* Center — CTA */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center mb-3 shadow-lg">
                <Users size={26} className="text-white" />
              </div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Call Us Now</p>
              <a
                href="tel:0397939888"
                className="font-barlow font-black text-white text-2xl hover:text-primary-green-light transition-colors"
              >
                (03) 9793 9888
              </a>
            </div>

            {/* Right — pizza image */}
            <div className="hidden md:block shrink-0">
              <img
                src="/images/pizza-hero-main.png.png"
                alt=""
                className="w-[200px] object-contain"
                style={{ marginBottom: '-48px' }}
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Specials;
