import React, { useState } from 'react';
import { Mail, Linkedin, Github, Rocket, Code2, Users, Lightbulb, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { hireMe, personalInfo } from '../data/mock';
import CalendlyModal from './CalendlyModal';

const iconMap = {
  'rocket': Rocket,
  'code-2': Code2,
  'users': Users,
  'lightbulb': Lightbulb
};

const HireMe = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Pallaw, I'd like to discuss a potential opportunity with you.");
    window.open(`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleLinkedInMessage = () => {
    // Try LinkedIn messaging, fallback to profile
    window.open(personalInfo.linkedinMessaging || personalInfo.linkedin, '_blank');
  };

  return (
    <>
    <section id="hire" className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-accent-purple/5 to-accent-red/5 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-accent-red/50 transition-all duration-300 p-8 sm:p-12 shadow-2xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-red/20 to-accent-purple/20 border border-accent-red/30 mb-4">
                <Rocket className="text-accent-red" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {hireMe.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              {hireMe.description}
            </p>
            
            {/* Availability Status */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/30">
                <span className="w-2 h-2 rounded-full bg-accent-red"></span>
                <span className="text-accent-red font-medium">{hireMe.availability}</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {hireMe.highlights.map((highlight, idx) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-accent-red/30 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="text-accent-red" size={24} />
                    </div>
                    <p className="text-gray-300 font-medium">{highlight.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                className="bg-gradient-to-r from-accent-red to-accent-red/80 hover:from-accent-red/90 hover:to-accent-red text-white border-0 shadow-lg shadow-accent-red/20 hover:shadow-accent-red/40 transition-all px-8 py-6 text-lg group"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              >
                <Mail className="mr-2" size={20} />
                {hireMe.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                className="bg-gradient-to-r from-accent-purple to-accent-purple/80 hover:from-accent-purple/90 hover:to-accent-purple text-white border-0 shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all px-8 py-6 text-lg group"
                onClick={() => setIsCalendlyOpen(true)}
              >
                <Calendar className="mr-2" size={20} />
                Schedule a Call
              </Button>
            </div>

            {/* Secondary Contact Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <Button
                variant="outline"
                className="bg-gray-800/50 hover:bg-gray-800 text-white border-gray-700 hover:border-accent-red/50 transition-all py-6 flex-col h-auto gap-2"
                onClick={handleLinkedInMessage}
                title="Send LinkedIn message"
              >
                <Linkedin size={24} className="text-[#0A66C2]" />
                <span className="text-xs text-gray-400">LinkedIn</span>
              </Button>
              
              <Button
                variant="outline"
                className="bg-gray-800/50 hover:bg-gray-800 text-white border-gray-700 hover:border-accent-red/50 transition-all py-6 flex-col h-auto gap-2"
                onClick={handleWhatsApp}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={24} className="text-[#25D366]" />
                <span className="text-xs text-gray-400">WhatsApp</span>
              </Button>
              
              <Button
                variant="outline"
                className="bg-gray-800/50 hover:bg-gray-800 text-white border-gray-700 hover:border-accent-red/50 transition-all py-6 flex-col h-auto gap-2"
                onClick={() => window.open(personalInfo.github, '_blank')}
                title="View GitHub profile"
              >
                <Github size={24} className="text-white" />
                <span className="text-xs text-gray-400">GitHub</span>
              </Button>
              
              <Button
                variant="outline"
                className="bg-gray-800/50 hover:bg-gray-800 text-white border-gray-700 hover:border-accent-red/50 transition-all py-6 flex-col h-auto gap-2"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                title="Send email"
              >
                <Mail size={24} className="text-accent-red" />
                <span className="text-xs text-gray-400">Email</span>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="text-center pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Or reach out directly at{' '}
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-accent-red hover:text-accent-red/80 transition-colors font-medium"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={personalInfo.calendly}
      />
    </section>
    </>
  );
};

export default HireMe;
