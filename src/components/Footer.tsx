import React, { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Specials', path: '/specials' },
    { name: 'Our Location', path: '/location' },
    { name: 'About Us', path: '/about' },
  ];

  const openingHours = [
    { days: 'Monday - Thursday', hours: '9:00 AM - 10:00 PM' },
    { days: 'Friday - Saturday', hours: '9:00 AM - 11:00 PM' },
    { days: 'Sunday', hours: '9:00 AM - 10:00 PM' },
  ];

  return (
    <footer className="bg-bg-dark text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-20 h-20">
                <img
                  src="/images/logo_halal.png"
                  alt="Halal Pizza Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-barlow font-bold text-lg text-white leading-none uppercase tracking-tight">
                  Halal Pizza
                </span>
                <span className="text-[9px] text-primary-green-light font-bold tracking-widest uppercase">
                  Taste of Paradise
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 italic">
              "The best pizza on earth. All our pizzas made with fresh quality Halal ingredients."
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-green/20 border border-primary-green/30 text-primary-green-light text-[10px] font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-green-light animate-pulse" />
              100% Halal Certified
            </div>
            <div className="flex gap-3 mt-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary-green hover:text-white hover:border-primary-green transition-all"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* 2 — Navigation */}
          <div>
            <h4 className="font-barlow font-bold text-base uppercase tracking-wider mb-5 text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-primary-green-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 — Our Location */}
          <div>
            <h4 className="font-barlow font-bold text-base uppercase tracking-wider mb-5 text-white">
              Our Location
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary-green-light" />
                <span>
                  8 Clow Street,<br />
                  Dandenong, VIC 3175
                </span>
              </div>
              <a
                href="tel:0397939888"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-primary-green-light transition-colors"
              >
                <Phone size={15} className="shrink-0 text-primary-green-light" />
                (03) 9753 8388
              </a>
              <a
                href="mailto:info@paradise.com"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-primary-green-light transition-colors"
              >
                <Mail size={15} className="shrink-0 text-primary-green-light" />
                info@paradise.com
              </a>
            </div>
          </div>

          {/* 4 — Opening Hours */}
          <div>
            <h4 className="font-barlow font-bold text-base uppercase tracking-wider mb-5 text-white">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {openingHours.map(({ days, hours }) => (
                <li key={days}>
                  <p className="text-white/80 text-sm font-semibold">{days}</p>
                  <p className="text-white/50 text-sm">{hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 5 — Newsletter */}
          <div>
            <h4 className="font-barlow font-bold text-base uppercase tracking-wider mb-5 text-white">
              Newsletter
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Subscribe to get special offers and latest updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
              }}
              className="flex items-center gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-11 px-4 rounded-l-md bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary-green-light transition-colors min-w-0"
              />
              <button
                type="submit"
                className="h-11 w-11 rounded-r-md bg-accent-red flex items-center justify-center hover:bg-accent-red-hover transition-colors shrink-0"
              >
                <Send size={15} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-[12px]">
            © {new Date().getFullYear()}{' '}
            <span className="text-white/60 font-semibold">Halal Pizza Pty Ltd</span>. All Rights
            Reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-[12px]">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    twitter: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    youtube: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export default Footer;
