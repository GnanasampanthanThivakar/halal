import React from 'react';
import { MapPin, Phone, Clock, Truck, Store, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="bg-bg-cream/30 pt-32 pb-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Visit Our Store
          </div>
          <h1 className="font-barlow font-black text-6xl md:text-8xl text-text-primary uppercase tracking-tighter mb-6">
            Our <span className="text-primary-green">Location</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Find us in the heart of Dandenong. We offer takeaway and delivery services for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Cards - Left */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-[32px] border border-border-light shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-green flex items-center justify-center text-white shrink-0 shadow-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-2xl uppercase text-text-primary mb-2">Address</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    8 Clow Street,<br />
                    Dandenong, VIC 3175<br />
                    <span className="text-accent-red font-bold text-[10px] uppercase tracking-widest">(Opposite KFC)</span>
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=8+Clow+Street+Dandenong+VIC+3175" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-green font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-8 rounded-[32px] border border-border-light shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-red flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-2xl uppercase text-text-primary mb-2">Call to Order</h3>
                  <p className="text-text-secondary mb-1">Phone:</p>
                  <a href="tel:0397939888" className="text-2xl font-black text-text-primary hover:text-accent-red transition-colors">
                    (03) 9793 9888
                  </a>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white p-8 rounded-[32px] border border-border-light shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-orange flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Store size={28} />
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-2xl uppercase text-text-primary mb-4">Services</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-cream text-text-primary text-xs font-bold uppercase tracking-widest">
                      <Truck size={14} /> Takeaway
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-cream text-text-primary text-xs font-bold uppercase tracking-widest">
                      <Truck size={14} /> Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Card */}
            <div className="p-8 rounded-[32px] bg-primary-green text-white">
              <h4 className="font-barlow font-bold text-xl uppercase mb-2">Business Details</h4>
              <p className="text-white/70 text-sm mb-4">Official registered business information.</p>
              <div className="space-y-1 text-sm">
                <p><span className="opacity-60">Entity:</span> Halal Pizza Pty Ltd</p>
                <p><span className="opacity-60">Since:</span> 1995</p>
                <p><span className="opacity-60">Certification:</span> 100% Halal Certified</p>
              </div>
            </div>
          </div>

          {/* Map - Right */}
          <div className="lg:col-span-7 h-[600px] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4192080344404!2d145.2120023!3d-37.983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6116812826707%3A0xe54e58f278d6b8b!2s8%20Clow%20St%2C%20Dandenong%20VIC%203175%2C%20Australia!5e0!3m2!1sen!2sus!4v1713589332000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-10 left-10 glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Find Us</p>
                  <p className="text-text-primary font-bold">8 Clow Street</p>
                  <p className="text-[10px] uppercase font-bold text-accent-red tracking-widest">Opposite KFC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
