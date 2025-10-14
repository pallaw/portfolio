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
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const maxIndex = services.length - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    const maxIndex = services.length - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    handleNext();
  };

  const goToPrev = () => {
    handlePrev();
  };

  // Get visible services (show 3 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push({ ...services[index], position: i });
    }
    return visible;
  };

  const visibleServices = getVisibleServices();

  return (
    <div className="relative px-4 md:px-12">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
      >
        <ChevronLeft size={20} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Carousel Items */}
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {visibleServices.map((service, idx) => {
          const IconComponent = iconMap[service.icon];
          const actualIndex = (currentIndex + idx) % services.length;
          const isCenter = idx === 1;
          
          return (
            <Card
              key={actualIndex}
              className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-800 hover:border-accent-red/50 p-6 relative overflow-hidden group transition-all duration-500 ease-out ${
                isCenter 
                  ? 'scale-110 lg:scale-115 border-accent-red/30 shadow-xl shadow-accent-red/20 z-10' 
                  : 'scale-95 lg:scale-100 opacity-80 hover:opacity-100'
              } ${idx === 0 ? 'hidden lg:block' : ''} ${idx === 2 ? 'hidden lg:block' : ''} flex-1 max-w-sm`}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all ${
                isCenter ? 'bg-accent-red/10' : 'bg-accent-red/5 group-hover:bg-accent-red/10'
              }`}></div>

              <div className="relative z-10 flex flex-col h-full min-h-[240px]">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30 transition-transform ${
                    isCenter ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    <IconComponent className="text-accent-red" size={isCenter ? 28 : 24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-white mb-1 leading-tight ${
                      isCenter ? 'text-xl' : 'text-lg'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-gray-400 leading-relaxed mb-4 flex-1 ${
                  isCenter ? 'text-base' : 'text-sm'
                }`}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 max-h-[4.5rem] overflow-hidden">
                  {service.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      className={`bg-accent-red/10 text-accent-red border-accent-red/30 font-mono px-2 py-0.5 ${
                        isCenter ? 'text-xs' : 'text-xs'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
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
