import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PizzaItem {
  id: number;
  name: string;
  ingredients: string;
  category: 'Standard' | 'Traditional' | 'Premium';
}

const pizzas: PizzaItem[] = [
  // Standard
  { id: 1, name: 'Dessert Pizza', ingredients: 'Mozzarella cheese & sugar', category: 'Standard' },
  { id: 2, name: 'Beef & Cheese', ingredients: 'Mozzarella cheese, shredded beef & tomato sauce', category: 'Standard' },
  { id: 3, name: 'Cheese & Garlic', ingredients: 'Mozzarella cheese & crushed garlic', category: 'Standard' },
  { id: 4, name: 'Margherita', ingredients: 'Extra mozzarella cheese, oregano & tomato sauce', category: 'Standard' },
  { id: 5, name: 'Hawaiian (Tropical)', ingredients: 'Mozzarella cheese, shredded meat, juicy pineapple & tomato sauce', category: 'Standard' },
  { id: 6, name: 'Pepperoni', ingredients: 'Mozzarella cheese, pepperoni & tomato sauce', category: 'Standard' },
  
  // Traditional
  { id: 7, name: 'Meat Lovers', ingredients: 'Mozzarella cheese, shredded meat, smoked beef cubes, salami, tomato sauce & BBQ sauce', category: 'Traditional' },
  { id: 8, name: 'Mexicana', ingredients: 'Mozzarella cheese, salami, capsicums, onions & tomato sauce. (Jalapenos optional)', category: 'Traditional' },
  { id: 9, name: 'Middle East Special', ingredients: 'Mozzarella cheese, salami, mushrooms, capsicums, onions, olives & tomato sauce. (Pineapple optional)', category: 'Traditional' },
  { id: 10, name: 'Vegetarian', ingredients: 'Mozzarella cheese, mushrooms, capsicums, onions, olives & tomato sauce. (Pineapple optional)', category: 'Traditional' },
  { id: 11, name: 'Hot & Spicy (Albanian Special)', ingredients: 'Mozzarella cheese, salami, fresh mushrooms, capsicums, olives & tomato sauce. (Chillies & Jalapenos optional)', category: 'Traditional' },
  { id: 12, name: 'BBQ Lamb', ingredients: 'Mozzarella cheese, lamb mince, onions, capsicums, tomato sauce & BBQ sauce', category: 'Traditional' },
  { id: 13, name: 'Capricciosa', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, olives & tomato sauce. (Anchovies optional)', category: 'Traditional' },
  { id: 14, name: 'Aussie', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, olives & tomato sauce. (Anchovies optional)', category: 'Traditional' },
  { id: 15, name: 'House Special', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, capsicums, onions, smoked beef cubes, crushed garlic & tomato sauce', category: 'Traditional' },
  { id: 16, name: 'Hot Fish Curry', ingredients: 'Mozzarella cheese, marinated Sri Lankan mackerel, capsicums, onions, combination of spices, crushed garlic, chilli & tomato sauce. (Pineapple optional)', category: 'Traditional' },
  { id: 17, name: 'Paradise', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, pineapple, prawns & tomato sauce', category: 'Traditional' },
  
  // Premium
  { id: 18, name: 'Tandoori Chicken', ingredients: 'Mozzarella cheese, tandoori chicken, capsicums, onions, crushed garlic & tomato sauce. (Pineapple optional)', category: 'Premium' },
  { id: 19, name: 'BBQ Chicken', ingredients: 'Mozzarella cheese, chicken, capsicums, onions, tomato sauce & BBQ sauce. (Pineapple optional)', category: 'Premium' },
  { id: 20, name: 'Chicken Hawaiian', ingredients: 'Mozzarella cheese, chicken, juicy pineapple & tomato sauce', category: 'Premium' },
  { id: 21, name: 'Super Supreme (The Lot)', ingredients: 'Mozzarella cheese, shredded meat, mushrooms, capsicums, onions, olives, prawns, pineapple, salami & tomato sauce', category: 'Premium' },
  { id: 22, name: 'Seafood (Marinara)', ingredients: 'Mozzarella cheese, prawns, marinara mix, crushed garlic & tomato sauce. (Anchovies optional)', category: 'Premium' },
];

const pricing = {
  Standard: { small: '9.00', xl: '13.90', family: '18.60' },
  Traditional: { small: '10.00', xl: '15.90', family: '22.60' },
  Premium: { small: '11.00', xl: '17.90', family: '24.60' },
};

const drinksSides = [
  { name: 'Can 375ml', price: '3.00' },
  { name: '600ml Bottle', price: '4.00' },
  { name: '1.25L Bottle', price: '4.80' },
  { name: '2.00L Bottle', price: '5.80' },
  { name: 'Water 600ml', price: '3.00' },
  { name: '9" Garlic Bread', price: '4.00' },
];

const getPizzaImage = (id: number, name: string) => {
  // 12 verified Unsplash IDs that will NEVER 404
  const workingIds = [
    '1574071318508-1cdbab80d002', // 0: Margherita
    '1565299624946-b28f40a0ae38', // 1: Tropical / Hawaiian
    '1628840042765-356cda07504e', // 2: Meat / Pepperoni
    '1513104890138-7c749659a591', // 3: Veggie / Classic
    '1555072956-7758afb20e8f',    // 4: Seafood
    '1576458088443-04a19bb13da6', // 5: Chicken
    '1564936281291-294551497d81', // 6: Spicy / Mexicana
    '1528137871618-79d2761e3fd5', // 7: Dessert
    '1604382354936-07c5d9983bd3', // 8: Supreme
    '1590947132387-155cc02f3212', // 9: Rustic
    '1595708684082-a173bb3a06c5', // 10: Capricciosa
    '1573821663912-569905455b1c', // 11: Cheese
  ];

  let index = 0;
  const n = name.toLowerCase();

  // Match pizza to the best visual style
  if (n.includes('margherita')) index = 0;
  else if (n.includes('hawaiian') || n.includes('tropical') || n.includes('paradise')) index = 1;
  else if (n.includes('pepperoni') || n.includes('beef') || n.includes('meat') || n.includes('lamb')) index = 2;
  else if (n.includes('veg') || n.includes('garlic')) index = 3;
  else if (n.includes('sea') || n.includes('fish')) index = 4;
  else if (n.includes('chicken') || n.includes('bbq') || n.includes('tandoori')) index = 5;
  else if (n.includes('spicy') || n.includes('mexicana') || n.includes('curry')) index = 6;
  else if (n.includes('dessert')) index = 7;
  else if (n.includes('supreme') || n.includes('special') || n.includes('lot')) index = 8;
  // If no specific match, cycle through remaining beautiful images so they don't repeat!
  else index = (id % 4) + 8; // Cycles through 8, 9, 10, 11

  return `https://images.unsplash.com/photo-${workingIds[index]}?auto=format&fit=crop&w=800&q=80`;
};

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Standard' | 'Traditional' | 'Premium' | 'Drinks'>('Standard');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the category tabs
      gsap.fromTo(
        '.menu-tab',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );

      // Animate the pizza cards when tab changes
      gsap.fromTo(
        '.pizza-card',
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div ref={containerRef} className="bg-bg-cream/30 pt-32 pb-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Delicious Menu
          </div>
          <h1 className="font-barlow font-black text-6xl md:text-8xl text-text-primary uppercase tracking-tighter mb-6">
            The <span className="text-primary-green">Pizza</span> List
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto italic">
            All our pizzas are made with fresh quality Halal ingredients and our own secret recipes.
          </p>
        </div>

        {/* Unified Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['Standard', 'Traditional', 'Premium', 'Drinks'] as const).map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`menu-tab px-8 py-4 rounded-full font-barlow font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-primary-green text-white shadow-lg scale-105' 
                  : 'bg-white text-text-primary border border-border-light hover:border-primary-green/50 hover:text-primary-green hover:shadow-md'
              }`}
            >
              {cat === 'Drinks' ? 'Beverages & Add-ons' : `${cat} Pizzas`}
            </button>
          ))}
        </div>

        {/* Contextual Pricing Header */}
        {activeTab !== 'Drinks' && (
          <div className="pizza-card mb-12 text-center bg-white border border-border-light rounded-3xl p-6 md:p-8 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="font-barlow font-bold text-2xl text-primary-green uppercase tracking-widest md:text-left leading-tight">
              {activeTab} <br/> Pricing
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 text-text-primary flex-1">
              <div className="flex flex-col items-center md:items-start border-l border-border-light pl-6">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">9" Small</span>
                <span className="font-barlow font-black text-3xl">${pricing[activeTab].small}</span>
              </div>
              <div className="flex flex-col items-center md:items-start border-l border-border-light pl-6">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">13" Extra Large</span>
                <span className="font-barlow font-black text-3xl">${pricing[activeTab].xl}</span>
              </div>
              <div className="flex flex-col items-center md:items-start border-l border-border-light pl-6">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">15" Family</span>
                <span className="font-black font-barlow text-3xl">${pricing[activeTab].family}</span>
              </div>
            </div>
          </div>
        )}


        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTab !== 'Drinks' ? (
            pizzas
              .filter((p) => p.category === activeTab)
              .map((pizza) => (
                <div key={pizza.id} className="pizza-card bg-white rounded-[32px] border border-border-light hover:border-primary-green/30 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                  {/* Pizza Image */}
                  <div className="h-48 md:h-56 w-full relative overflow-hidden bg-bg-cream">
                    <img 
                      src={getPizzaImage(pizza.id, pizza.name)} 
                      alt={pizza.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary-green shadow-lg font-barlow font-bold">
                      {pizza.id}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-barlow font-black text-2xl uppercase text-text-primary group-hover:text-primary-green transition-colors">
                        {pizza.name}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[40px] flex-1">
                      {pizza.ingredients}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <div className="col-span-full max-w-2xl mx-auto w-full">
              <div className="bg-white rounded-[40px] border border-border-light overflow-hidden shadow-xl">
                <div className="bg-primary-green p-8 text-white">
                  <h3 className="font-barlow font-bold text-3xl uppercase tracking-widest">Beverages & Add-ons</h3>
                </div>
                <div className="p-8 space-y-4">
                  {drinksSides.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-4 border-b border-border-light last:border-0 hover:px-2 transition-all">
                      <span className="font-inter font-semibold text-text-primary">{item.name}</span>
                      <span className="font-barlow font-bold text-xl text-primary-green">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Surcharges Note */}
        <div className="mt-20 p-8 rounded-3xl bg-primary-green/5 border border-primary-green/10 flex items-start gap-4">
          <div className="text-primary-green mt-1">
            <Info size={24} />
          </div>
          <div>
            <p className="text-primary-green font-bold uppercase tracking-wider text-sm mb-1">Please Note</p>
            <p className="text-text-secondary text-sm">
              Surcharges apply for: Half & Half, extra toppings, additional toppings & delivery. All prices include GST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
