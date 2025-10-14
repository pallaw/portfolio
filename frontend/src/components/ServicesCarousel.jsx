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
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
      >
        <ChevronLeft size={20} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/90 border-gray-700 hover:bg-gray-800 hover:border-accent-red/50 text-white shadow-xl"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="services-swiper"
      >
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          
          return (
            <SwiperSlide key={index} className="!w-full md:!w-[380px]">
              {({ isActive }) => (
                <Card
                  className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-800 hover:border-accent-red/50 p-6 relative overflow-hidden group transition-all duration-500 ${
                    isActive 
                      ? 'border-accent-red/30 shadow-xl shadow-accent-red/20' 
                      : 'opacity-60'
                  }`}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all ${
                    isActive ? 'bg-accent-red/10' : 'bg-accent-red/5 group-hover:bg-accent-red/10'
                  }`}></div>

                  <div className="relative z-10 flex flex-col h-full min-h-[280px]">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30 transition-transform ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`}>
                        <IconComponent className="text-accent-red" size={isActive ? 28 : 24} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-white mb-1 leading-tight ${
                          isActive ? 'text-xl' : 'text-lg'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-gray-400 leading-relaxed mb-4 flex-1 ${
                      isActive ? 'text-base' : 'text-sm'
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
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className="h-2 w-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-all swiper-pagination-bullet"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .services-swiper {
          padding: 20px 0;
          overflow: visible !important;
        }
        
        .services-swiper .swiper-slide {
          transition: all 0.5s ease-in-out;
        }
        
        .services-swiper .swiper-slide-active {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
