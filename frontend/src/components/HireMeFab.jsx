import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const HireMeFab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHireMeVisible, setIsHireMeVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide while hero section is still in viewport
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroInView = heroRect.bottom > 0;
        setIsVisible(!heroInView);
      }

      // Hide when Hire Me section is visible
      const hireMeSection = document.querySelector('#hire');
      if (hireMeSection) {
        const rect = hireMeSection.getBoundingClientRect();
        setIsHireMeVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isHireMeVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <Button
        onClick={() => document.querySelector('#hire')?.scrollIntoView({ behavior: 'smooth' })}
        className="group h-12 px-5 bg-gradient-to-r from-accent-red to-accent-red/80 hover:from-accent-red/90 hover:to-accent-red text-white border-0 shadow-xl shadow-accent-red/25 hover:shadow-accent-red/40 transition-all duration-300 hover:scale-105 rounded-full font-semibold text-sm"
      >
        <Briefcase className="mr-2 group-hover:rotate-12 transition-transform" size={16} />
        Collaborate
      </Button>
    </div>
  );
};

export default HireMeFab;
