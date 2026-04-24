import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Mail, Truck, ExternalLink, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const openingHours = [
  { days: 'Monday – Thursday', hours: '9:00 AM – 10:00 PM', open: true },
  { days: 'Friday – Saturday',  hours: '9:00 AM – 11:00 PM', open: true },
  { days: 'Sunday',             hours: '9:00 AM – 10:00 PM', open: true },
];

const infoCards = [
  {
    icon: <MapPin size={22} />,
    bg: 'bg-primary-green',
    label: 'Our Address',
    value: '8 Clow Street, Dandenong VIC 3175',
    sub: 'Opposite KFC',
  },
  {
    icon: <Phone size={22} />,
    bg: 'bg-accent-red',
    label: 'Call to Order',
    value: '(03) 9753 8388',
    sub: 'Mon – Sun · All day',
  },
  {
    icon: <Mail size={22} />,
    bg: 'bg-accent-orange',
    label: 'Email Us',
    value: 'info@paradise.com',
    sub: 'We reply within 24 hrs',
  },
  {
    icon: <Clock size={22} />,
    bg: 'bg-[#7C3AED]',
    label: 'Opening Hours',
    value: '9:00 AM – 11:00 PM',
    sub: 'Mon – Sun',
  },
];

const Location: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-el',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
      gsap.fromTo('.info-card', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.info-strip', start: 'top 85%' },
      });
      gsap.fromTo('.map-panel', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.map-section', start: 'top 80%' },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} style={{ background: 'linear-gradient(135deg, #FAF6EE 0%, #FDF8F3 60%, #F5EFE0 100%)' }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        {/* Pizza image right — hidden on mobile */}
        <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none hidden md:block">
          <img
            src="/images/pizza-hero-main.png.png"
            alt=""
            className="w-full h-full object-contain object-right-top opacity-80"
            style={{ transform: 'scale(1.1)', transformOrigin: 'right top' }}
          />
        </div>
        {/* Leaves */}
        <img src="/images/basil-leaf.png" alt="" className="absolute top-8 left-[42%] w-8 opacity-50 rotate-12 pointer-events-none" style={{ filter: 'blur(1.5px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute bottom-10 left-[4%] w-7 opacity-35 rotate-45 pointer-events-none" style={{ filter: 'blur(2px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-5 right-[40%] w-6 opacity-30 -rotate-20 pointer-events-none" style={{ filter: 'blur(1px)' }} />

        <div className="relative z-10 container-custom pt-10 md:pt-14 pb-10 md:pb-12">
          <div className="max-w-full md:max-w-[55%]">
            {/* Badge */}
            <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-green/20 text-primary-green font-bold text-xs uppercase tracking-widest mb-5 shadow-sm">
              <MapPin size={13} /> Visit Our Store
            </div>

            {/* Heading */}
            <h1 className="hero-el font-barlow font-black uppercase leading-[0.88] tracking-tighter mb-4">
              <span className="block text-[clamp(36px,6vw,90px)] text-text-primary">Our</span>
              <span className="block text-[clamp(36px,6vw,90px)] text-primary-green">Location</span>
            </h1>

            {/* Underline */}
            <div className="hero-el flex items-center gap-2 mb-5">
              <div className="h-[3px] w-20 bg-primary-green rounded-full" />
              <img src="/images/basil-leaf.png" alt="" className="w-5 h-5 object-contain opacity-80" />
            </div>

            <p className="hero-el text-text-secondary text-[15px] mb-8 max-w-sm leading-relaxed">
              Find us in the heart of Dandenong. We offer both <strong className="text-text-primary">Takeaway</strong> and <strong className="text-text-primary">Delivery</strong> services for your convenience.
            </p>

            {/* Quick action buttons */}
            <div className="hero-el flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+Clow+Street+Dandenong+VIC+3175"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-primary-green text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary-green-light transition-all shadow-sm w-full sm:w-auto justify-center"
              >
                <MapPin size={14} /> Get Directions
              </a>
              <a
                href="tel:0397938388"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-white border border-border-light text-text-primary text-xs sm:text-sm font-bold hover:border-accent-red hover:text-accent-red transition-all shadow-sm w-full sm:w-auto justify-center"
              >
                <Phone size={14} className="text-accent-red" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── INFO CARDS STRIP ── */}
      <div className="info-strip container-custom pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((card, i) => (
            <div key={i} className="info-card bg-white rounded-2xl border border-border-light p-5 flex items-start gap-4 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
              <div className={`w-11 h-11 rounded-xl ${card.bg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                {card.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5">{card.label}</p>
                <p className="font-barlow font-bold text-base text-text-primary leading-tight">{card.value}</p>
                <p className="text-[11px] text-text-muted mt-0.5">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAP + DETAILS ── */}
      <div className="map-section container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left — Details panel */}
          <div className="map-panel lg:col-span-2 flex flex-col gap-5">

            {/* Address card */}
            <div className="bg-white rounded-2xl border border-border-light p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-green/10 text-primary-green flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <h3 className="font-barlow font-bold text-base uppercase tracking-wider text-text-primary">Address</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-1">8 Clow Street,</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-1">Dandenong, VIC 3175</p>
              <span className="inline-block text-[10px] font-black uppercase tracking-widest text-accent-red bg-accent-red/10 px-2 py-0.5 rounded mb-4">
                Opposite KFC
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8+Clow+Street+Dandenong+VIC+3175"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary-green text-xs font-bold uppercase tracking-widest hover:underline"
              >
                <ExternalLink size={12} /> Open in Google Maps
              </a>
            </div>

            {/* Opening hours card */}
            <div className="bg-white rounded-2xl border border-border-light p-6 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent-red/10 text-accent-red flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <h3 className="font-barlow font-bold text-base uppercase tracking-wider text-text-primary">Opening Hours</h3>
              </div>
              <ul className="space-y-3">
                {openingHours.map((h, i) => (
                  <li key={i} className="flex items-center justify-between py-2.5 border-b border-border-light last:border-0">
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{h.days}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-secondary text-sm">{h.hours}</span>
                      <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-primary-green rounded-2xl p-6 text-white">
              <h3 className="font-barlow font-bold text-base uppercase tracking-wider mb-4">Our Services</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Truck size={16} />, label: 'Takeaway', desc: 'Order and collect in store' },
                  { icon: <Truck size={16} />, label: 'Delivery', desc: 'Hot pizza to your door' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wider">{s.label}</p>
                      <p className="text-white/60 text-xs">{s.desc}</p>
                    </div>
                    <ChevronRight size={16} className="ml-auto text-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="map-panel lg:col-span-3 rounded-2xl overflow-hidden border-4 border-white shadow-card-hover relative" style={{ minHeight: '350px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4192080344404!2d145.2120023!3d-37.983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6116812826707%3A0xe54e58f278d6b8b!2s8%20Clow%20St%2C%20Dandenong%20VIC%203175%2C%20Australia!5e0!3m2!1sen!2sus!4v1713589332000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map pin overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent-red flex items-center justify-center text-white shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm leading-tight">8 Clow Street</p>
                <p className="text-[10px] text-accent-red font-bold uppercase tracking-widest">Dandenong VIC 3175</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="container-custom pb-16">
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-14 py-8 md:py-10 text-center md:text-left"
          style={{ background: 'linear-gradient(90deg, #1B4D3E 0%, #2D7A5F 100%)' }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full border-[60px] border-white translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="relative z-10">
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-1">Ready to Order?</p>
            <h2 className="font-barlow font-black text-3xl md:text-4xl text-white uppercase leading-tight">
              Call Us &amp; We'll<br />Handle the Rest!
            </h2>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:0397938388"
              className="inline-flex items-center gap-3 h-13 px-8 py-3.5 rounded-full bg-white text-primary-green font-black text-lg uppercase tracking-wider hover:bg-bg-cream transition-all shadow-lg"
            >
              <Phone size={18} /> (03) 9753 8388
            </a>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Truck size={16} />
              <span>Takeaway &amp; Delivery</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Location;
