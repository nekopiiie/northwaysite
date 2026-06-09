import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import BreedSection from '../components/BreedSection/BreedSection';
import KittensSection from '../components/KittensSection/KittensSection';
import AboutSection from '../components/AboutSection/AboutSection';
import WhyUsSection from '../components/WhyUsSection/WhyUsSection';
import NewsSection from '../components/NewsSection/NewsSection';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import FAQSection from '../components/FAQSection/FAQSection';
import ContactSection from '../components/ContactSection/ContactSection';

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <BreedSection />
      <KittensSection />
      <AboutSection />
      <WhyUsSection />
      <NewsSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default MainPage;