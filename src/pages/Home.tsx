import React from 'react';
import HeroSection from '@/sections/HeroSection';
import FeaturesStrip from '@/sections/FeaturesStrip';
import AboutSnippet from '@/sections/AboutSnippet';
import MenuCardSection from '@/sections/MenuCardSection';
import GoogleReviews from '@/sections/GoogleReviews';
import PromoBannerSection from '@/sections/PromoBannerSection';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesStrip />
      <AboutSnippet />
      <MenuCardSection />
      <GoogleReviews />
      <PromoBannerSection />
    </div>
  );
};

export default Home;
