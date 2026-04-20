import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WelcomePopup from '@/components/WelcomePopup';

// Pages
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Specials from '@/pages/Specials';
import Location from '@/pages/Location';
import About from '@/pages/About';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { pathname } = useLocation();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-cream/30">
      <WelcomePopup />
      <TopBar />
      <Navigation />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
