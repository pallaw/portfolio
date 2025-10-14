import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Layout, Zap, UsersRound, GitBranch, Smartphone } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const iconMap = {
  'code': Code,
  'layout': Layout,
  'zap': Zap,
  'users-round': UsersRound,
  'git-branch': GitBranch,
  'smartphone': Smartphone
};

const ServicesCarousel = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];
  const IconComponent = iconMap[currentService.icon];

  return (
    <div className="relative">
      {/* Main Carousel Card */}
      <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-800 p-8 md:p-10 min-h-[320px] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30">
              <IconComponent className="text-accent-red" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentService.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{currentIndex + 1}</span>
                <span>/</span>
                <span>{services.length}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-1">
            {currentService.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {currentService.tags.map((tag, idx) => (
              <Badge
                key={idx}
                className="bg-accent-red/10 text-accent-red border-accent-red/30 font-mono text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          className="pointer-events-auto bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="pointer-events-auto bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-accent-red'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
