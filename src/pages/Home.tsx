import React from 'react';
import HeroSection from '@/sections/HeroSection';
import FeaturesStrip from '@/sections/FeaturesStrip';
import AboutSnippet from '@/sections/AboutSnippet';
import GoogleReviews from '@/sections/GoogleReviews';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesStrip />
      <AboutSnippet />
      <GoogleReviews />
    </div>
  );
};

export default Home;
