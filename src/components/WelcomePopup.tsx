import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, MapPin, Truck, UtensilsCrossed, Clock, Star } from 'lucide-react';
import gsap from 'gsap';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay before showing popup for dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && popupRef.current && contentRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Overlay fade
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      )
      // Popup scale + slide in
      .fromTo(
        popupRef.current,
        { scale: 0.7, opacity: 0, y: 60, rotateX: 15 },
        { scale: 1, opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'back.out(1.4)' },
        0.1
      )
      // Stagger inner elements
      .fromTo(
        contentRef.current.querySelectorAll('.popup-el'),
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        0.4
      )
      // Pulse the CTA
      .fromTo(
        '.popup-cta',
        { scale: 0.9 },
        { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' },
        0.9
      )
      // Halal badge spin in
      .fromTo(
        '.halal-badge',
        { scale: 0, rotate: -180 },
        { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2)' },
        0.5
      );
    }
  }, [isVisible]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false),
    });
    tl.to(popupRef.current, {
      scale: 0.8,
      opacity: 0,
      y: -40,
      duration: 0.35,
      ease: 'power3.in',
    }).to(
      overlayRef.current,
      { opacity: 0, duration: 0.25 },
      0.1
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ perspective: '1200px' }}>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Popup Card */}
      <div
        ref={popupRef}
        className="relative w-full max-w-[520px] overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-30 w-10 h-10 bg-black/30 backdrop-blur-md text-white/80 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
        >
          <X size={18} strokeWidth={3} />
        </button>

        {/* Top Section - Hero Image with Gradient Overlay */}
        <div className="relative h-[280px] overflow-hidden">
          <img
            src="/images/pizza-hero.png"
            alt="Taste of Paradise Halal Pizza"
            className="w-full h-full object-cover scale-110"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17] via-[#0a1f17]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f17]/40 to-transparent" />
          
          {/* "With Compliments" ribbon */}
          <div className="popup-el absolute top-5 left-0 bg-accent-red/95 backdrop-blur-sm text-white px-6 py-2 shadow-xl">
            <p className="font-inter text-[10px] font-bold uppercase tracking-[0.3em]">With Compliments From</p>
          </div>

          {/* Halal Badge - top right */}
          <div className="halal-badge absolute top-5 right-16 w-16 h-16">
            <div className="w-full h-full rounded-full bg-[#1B8C3D] border-[3px] border-white/30 shadow-xl flex flex-col items-center justify-center">
              <span className="text-white font-black text-[10px] uppercase tracking-wider leading-none">100%</span>
              <span className="text-white font-black text-xs uppercase tracking-wider leading-none mt-0.5">حلال</span>
              <span className="text-white/80 font-bold text-[7px] uppercase tracking-widest">HALAL</span>
            </div>
          </div>

          {/* Logo area at bottom of image */}
          <div ref={contentRef} className="absolute bottom-0 left-0 right-0 px-8 pb-6">
            <div className="popup-el flex items-end gap-3">
              {/* Palm tree icon */}
              <div className="flex flex-col items-center">
                <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
                  <ellipse cx="14" cy="12" rx="12" ry="8" fill="#4CAF50" opacity="0.9" />
                  <ellipse cx="8" cy="14" rx="8" ry="5" fill="#66BB6A" opacity="0.7" transform="rotate(-20 8 14)" />
                  <ellipse cx="20" cy="14" rx="8" ry="5" fill="#66BB6A" opacity="0.7" transform="rotate(20 20 14)" />
                  <rect x="13" y="16" width="2" height="22" rx="1" fill="#8D6E63" />
                </svg>
              </div>
              <div>
                <h2 className="font-barlow font-black text-4xl md:text-5xl text-white uppercase leading-[0.85] tracking-tight drop-shadow-lg">
                  Taste of<br />
                  <span className="text-accent-yellow" style={{ textShadow: '0 2px 20px rgba(255,193,7,0.4)' }}>Paradise</span>
                </h2>
                <p className="font-barlow font-bold text-lg text-white/90 uppercase tracking-wider mt-1">Pizza</p>
              </div>
            </div>
            <p className="popup-el text-accent-yellow/90 text-xs font-bold italic mt-2 tracking-wider">
              ★ "Best Pizza On Earth" ★
            </p>
          </div>
        </div>

        {/* Bottom Section - Info */}
        <div className="bg-gradient-to-b from-[#0a1f17] to-[#0d2a1f] px-8 py-8">
          {/* Announcements */}
          <div className="popup-el mb-6">
            <div className="bg-accent-yellow/10 border border-accent-yellow/20 px-5 py-4">
              <p className="text-accent-yellow font-black text-center text-sm md:text-base uppercase tracking-wider">
                 NOW OPEN FOR FAMILY DINING
              </p>
              <p className="text-accent-yellow/70 font-bold text-center text-[10px] uppercase tracking-[0.25em] mt-1">
                Prayer Facilities Available
              </p>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="popup-el grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-3 border border-white/5">
              <Truck size={16} className="text-primary-green-light shrink-0" />
              <span className="text-white/80 text-xs font-semibold">Home Delivery</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-3 border border-white/5">
              <UtensilsCrossed size={16} className="text-primary-green-light shrink-0" />
              <span className="text-white/80 text-xs font-semibold">Catering Available</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-3 border border-white/5">
              <Clock size={16} className="text-primary-green-light shrink-0" />
              <span className="text-white/80 text-xs font-semibold">Lunch & Dinner</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 px-3.5 py-3 border border-white/5">
              <Star size={16} className="text-accent-yellow shrink-0" />
              <span className="text-white/80 text-xs font-semibold">Since 1995</span>
            </div>
          </div>

          {/* CTA - Call to Order */}
          <a
            href="tel:0397939888"
            className="popup-cta popup-el group flex items-center justify-center gap-4 w-full bg-gradient-to-r from-accent-red to-[#ff2d35] hover:from-[#ff2d35] hover:to-accent-red text-white py-5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Phone size={20} fill="white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Call to Order</p>
              <p className="text-2xl font-black tracking-wider">9793 9888</p>
            </div>
          </a>

          {/* Address */}
          <div className="popup-el flex items-center justify-center gap-2 mt-5 opacity-60">
            <MapPin size={12} className="text-white/50" />
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
              8 Clow St, Dandenong (Opposite KFC)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
