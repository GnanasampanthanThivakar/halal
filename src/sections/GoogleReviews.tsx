import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Review {
  name: string;
  initial: string;
  timeAgo: string;
  text: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    name: 'Ezzat Khalife',
    initial: 'E',
    timeAgo: '11 months ago',
    text: "This is the first 100% Halal pizza place in Dandenong that's been opened for over 30 years! The staff is friendly and the pizza is absolutely delicious.",
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Amjad Aljabouri',
    initial: 'A',
    timeAgo: '8 months ago',
    text: "Paradise Pizza I first tried it back in 2005, and it still tastes just as good today. Same great flavour, same quality, and always satisfying.",
    bgColor: 'bg-emerald-500',
  },
  {
    name: 'Alen Havic',
    initial: 'A',
    timeAgo: '2 months ago',
    text: "Very nice pizzas at reasonable prices. Staff were friendly and welcoming. Definitely next time I'm passing through Dandenong I'll be eating here again!",
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Oliver Martis',
    initial: 'O',
    timeAgo: '2 months ago',
    text: 'Excellent service! Great staff and very tasty pizzas!',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Mandie L.',
    initial: 'M',
    timeAgo: 'a year ago',
    text: "We ordered 4 different pizzas and all of them were fantastic — each had a flavourful sauce base and delicious toppings! My favourites had to be the Tandoori Chicken and Hot Fish Curry pizzas.",
    bgColor: 'bg-rose-500',
  },
];

const VISIBLE = 4;

const GoogleReviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const maxIndex = reviews.length - VISIBLE;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.review-card-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visibleReviews = reviews.slice(current, current + VISIBLE);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 text-accent-red font-bold text-xs uppercase tracking-[0.2em] mb-5">
            Real Customer Experiences
          </div>
          <h2 className="font-barlow font-black text-4xl md:text-5xl text-text-primary uppercase leading-tight">
            What Our Customers Say
          </h2>
          {/* decorative swash */}
          <div className="flex justify-center mt-3">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M5 10 Q30 2 55 10" stroke="#E21920" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Cards + Arrows */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 rounded-full bg-white border border-border-light shadow-card items-center justify-center hover:bg-accent-red hover:text-white hover:border-accent-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleReviews.map((review, idx) => (
              <div
                key={`${review.name}-${idx}`}
                className="review-card-element bg-white rounded-2xl border border-border-light p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${review.bgColor}`} />

                {/* Reviewer info */}
                <div className="flex items-center justify-between mb-4 mt-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${review.bgColor} text-white flex items-center justify-center font-bold text-base shadow`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm leading-tight">{review.name}</p>
                      <p className="text-text-muted text-[11px]">{review.timeAgo}</p>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70 shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#FFC107">
                      <path d="M10 1l2.39 6.17H19l-5.3 4.06L15.76 18 10 14.27 4.24 18l2.06-6.77L1 7.17h6.61z" />
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 rounded-full bg-white border border-border-light shadow-card items-center justify-center hover:bg-accent-red hover:text-white hover:border-accent-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                current === i ? 'w-6 h-2.5 bg-accent-red' : 'w-2.5 h-2.5 bg-border-light'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
