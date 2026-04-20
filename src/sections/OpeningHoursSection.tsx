import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: 'Monday to Tuesday', time: '10:00 AM - 20:00 PM' },
  { day: 'Friday to Saturday', time: '12:00 AM - 23:00 PM' },
];

const OpeningHoursSection: React.FC = () => {
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
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
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
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Restaurant Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/restaurant-interior.jpg"
                alt="Restaurant interior"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group">
              <Play
                size={24}
                className="text-accent-red ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
              />
            </button>
          </div>

          {/* Right - Hours */}
          <div ref={contentRef}>
            <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase mb-8">
              <span className="text-text-primary">Our Opening </span>
              <span className="text-accent-red">Hours</span>
            </h2>

            <div className="space-y-0 mb-8">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-4 border-b border-border-light"
                >
                  <span className="font-inter font-medium text-base text-text-primary">
                    {item.day}
                  </span>
                  <span className="text-text-secondary text-sm">{item.time}</span>
                </div>
              ))}
            </div>

            <a href="#reservation" className="btn-green">
              Book A Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursSection;
