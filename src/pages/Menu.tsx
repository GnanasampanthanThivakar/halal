import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Info, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PizzaItem {
  id: number;
  name: string;
  ingredients: string;
  category: 'Standard' | 'Traditional' | 'Premium';
  image: string;
}

const getPizzaImage = (id: number, name: string) => {
  const workingIds = [
    '1574071318508-1cdbab80d002',
    '1565299624946-b28f40a0ae38',
    '1628840042765-356cda07504e',
    '1513104890138-7c749659a591',
    '1555072956-7758afb20e8f',
    '1576458088443-04a19bb13da6',
    '1564936281291-294551497d81',
    '1528137871618-79d2761e3fd5',
    '1604382354936-07c5d9983bd3',
    '1590947132387-155cc02f3212',
    '1595708684082-a173bb3a06c5',
    '1573821663912-569905455b1c',
  ];
  let index = 0;
  const n = name.toLowerCase();
  if (n.includes('margherita')) index = 0;
  else if (n.includes('hawaiian') || n.includes('tropical') || n.includes('paradise')) index = 1;
  else if (n.includes('pepperoni') || n.includes('beef') || n.includes('meat') || n.includes('lamb')) index = 2;
  else if (n.includes('veg') || n.includes('garlic')) index = 3;
  else if (n.includes('sea') || n.includes('fish')) index = 4;
  else if (n.includes('chicken') || n.includes('bbq') || n.includes('tandoori')) index = 5;
  else if (n.includes('spicy') || n.includes('mexicana') || n.includes('curry')) index = 6;
  else if (n.includes('dessert')) index = 7;
  else if (n.includes('supreme') || n.includes('special') || n.includes('lot')) index = 8;
  else index = (id % 4) + 8;
  return `https://images.unsplash.com/photo-${workingIds[index]}?auto=format&fit=crop&w=800&q=80`;
};

