import React from 'react';
import { Calendar, Award, Pizza, Truck, Heart, Quote } from 'lucide-react';

const stats = [
  { label: 'Years Serving', value: '30+', icon: <Calendar className="w-6 h-6 text-primary-green" /> },
  { label: 'Halal Certified', value: '100%', icon: <Award className="w-6 h-6 text-primary-green" /> },
  { label: 'Unique Pizzas', value: '22', icon: <Pizza className="w-6 h-6 text-primary-green" /> },
  { label: 'Service Coverage', value: 'Dandenong', icon: <Truck className="w-6 h-6 text-primary-green" /> },
];

const testimonials = [
  {
    name: 'Ahmed R.',
    review: "Best halal pizza in Dandenong! The Meat Lovers is incredible.",
    initial: 'A'
  },
  {
    name: 'Sara M.',
    review: "Been coming here since 2005. Quality never drops, always fresh.",
    initial: 'S'
  },
  {
    name: 'Priya K.',
    review: "Hot Fish Curry pizza is unique and absolutely delicious!",
    initial: 'P'
  },
  {
    name: 'Mohammed T.',
    review: "Family of 6, ordered 3 family pizzas — everyone loved it. Great value.",
    initial: 'M'
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-bg-cream/30 pt-32 pb-24">
      <div className="container-custom">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Our Journey
            </div>
            <h1 className="font-barlow font-black text-6xl md:text-7xl text-text-primary uppercase leading-[0.9] tracking-tighter mb-8">
              Best Pizza <br />
              <span className="text-primary-green">On Earth</span>
            </h1>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mb-10">
              <p>
                We established our business in <span className="font-bold text-text-primary">1995</span>. Since then we have been keeping our name as the best pizza on earth. Quality halal ingredients, our own unique recipes, and friendly service — these are the foundations of our success over <span className="font-bold text-text-primary">30 years</span>.
              </p>
              <p>
                Come in and experience the difference for yourself. Every pizza is crafted with care, using only the freshest certified halal ingredients. We believe that great food brings communities together, and we are proud to serve the Dandenong area.
              </p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-border-light shadow-sm">
              <div className="w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center text-white shrink-0 shadow-lg">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-barlow font-bold text-xl uppercase text-text-primary">Family Owned & Operated</p>
                <p className="text-text-secondary text-sm">Passionate about quality since day one.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
               <img
                src="/images/pizza-hero.png"
                alt="Signature Pizza"
                className="w-full aspect-square object-contain bg-white p-12"
              />
            </div>
            {/* Achievement Badge */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-red text-white p-8 rounded-full flex flex-col items-center justify-center text-center shadow-xl rotate-[15deg]">
              <span className="font-barlow font-black text-3xl leading-none">30+</span>
              <span className="font-inter text-[10px] font-bold uppercase tracking-widest mt-1">Years of Trust</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[40px] border border-border-light text-center group hover:border-primary-green hover:shadow-2xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary-green/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="font-barlow font-black text-4xl text-text-primary mb-2">{stat.value}</h3>
              <p className="text-text-muted text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-bg-dark rounded-[60px] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <Quote className="w-16 h-16 text-primary-green/20 mx-auto mb-6" />
              <h2 className="font-barlow font-black text-4xl md:text-5xl text-white uppercase tracking-tight">
                What Our <span className="text-primary-green">Customers</span> Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary-green-light flex items-center justify-center text-white font-bold text-xl">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <div className="flex gap-1 text-accent-yellow">
                        {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 italic leading-relaxed text-lg">
                    "{t.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
