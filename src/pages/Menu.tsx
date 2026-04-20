import React, { useState } from 'react';
import { ChefHat, Info } from 'lucide-react';

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

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Standard' | 'Traditional' | 'Premium' | 'Drinks'>('Standard');

  return (
    <div className="bg-bg-cream/30 pt-32 pb-24">
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

        {/* Pricing Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {(['Standard', 'Traditional', 'Premium'] as const).map((cat) => (
            <div 
              key={cat} 
              className={`p-8 rounded-3xl border transition-all ${
                activeTab === cat ? 'bg-primary-green text-white border-primary-green shadow-xl scale-105 z-10' : 'bg-white border-border-light'
              }`}
              onClick={() => setActiveTab(cat)}
              role="button"
            >
              <h3 className={`font-barlow font-bold text-2xl uppercase mb-4 ${activeTab === cat ? 'text-accent-yellow' : 'text-primary-green'}`}>
                {cat}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>9" Small</span>
                  <span className="font-bold">${pricing[cat].small}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>13" Extra Large</span>
                  <span className="font-bold">${pricing[cat].xl}</span>
                </div>
                <div className="flex justify-between">
                  <span>15" Family</span>
                  <span className="font-bold">${pricing[cat].family}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs for Drinks/Sides */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={() => setActiveTab('Drinks')}
            className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
              activeTab === 'Drinks' ? 'bg-accent-red text-white shadow-lg' : 'bg-white text-text-primary border border-border-light hover:border-accent-red'
            }`}
          >
            Drinks & Sides
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTab !== 'Drinks' ? (
            pizzas
              .filter((p) => p.category === activeTab)
              .map((pizza) => (
                <div key={pizza.id} className="bg-white p-8 rounded-[32px] border border-border-light hover:border-primary-green/30 hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-green/5 flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                        <span className="font-barlow font-bold">{pizza.id}</span>
                      </div>
                      <h3 className="font-barlow font-black text-2xl uppercase text-text-primary group-hover:text-primary-green transition-colors">
                        {pizza.name}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center text-accent-yellow">
                      <ChefHat size={16} />
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed min-h-[40px]">
                    {pizza.ingredients}
                  </p>
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
