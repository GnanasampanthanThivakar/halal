import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsletterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        formRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-primary-green">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-white uppercase mb-2">
              Subscribe to Our Newsletter &amp; Get 20% Off
            </h2>
            <p className="text-white/70 text-sm">
              Get all latest information on sales and offers
            </p>
          </div>

          {/* Right - Form */}
          <div ref={formRef}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex shadow-lg rounded-lg overflow-hidden"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow h-14 px-5 text-text-primary placeholder:text-text-muted outline-none"
              />
              <button
                type="submit"
                className="h-14 px-6 md:px-8 bg-accent-red text-white font-inter font-semibold text-sm hover:bg-accent-red-hover transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
