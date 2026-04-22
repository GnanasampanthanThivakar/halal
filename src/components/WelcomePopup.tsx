import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Small delay before showing popup for dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && popupRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Overlay fade
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      )
      // Image Popup scale + slide in
      .fromTo(
        popupRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' },
        0.1
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

      {/* Popup Image Card */}
      <div
        ref={popupRef}
        className="relative w-full max-w-[500px]"
      >
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 md:-top-5 md:-right-5 z-30 w-10 h-10 bg-white rounded-full text-black shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* The Poster Image */}
        <img
          src="/images/welcomeposter.png"
          alt="Taste of Paradise Welcome"
          className="w-full h-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WelcomePopup;
