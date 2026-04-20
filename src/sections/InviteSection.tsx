import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InviteSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
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
          duration: 0.8,
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
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Food Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/invite-food.jpg"
                alt="Food platter with pizza and burger"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            {/* Decorative leaves */}
            <div className="absolute -top-6 -right-6 w-24 h-24 pointer-events-none">
              <svg viewBox="0 0 96 96" fill="none">
                <ellipse cx="48" cy="48" rx="40" ry="28" fill="#4CAF50" transform="rotate(-20 48 48)" opacity="0.8" />
                <path d="M48 48 L48 80" stroke="#2E7D32" strokeWidth="3" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 pointer-events-none rotate-180">
              <svg viewBox="0 0 96 96" fill="none">
                <ellipse cx="48" cy="48" rx="40" ry="28" fill="#66BB6A" transform="rotate(-20 48 48)" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef}>
            <p className="font-bangers text-sm tracking-wider text-accent-red mb-2">
              WE INVITE YOU TO VISIT OUR
            </p>
            <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase mb-6">
              <span className="text-text-primary">Fast Food </span>
              <span className="text-primary-green">Restaurant</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi.
            </p>
            <a href="#menu" className="btn-green">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
