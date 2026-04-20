import React from 'react';
import { Gift, Zap, Users, Pizza, Phone } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: 'Family Deal',
    description: '2 large pizzas + garlic bread. Perfect for a cozy night in.',
    priceSuffix: 'Call for today\'s price',
    icon: <Pizza className="w-8 h-8" />,
    color: 'bg-primary-green'
  },
  {
    id: 2,
    title: 'Group Pack',
    description: '3 medium pizzas, great group price. Designed for gatherings.',
    priceSuffix: 'Best value for groups',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-accent-red'
  },
  {
    id: 3,
    title: 'Lunch Special',
    description: 'Small pizza + drink combo. Quick, fresh, and filling.',
    priceSuffix: 'Available 11AM - 3PM',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-accent-orange'
  }
];

const Specials: React.FC = () => {
  return (
    <div className="bg-bg-cream/30 pt-32 pb-24 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 text-accent-red font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <Gift size={14} /> Limited Time Offers
          </div>
          <h1 className="font-barlow font-black text-6xl md:text-8xl text-text-primary uppercase tracking-tighter mb-6">
            Special <span className="text-accent-red">Deals</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            All pizzas made with fresh quality halal ingredients. Takeaway or Delivery — call us now for the best prices.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {deals.map((deal) => (
            <div key={deal.id} className="relative group">
              <div className="h-full bg-white rounded-[48px] p-10 border border-border-light hover:border-text-primary/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`${deal.color} w-16 h-16 rounded-3xl text-white flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-6 transition-transform`}>
                  {deal.icon}
                </div>
                
                <h3 className="font-barlow font-black text-3xl uppercase text-text-primary mb-4 tracking-tight">
                  {deal.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-8">
                  {deal.description}
                </p>

                <div className="mt-auto">
                  <div className="inline-block py-2 px-4 rounded-full bg-bg-cream font-bold text-xs uppercase tracking-widest text-text-primary mb-6">
                    {deal.priceSuffix}
                  </div>
                  
                  <a 
                    href="tel:0397939888" 
                    className="flex items-center justify-between w-full py-4 px-6 rounded-2xl border-2 border-border-light group-hover:border-text-primary group-hover:bg-text-primary group-hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
                  >
                    Order Now
                    <Phone size={18} />
                  </a>
                </div>

                {/* Decorative background circle */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${deal.color}/5 rounded-full blur-3xl -z-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-primary-green rounded-[48px] p-12 md:p-16 text-center relative overflow-hidden text-white">
          <div className="relative z-10">
            <h2 className="font-barlow font-black text-4xl md:text-5xl uppercase mb-6 tracking-tight">
              Hosting a Party or Event?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              We specialize in large orders for parties, workplaces, and community events. Contact us for custom pricing on bulk orders.
            </p>
            <a 
              href="tel:0397939888" 
              className="inline-flex items-center gap-3 bg-white text-primary-green px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Call (03) 9793 9888
            </a>
          </div>
          
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-white rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
