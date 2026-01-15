import { useState } from 'react';
import Header from '@/components/sections/Header';
import MainContent from '@/components/sections/MainContent';
import Footer from '@/components/sections/Footer';
import PolicyDialogs from '@/components/sections/PolicyDialogs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <MainContent 
        scrollToSection={scrollToSection}
        setIsPolicyOpen={setIsPolicyOpen}
      />
      
      <Footer 
        scrollToSection={scrollToSection}
        setIsPolicyOpen={setIsPolicyOpen}
        setIsOfferOpen={setIsOfferOpen}
      />
      
      <PolicyDialogs 
        isPolicyOpen={isPolicyOpen}
        setIsPolicyOpen={setIsPolicyOpen}
        isOfferOpen={isOfferOpen}
        setIsOfferOpen={setIsOfferOpen}
      />
    </div>
  );
};

export default Index;
