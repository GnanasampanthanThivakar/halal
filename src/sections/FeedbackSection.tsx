import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote: 'Every pizza starts with our hand-tossed dough, made fresh daily and topped with our signature sauce crafted from vine-ripened tomatoes and secret herbs.',
    name: 'Victoria Wotton',
    location: 'New York',
    avatar: '/images/chef-1.jpg',
  },
  {
    quote: 'Freshly baked dough forms the base of every pizza, layered with homemade sauce made from juicy tomatoes and our special herb recipe.',
    name: 'Emma Mia',
    location: 'New York',
    avatar: '/images/chef-3.jpg',
  },
  {
    quote: 'The flavors are incredible! Every bite takes you on a journey. This is hands down the best fast food restaurant in the city.',
    name: 'Sarah Johnson',
    location: 'Los Angeles',
    avatar: '/images/chef-4.jpg',
  },
];

const FeedbackSection: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.15, y: 40 });

  return (
    <section className="py-20 md:py-24 bg-bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-text-primary">Our Customers </span>
            <span className="text-accent-red">Feedback</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-card relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-7xl font-serif text-primary-green/10 leading-none select-none">
                &ldquo;
              </div>

              <p className="text-text-secondary text-[15px] leading-relaxed italic mb-8 relative z-10 pt-6">
                {t.quote}
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-inter font-semibold text-base text-text-primary">
                    {t.name}
                  </h4>
                  <p className="text-text-muted text-[13px]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
