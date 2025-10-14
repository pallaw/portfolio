import React, { useState } from 'react';
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
  
  // Calculate how many items to show based on screen size
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3; // default for SSR
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Update items to show on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsToShow);
  const visibleServices = services.slice(currentIndex, currentIndex + itemsToShow);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative px-2 sm:px-4 md:px-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          My Services
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
          Here are the key services I offer to help you build exceptional mobile applications and scale your development team
        </p>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Simple Gallery */}
      <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 overflow-hidden h-[280px] sm:h-[320px]">
        {visibleServices.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          const isCenter = itemsToShow === 3 && index === 1;
          
          return (
            <div
              key={currentIndex + index}
              className={`transition-all duration-500 ${
                itemsToShow === 1 ? 'w-full max-w-sm' :
                itemsToShow === 2 ? 'w-1/2 max-w-xs' :
                'w-1/3 max-w-[280px]'
              }`}
            >
              <div
                className={`rounded-xl border-2 transition-all duration-300 group ${
                  isCenter 
                    ? 'border-accent-red shadow-xl shadow-accent-red/20 h-full' 
                    : 'border-gray-800 opacity-80 hover:opacity-100 hover:shadow-lg hover:shadow-accent-red/20 hover:border-accent-red/50 h-[85%] self-end'
                }`}
              >
                <Card
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-0 hover:border-accent-red/50 p-6 relative overflow-hidden group transition-all duration-500 h-full"
                >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all ${
                  isCenter ? 'bg-accent-red/10' : 'bg-accent-red/5 group-hover:bg-accent-red/10'
                }`}></div>

                <div className="relative z-10 flex flex-col h-full min-h-[200px] sm:min-h-[220px]">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30 transition-transform group-hover:scale-110">
                      <IconComponent className={`text-accent-red transition-colors ${!isCenter ? 'group-hover:text-accent-red/80' : ''}`} size={isCenter ? 28 : 24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-white mb-1 leading-tight transition-colors ${
                        isCenter ? 'text-xl' : 'text-lg group-hover:text-accent-red'
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
                  <div className="flex flex-wrap gap-1.5 max-h-[5rem] overflow-hidden">
                    {service.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        className="bg-accent-red/10 text-accent-red border-accent-red/30 font-mono px-2 py-0.5 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <span className="text-gray-500 text-sm">
          {currentIndex + 1}-{Math.min(currentIndex + itemsToShow, services.length)} of {services.length}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent-red' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