const pizzas: PizzaItem[] = [
  { id: 1, name: 'Dessert Pizza', ingredients: 'Mozzarella cheese & sugar', category: 'Standard', image: getPizzaImage(1, 'dessert') },
  { id: 2, name: 'Beef & Cheese', ingredients: 'Mozzarella cheese, shredded beef & tomato sauce', category: 'Standard', image: getPizzaImage(2, 'beef') },
  { id: 3, name: 'Cheese & Garlic', ingredients: 'Mozzarella cheese & crushed garlic', category: 'Standard', image: getPizzaImage(3, 'garlic') },
  { id: 4, name: 'Margherita', ingredients: 'Extra mozzarella cheese, oregano & tomato sauce', category: 'Standard', image: getPizzaImage(4, 'margherita') },
  { id: 5, name: 'Hawaiian (Tropical)', ingredients: 'Mozzarella cheese, shredded meat, juicy pineapple & tomato sauce', category: 'Standard', image: getPizzaImage(5, 'hawaiian') },
  { id: 6, name: 'Pepperoni', ingredients: 'Mozzarella cheese, pepperoni & tomato sauce', category: 'Standard', image: getPizzaImage(6, 'pepperoni') },
  { id: 7, name: 'Meat Lovers', ingredients: 'Mozzarella cheese, shredded meat, smoked beef cubes, salami, tomato sauce & BBQ sauce', category: 'Traditional', image: getPizzaImage(7, 'meat') },
  { id: 8, name: 'Mexicana', ingredients: 'Mozzarella cheese, salami, capsicums, onions & tomato sauce', category: 'Traditional', image: getPizzaImage(8, 'mexicana') },
  { id: 9, name: 'Middle East Special', ingredients: 'Mozzarella cheese, salami, mushrooms, capsicums, onions, olives & tomato sauce', category: 'Traditional', image: getPizzaImage(9, 'special') },
  { id: 10, name: 'Vegetarian', ingredients: 'Mozzarella cheese, mushrooms, capsicums, onions, olives & tomato sauce', category: 'Traditional', image: getPizzaImage(10, 'veg') },
  { id: 11, name: 'Hot & Spicy (Albanian Special)', ingredients: 'Mozzarella cheese, salami, fresh mushrooms, capsicums, olives & tomato sauce', category: 'Traditional', image: getPizzaImage(11, 'spicy') },
  { id: 12, name: 'BBQ Lamb', ingredients: 'Mozzarella cheese, lamb mince, onions, capsicums, tomato sauce & BBQ sauce', category: 'Traditional', image: getPizzaImage(12, 'lamb') },
  { id: 13, name: 'Capricciosa', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, olives & tomato sauce', category: 'Traditional', image: getPizzaImage(13, 'capricciosa') },
  { id: 14, name: 'Aussie', ingredients: 'Mozzarella cheese, shredded meat, mushrooms & tomato sauce', category: 'Traditional', image: getPizzaImage(14, 'aussie') },
  { id: 15, name: 'House Special', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, capsicums, onions, smoked beef cubes & tomato sauce', category: 'Traditional', image: getPizzaImage(15, 'house special') },
  { id: 16, name: 'Hot Fish Curry', ingredients: 'Mozzarella cheese, marinated mackerel, capsicums, onions, spices, crushed garlic & chilli', category: 'Traditional', image: getPizzaImage(16, 'fish curry') },
  { id: 17, name: 'Paradise', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, pineapple, prawns & tomato sauce', category: 'Traditional', image: getPizzaImage(17, 'paradise') },
  { id: 18, name: 'Tandoori Chicken', ingredients: 'Mozzarella cheese, tandoori chicken, capsicums, onions, crushed garlic & tomato sauce', category: 'Premium', image: getPizzaImage(18, 'tandoori chicken') },
  { id: 19, name: 'BBQ Chicken', ingredients: 'Mozzarella cheese, chicken, capsicums, onions, tomato sauce & BBQ sauce', category: 'Premium', image: getPizzaImage(19, 'bbq chicken') },
  { id: 20, name: 'Chicken Hawaiian', ingredients: 'Mozzarella cheese, chicken, juicy pineapple & tomato sauce', category: 'Premium', image: getPizzaImage(20, 'chicken hawaiian') },
  { id: 21, name: 'Super Supreme (The Lot)', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, capsicums, onions, olives, prawns, pineapple, salami & tomato sauce', category: 'Premium', image: getPizzaImage(21, 'supreme') },
  { id: 22, name: 'Seafood (Marinara)', ingredients: 'Mozzarella cheese, prawns, marinara mix, crushed garlic & tomato sauce', category: 'Premium', image: getPizzaImage(22, 'seafood') },
];

const pricing = {
  Standard:    { small: '9.00',  xl: '13.90', family: '18.60' },
  Traditional: { small: '10.00', xl: '15.90', family: '22.60' },
  Premium:     { small: '11.00', xl: '17.90', family: '24.60' },
};

const drinksSides = [
  { name: 'Can 375ml',      price: '3.00' },
  { name: '600ml Bottle',   price: '4.00' },
  { name: '1.25L Bottle',   price: '4.80' },
  { name: '2.00L Bottle',   price: '5.80' },
  { name: 'Water 600ml',    price: '3.00' },
  { name: '9" Garlic Bread',price: '4.00' },
];

const tabs = [
  { key: 'Standard',    label: 'Standard Pizzas',     emoji: '🍕' },
  { key: 'Traditional', label: 'Traditional Pizzas',  emoji: '🍕' },
  { key: 'Premium',     label: 'Premium Pizzas',      emoji: '🍕' },
  { key: 'Drinks',      label: 'Beverages & Add-ons', emoji: '🥤' },
] as const;

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Standard' | 'Traditional' | 'Premium' | 'Drinks'>('Standard');
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const toggleLike = (id: number) => setLiked(prev => {
    const n = new Set(prev);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll('.pizza-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    );
  }, [activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu-hero-el', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const currentPizzas = pizzas.filter(p => p.category === activeTab);

  return (
    <div ref={pageRef} style={{ background: 'linear-gradient(135deg, #FAF6EE 0%, #FDF8F3 60%, #F5EFE0 100%)' }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        {/* Pizza image top-right — hidden on mobile */}
        <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none hidden md:block">
          <img
            src="/images/pizza-hero-main.png.png"
            alt=""
            className="w-full h-full object-contain object-right-top opacity-90"
          />
        </div>
        {/* Basil leaves */}
        <img src="/images/basil-leaf.png" alt="" className="absolute top-8 left-[42%] w-8 opacity-50 rotate-12 pointer-events-none" style={{ filter: 'blur(1.5px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute bottom-8 left-[5%] w-7 opacity-35 rotate-45 pointer-events-none" style={{ filter: 'blur(2px)' }} />
        <img src="/images/basil-leaf.png" alt="" className="absolute top-12 right-[44%] w-6 opacity-30 -rotate-20 pointer-events-none" style={{ filter: 'blur(1px)' }} />

        <div className="container-custom relative z-10 pt-10 md:pt-16 pb-8 md:pb-10 text-center">
          {/* Badge */}
          <div className="menu-hero-el inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-border-light text-text-secondary font-bold text-xs uppercase tracking-widest mb-5 shadow-sm">
            Our Delicious Menu 🍕
          </div>

          {/* Heading */}
          <h1 className="menu-hero-el font-barlow font-black uppercase leading-tight tracking-tighter text-[clamp(32px,7vw,90px)]">
            <span className="text-primary-green">The </span>
            <span className="text-accent-red">Pizza </span>
            <span className="text-primary-green">List</span>
          </h1>

          {/* Subtitle */}
          <p className="menu-hero-el text-text-secondary italic text-sm md:text-base mt-3 mb-6 max-w-md mx-auto leading-relaxed">
            All our pizzas are made with fresh quality Halal ingredients<br />and our own secret recipes.
          </p>

          {/* Decorative divider */}
          <div className="menu-hero-el flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-primary-green/30" />
            <span className="text-accent-red text-lg">✦</span>
            <img src="/images/basil-leaf.png" alt="" className="w-5 h-5 object-contain opacity-70" />
            <span className="text-accent-red text-lg">✦</span>
            <div className="h-px w-16 bg-primary-green/30" />
          </div>

          {/* Tabs */}
          <div className="menu-hero-el flex overflow-x-auto scrollbar-hide gap-2 md:gap-3 md:flex-wrap md:justify-center pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-accent-red text-white shadow-button'
                    : 'bg-white text-text-secondary border border-border-light hover:border-accent-red hover:text-accent-red'
                }`}
              >
                <span>{tab.emoji}</span> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom pb-20">

        {/* ── PRICING BAR ── */}
        {activeTab !== 'Drinks' && (
          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-4 md:p-5 mb-8 md:mb-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 pr-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-border-light pb-3 sm:pb-0 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-2xl">🍕</span>
              <div>
                <p className="font-barlow font-black text-lg text-primary-green uppercase leading-tight">
                  {activeTab}
                </p>
                <p className="font-barlow font-black text-lg text-primary-green uppercase leading-tight">
                  Pricing
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-6 flex-1">
              {[
                { size: '9" Small', emoji: '🍕', price: pricing[activeTab].small },
                { size: '13" Extra Large', emoji: '🍕', price: pricing[activeTab].xl },
                { size: '15" Family', emoji: '🍕', price: pricing[activeTab].family },
              ].map(item => (
                <div key={item.size} className="flex items-center gap-3 px-5 py-2 bg-bg-cream rounded-xl">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{item.size}</p>
                    <p className="font-barlow font-black text-2xl text-text-primary">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PIZZA GRID ── */}
        <div ref={gridRef}>
          {activeTab !== 'Drinks' ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {currentPizzas.map(pizza => (
                <div
                  key={pizza.id}
                  className="pizza-card bg-white rounded-xl md:rounded-2xl border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-28 md:h-48 overflow-hidden bg-bg-cream">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-text-primary text-white flex items-center justify-center font-barlow font-black text-sm shadow">
                      {pizza.id}
                    </div>
                    {/* Heart */}
                    <button
                      onClick={() => toggleLike(pizza.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-110 transition-transform"
                    >
                      <Heart
                        size={14}
                        className={liked.has(pizza.id) ? 'fill-accent-red text-accent-red' : 'text-text-muted'}
                      />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-3 md:p-4">
                    <h3 className="font-barlow font-bold text-xs md:text-base text-text-primary uppercase leading-tight mb-0.5 md:mb-1">
                      {pizza.name}
                    </h3>
                    <div className="flex items-end justify-between gap-2">
                      <p className="text-text-muted text-[10px] md:text-xs leading-relaxed flex-1 line-clamp-2 hidden md:block">
                        {pizza.ingredients}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl border border-border-light overflow-hidden shadow-card">
                <div className="bg-primary-green px-8 py-5 text-white">
                  <h3 className="font-barlow font-bold text-2xl uppercase tracking-widest">Beverages & Add-ons</h3>
                </div>
                <div className="p-6 space-y-1">
                  {drinksSides.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3.5 border-b border-border-light last:border-0">
                      <span className="font-semibold text-text-primary text-sm">{item.name}</span>
                      <span className="font-barlow font-bold text-xl text-accent-red">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── PLEASE NOTE ── */}
        <div className="mt-12 flex items-center gap-4 bg-white border border-border-light rounded-2xl px-6 py-4 shadow-sm">
          <div className="w-9 h-9 rounded-full border-2 border-text-secondary flex items-center justify-center shrink-0">
            <Info size={16} className="text-text-secondary" />
          </div>
          <div>
            <span className="font-barlow font-bold text-text-primary uppercase tracking-widest text-sm">
              Please Note{' '}
            </span>
            <span className="text-text-secondary text-sm">
              Surcharges apply for: Half & Half, extra toppings, additional toppings & delivery. All prices include GST.
            </span>
          </div>
        </div>
      </div>

      {/* ── PROMO BANNER ── */}
      <div className="container-custom pb-16">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #1c1c1c 0%, #2d2d2d 100%)', minHeight: '200px' }}
        >
          {/* Dark food bg overlay */}
          <div className="absolute inset-0 opacity-20">
            <img src="/images/dark-food-bg.jpg" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 md:px-14 py-10 gap-6">
            {/* Left */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-white/70 text-base font-bold uppercase tracking-[0.2em] text-accent-red">
                    Special Deal!
                  </p>
                  <h2 className="font-barlow font-black text-4xl md:text-5xl text-white uppercase leading-tight">
                    <span className="text-white">1.25L Drink &</span><br />
                    <span className="text-accent-yellow">Garlic Bread</span>
                  </h2>
                </div>
                {/* $5 Badge */}
                <div className="w-20 h-20 rounded-full bg-accent-yellow flex flex-col items-center justify-center shadow-button shrink-0 border-[3px] border-white/20">
                  <p className="font-barlow font-black text-text-primary text-3xl leading-none">$5</p>
                  <p className="font-barlow font-black text-text-primary text-[10px] leading-none uppercase mt-1 tracking-widest">Only</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">Grab our ultimate combo deal for a limited time!</p>
              <a
                href="tel:0397939888"
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-white text-text-primary text-xs font-bold uppercase tracking-widest hover:bg-bg-cream transition-all mt-2"
              >
                Order Combo <ArrowRight size={13} />
              </a>
            </div>

            {/* Right — Promo image */}
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/images/deal_promo_image.png"
                alt="Drink and Garlic Bread"
                className="w-[180px] md:w-[240px] object-contain drop-shadow-2xl rounded-[32px] md:-my-6"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Menu;
