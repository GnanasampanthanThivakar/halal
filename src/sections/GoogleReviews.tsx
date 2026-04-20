import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Review {
  name: string;
  initial: string;
  badge?: string;
  timeAgo: string;
  text: string;
  likes: number;
  mealType?: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    name: 'Ezzat Khalife',
    initial: 'E',
    timeAgo: '11 months ago',
    text: "This is the first 100% Halal pizza place in Dandenong that's been opened for over 30 years! The Albanian special had all the right ingredients and I absolutely love that they have halal salami! The staff were great and the service was really quick!",
    likes: 7,
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Amjad Aljabouri',
    initial: 'A',
    badge: 'Local Guide',
    timeAgo: 'a month ago',
    text: "Paradise Pizza I first tried it back in 2005, and it still tastes just as good today. Same great flavour, same quality, and always satisfying. It's rare to find a place that stays this consistent over the years. Definitely a favourite!",
    likes: 3,
    mealType: 'Lunch',
    bgColor: 'bg-emerald-500',
  },
  {
    name: 'Alen Havic',
    initial: 'A',
    badge: 'Local Guide',
    timeAgo: '2 months ago',
    text: "Very nice pizzas at reasonable prices. Staff were friendly and welcoming. Definitely next time I'm passing through Dandenong I'll be eating here again 👍",
    likes: 2,
    mealType: 'Lunch',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Oliver Martis',
    initial: 'O',
    badge: 'Local Guide',
    timeAgo: '2 months ago',
    text: 'Excellent service! Great staff and very tasty pizzas!',
    likes: 2,
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Mandie L.',
    initial: 'M',
    badge: 'Local Guide · 928 reviews',
    timeAgo: 'a year ago',
    text: "We ordered 4 different pizzas and all of them were fantastic — each had a flavourful sauce base and delicious toppings! My favourites had to be the Tandoori Chicken and Hot Fish Curry pizzas 🍕🔥",
    likes: 0,
    mealType: 'Takeaway',
    bgColor: 'bg-rose-500',
  },
];

const GoogleReviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.review-card-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center mb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs uppercase tracking-[0.2em] mb-6">
            Real Customer Experiences
          </div>
          <h2 className="font-barlow font-black text-5xl md:text-7xl text-text-primary uppercase leading-none tracking-tighter mb-8">
            What Our <span className="text-primary-green">Paradise</span> <br />Family Says
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-border-light" />
            <div className="flex items-center gap-2">
              <span className="font-barlow font-bold text-2xl text-text-primary">4.1</span>
              <div className="flex gap-px text-accent-yellow">
                {[1, 2, 3, 4].map(i => <span key={i}>★</span>)}
                <span className="opacity-30">★</span>
              </div>
              <span className="text-text-muted text-sm font-bold uppercase tracking-widest">(1,137 Reviews)</span>
            </div>
            <div className="h-px w-12 bg-border-light" />
          </div>
        </div>
      </div>

      {/* Manual Scrolling Reviews Container */}
      <div className="relative z-10 w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-8 md:px-24 snap-x snap-mandatory"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="review-card-element w-[320px] md:w-[420px] flex-shrink-0 bg-white rounded-[40px] border border-border-light p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-primary-green/30 transition-all duration-300 group relative overflow-hidden snap-center"
            >
              {/* Decorative accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${review.bgColor} opacity-50`} />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${review.bgColor} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-text-primary text-[15px]">{review.name}</h4>
                    {review.badge && (
                      <p className="text-text-muted text-[10px] uppercase tracking-wider font-bold mt-0.5">{review.badge}</p>
                    )}
                  </div>
                </div>
                {/* Google G Logo small */}
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-accent-yellow">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 6.17H19l-5.3 4.06L15.76 18 10 14.27 4.24 18l2.06-6.77L1 7.17h6.61z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-text-muted text-[11px] font-medium">{review.timeAgo}</span>
              </div>

              {/* Review Text */}
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 line-clamp-4">
                "{review.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border-light/50">
                {review.mealType ? (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-bg-cream text-text-primary px-3 py-1.5 rounded-full">
                    {review.mealType}
                  </span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-bg-cream text-transparent px-3 py-1.5 rounded-full select-none opacity-0">
                    S
                  </span>
                )}
                
                {review.likes > 0 && (
                  <div className="flex items-center gap-1.5 text-accent-red bg-accent-red/5 px-2.5 py-1 rounded-full">
                    <ThumbsUp size={12} strokeWidth={3} />
                    <span className="text-[10px] font-bold">{review.likes}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll helper instruction */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Swipe to explore reviews
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </p>
        </div>
      </div>

      {/* CTA to Google Maps */}
      <div className="relative z-10 mt-12 text-center container-custom">
        <a 
          href="https://www.google.com/maps/place/Taste+of+Paradise+Halal+Pizza/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green inline-flex items-center gap-3 px-10 h-14 uppercase tracking-widest text-xs font-bold shadow-[0_10px_30px_rgba(76,175,80,0.2)] hover:shadow-[0_15px_40px_rgba(76,175,80,0.4)] transition-all"
        >
          View All 1,137 Reviews on Google
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Floating Star Icons for vibe */}
      <div className="absolute top-20 left-[10%] text-accent-yellow/20 animate-pulse pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      <div className="absolute bottom-40 right-[15%] text-primary-green/20 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
    </section>
  );
};

export default GoogleReviews;
