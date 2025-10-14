import React, { useState } from 'react';
import { Mail, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { hireMe, personalInfo } from '../data/mock';
import CalendlyModal from './CalendlyModal';
import ServicesCarousel from './ServicesCarousel';

const HireMe = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hire" className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-accent-purple/5 to-accent-red/5 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {hireMe.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              {hireMe.description}
            </p>
            
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/30">
              <span className="w-2 h-2 rounded-full bg-accent-red"></span>
              <span className="text-accent-red font-medium">{hireMe.availability}</span>
            </div>
          </div>

          {/* Services Carousel */}
          <div className="max-w-4xl mx-auto">
            <ServicesCarousel services={hireMe.services} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-accent-red to-accent-red/80 hover:from-accent-red/90 hover:to-accent-red text-white border-0 shadow-lg shadow-accent-red/20 hover:shadow-accent-red/40 transition-all px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              <Mail className="mr-2" size={20} />
              {hireMe.cta}
            </Button>
            
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-accent-purple to-accent-purple/80 hover:from-accent-purple/90 hover:to-accent-purple text-white border-0 shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all px-8 py-6 text-lg"
              onClick={() => setIsCalendlyOpen(true)}
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Call
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={personalInfo.calendly}
      />
    </>
  );
};

export default HireMe;
