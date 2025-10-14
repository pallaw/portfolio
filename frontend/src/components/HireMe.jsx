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
          <div>
            <ServicesCarousel services={hireMe.services} />
          </div>

          {/* Primary CTA - Schedule a Call */}
          <div className="max-w-md mx-auto">
            <Button
              className="w-full bg-gradient-to-r from-accent-red to-accent-purple hover:from-accent-red/90 hover:to-accent-purple/90 text-white border-0 shadow-2xl shadow-accent-red/30 hover:shadow-accent-red/50 transition-all px-10 py-8 text-xl font-semibold group"
              onClick={() => setIsCalendlyOpen(true)}
            >
              <Calendar className="mr-3 group-hover:scale-110 transition-transform" size={28} />
              Schedule a Call
            </Button>
          </div>

          {/* Quick Contact Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Prefer a Quick Message?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="bg-gray-900/50 hover:bg-gray-800 text-white border-gray-700 hover:border-green-500/50 transition-all px-6 py-4 group"
                  onClick={() => {
                    const message = encodeURIComponent("Hi Pallaw, I'd like to discuss a potential opportunity with you.");
                    window.open(`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                  }}
                >
                  <svg className="mr-2 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                  </svg>
                  Message on WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  className="bg-gray-900/50 hover:bg-gray-800 text-white border-gray-700 hover:border-blue-500/50 transition-all px-6 py-4 group"
                  onClick={() => window.open(personalInfo.linkedinMessaging || personalInfo.linkedin, '_blank')}
                >
                  <svg className="mr-2 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                  </svg>
                  Message on LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={scrollToContact}
                className="text-gray-400 hover:text-accent-red transition-colors text-sm underline"
              >
                View all contact options
              </button>
            </div>
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
