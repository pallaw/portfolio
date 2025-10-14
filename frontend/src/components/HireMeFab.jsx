import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const HireMeFab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHireMeVisible, setIsHireMeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 300px
      setIsVisible(window.scrollY > 300);
      
      // Hide FAB when Hire Me section is visible
      const hireMeSection = document.querySelector('#hire');
      if (hireMeSection) {
        const rect = hireMeSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsHireMeVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHireMe = () => {
    const element = document.querySelector('#hire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't show FAB if not visible or if Hire Me section is in viewport
  if (!isVisible || isHireMeVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <Button
        onClick={scrollToHireMe}
        className="group h-14 px-6 bg-gradient-to-r from-accent-red to-accent-red/80 hover:from-accent-red/90 hover:to-accent-red text-white border-0 shadow-2xl shadow-accent-red/30 hover:shadow-accent-red/50 transition-all duration-300 hover:scale-105 rounded-full font-semibold"
      >
        <Briefcase className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
        Collaborate
      </Button>
    </div>
  );
};

export default HireMeFab;
