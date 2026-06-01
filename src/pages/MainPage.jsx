import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import BreedSection from '../components/BreedSection/BreedSection';
import KittensSection from '../components/KittensSection/KittensSection';
import AboutSection from '../components/AboutSection/AboutSection';
import WhyUsSection from '../components/WhyUsSection/WhyUsSection';

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <BreedSection />
      <KittensSection />
      <AboutSection />
      <WhyUsSection />
    </>
  );
};

export default MainPage;