import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Heart, Plus, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['All Pizza', 'Chicken Pizza', 'Veggie Pizza', 'Special Pizza', 'Sides & Drinks'];

const menuItems = [
  {
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil & our special sauce',
    price: '$12.99',
    category: 'Veggie Pizza',
    image: '/images/category-pizza.jpg',
  },
  {
    name: 'Pepperoni Pizza',
    description: 'Double pepperoni with mozzarella cheese',
    price: '$13.99',
    category: 'Special Pizza',
    image: '/images/pepperoni_pizza_gen.png',
  },
  {
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, BBQ sauce, onions & tomatoes',
    price: '$14.99',
    category: 'Chicken Pizza',
    image: '/images/bbq_chicken_pizza_gen.png',
  },
  {
    name: 'Veggie Supreme',
    description: 'Bell peppers, olives, onions, mushrooms & tomatoes',
    price: '$12.99',
    category: 'Veggie Pizza',
    image: '/images/ingredients.png',
  },
  {
    name: 'Meat Lovers',
    description: 'Pepperoni, ham, beef sausage & bacon',
    price: '$15.99',
    category: 'Special Pizza',
    image: '/images/pizza-hero.png',
  },
  {
    name: 'Tandoori Chicken',
    description: 'Marinated tandoori chicken, capsicum & red onion',
    price: '$14.99',
    category: 'Chicken Pizza',
    image: '/images/category-grill-chicken.jpg',
  },
  {
    name: 'Garlic Bread',
    description: 'Toasted bread with garlic butter & herbs',
    price: '$5.99',
    category: 'Sides & Drinks',
    image: '/images/garlic_bread_gen.png',
  },
  {
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese and chilli sauce',
    price: '$7.99',
    category: 'Sides & Drinks',
    image: '/images/food-fries.jpg',
  },
];

const MenuCardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredItems =
    activeTab === 0
      ? menuItems
      : menuItems.filter((item) => item.category === tabs[activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pizza-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    setCanScrollLeft(sliderRef.current.scrollLeft > 10);
    setCanScrollRight(
      sliderRef.current.scrollLeft + sliderRef.current.clientWidth <
        sliderRef.current.scrollWidth - 10
    );
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [filteredItems]);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const toggleLike = (idx: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative leaves */}
      <img
        src="/images/basil-leaf.png"
        alt=""
        className="absolute top-10 right-8 w-14 opacity-20 rotate-12 pointer-events-none"
      />
      <img
        src="/images/basil-leaf.png"
        alt=""
        className="absolute bottom-20 left-6 w-10 opacity-15 -rotate-30 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-red/10 text-accent-red rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Menu
          </div>
          <h2 className="font-barlow font-black text-4xl md:text-5xl text-text-primary uppercase leading-tight">
            Explore Our Delicious Menu{' '}
            <span className="inline-block text-accent-red">🍕</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === i
                  ? 'bg-accent-red text-white shadow-button'
                  : 'bg-white text-text-secondary border border-border-light hover:border-accent-red hover:text-accent-red'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider + Arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white border border-border-light shadow-card items-center justify-center text-text-primary hover:bg-accent-red hover:text-white hover:border-accent-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="pizza-card flex-shrink-0 w-[72vw] sm:w-[220px] md:w-[240px] max-w-[260px] bg-white rounded-2xl border border-border-light shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-bg-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleLike(idx)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Heart
                      size={15}
                      className={liked.has(idx) ? 'fill-accent-red text-accent-red' : 'text-text-muted'}
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-barlow font-bold text-base text-text-primary uppercase leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-barlow font-black text-xl text-accent-red">
                      {item.price}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-accent-red text-white flex items-center justify-center hover:bg-accent-red-hover transition-colors shadow-button">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white border border-border-light shadow-card items-center justify-center text-text-primary hover:bg-accent-red hover:text-white hover:border-accent-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-accent-red text-accent-red font-bold text-sm uppercase tracking-widest hover:bg-accent-red hover:text-white transition-all duration-300"
          >
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuCardSection;
