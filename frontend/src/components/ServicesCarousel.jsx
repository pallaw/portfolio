import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Code, Layout, Zap, UsersRound, GitBranch, Smartphone } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const iconMap = {
  'code': Code,
  'layout': Layout,
  'zap': Zap,
  'users-round': UsersRound,
  'git-branch': GitBranch,
  'smartphone': Smartphone
};

const ServicesCarousel = ({ services }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative px-4 md:px-12">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrev}
        disabled={isAnimating}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {displayServices.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            const isCenter = service.offset === 0;
            const position = service.offset;
            
            // Calculate scale and opacity based on position
            const getScale = () => {
              if (isCenter) return 'scale-110 lg:scale-115';
              return 'scale-95 lg:scale-100';
            };
            
            const getOpacity = () => {
              if (isCenter) return 'opacity-100';
              if (Math.abs(position) === 1) return 'opacity-80';
              return 'opacity-0';
            };
            
            const getVisibility = () => {
              if (Math.abs(position) > 1) return 'hidden';
              if (position === -1 || position === 1) return 'hidden lg:block';
              return 'block';
            };
            
            return (
              <Card
                key={`${service.title}-${idx}`}
                className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-800 p-6 relative overflow-hidden group flex-1 max-w-sm
                  ${getScale()} ${getOpacity()} ${getVisibility()}
                  ${isCenter ? 'border-accent-red/30 shadow-xl shadow-accent-red/20 z-10' : 'hover:border-accent-red/50'}
                  ${isAnimating ? 'transition-all duration-700 ease-in-out' : 'transition-all duration-300'}
                `}
                style={{
                  transform: `translateX(0)`,
                }}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all duration-700 ${
                  isCenter ? 'bg-accent-red/10' : 'bg-accent-red/5 group-hover:bg-accent-red/10'
                }`}></div>

                <div className="relative z-10 flex flex-col h-full min-h-[240px]">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30 transition-all duration-700 ${
                      isCenter ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      <IconComponent className="text-accent-red" size={isCenter ? 28 : 24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-white mb-1 leading-tight transition-all duration-700 ${
                        isCenter ? 'text-xl' : 'text-lg'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-400 leading-relaxed mb-4 flex-1 transition-all duration-700 ${
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
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAutoPlaying(false);
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            disabled={isAnimating}
            className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
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
