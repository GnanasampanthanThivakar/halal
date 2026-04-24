import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 42);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Specials', path: '/specials' },
    { name: 'Our Location', path: '/location' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-b border-black/5' : 'bg-white'
      }`}
    >
      <div className={`container-custom flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-20 lg:h-24' : 'h-24 lg:h-28'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className={`relative transition-all duration-500 ${isScrolled ? 'w-16 h-16 lg:w-20 lg:h-20' : 'w-20 h-20 lg:w-24 lg:h-24'}`}>
            <img 
              src="/images/logo_halal.png" 
              alt="Halal Pizza Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-barlow font-bold text-xl text-text-primary leading-none uppercase tracking-tight">
              Halal Pizza
            </span>
            <span className="text-[10px] text-primary-green font-bold tracking-[0.2em] uppercase">
             Taste of Paradise
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-inter font-semibold text-sm transition-colors uppercase tracking-wider ${
                location.pathname === link.path ? 'text-primary-green underline underline-offset-4 decoration-2' : 'text-text-primary hover:text-primary-green'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0397939888"
            className="hidden md:inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent-red text-white font-bold text-sm uppercase tracking-widest hover:bg-accent-red-hover transition-all"
          >
            <Phone size={15} />
            Call to Order
          </a>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <div 
        className={`absolute top-full left-0 w-full h-[calc(100vh-80px)] z-40 lg:hidden bg-white/95 backdrop-blur-3xl border-t border-black/5 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="container-custom flex flex-col gap-1 p-6 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-barlow font-bold text-3xl py-5 border-b border-black/5 uppercase tracking-wider transition-all duration-300 ${
                location.pathname === link.path ? 'text-primary-green pl-4' : 'text-text-primary active:text-primary-green active:pl-4'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10 pb-6 mt-auto">
            <a href="tel:0397939888" className="flex items-center justify-center gap-2.5 w-full h-16 rounded-2xl bg-accent-red text-white text-base font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(211,47,47,0.35)] active:scale-95 transition-all px-4 overflow-hidden">
              <Phone size={20} className="shrink-0" />
              <span className="truncate">CALL TO ORDER</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
