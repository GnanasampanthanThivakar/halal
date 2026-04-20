import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
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
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm' : ''
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#1B4D3E" />
              <path
                d="M12 28C12 20 16 14 20 12C24 14 28 20 28 28"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="20" cy="10" r="3" fill="#FFC107" />
              <path d="M17 8L20 5L23 8" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
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
            className="hidden md:inline-flex btn-green"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)',
              paddingRight: '36px',
            }}
          >
            CALL TO ORDER
          </a>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border-light py-4 shadow-xl">
          <div className="container-custom flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-inter font-semibold text-sm py-3 border-b border-border-light uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-primary-green' : 'text-text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:0397939888" className="btn-green text-center mt-2 uppercase tracking-widest font-bold">
              CALL TO ORDER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
