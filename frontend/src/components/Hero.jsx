import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,13,41,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(78,22,210,0.12),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Image first */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-red/30 to-accent-purple/30 blur-3xl rounded-full"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-accent-red/40 shadow-2xl shadow-accent-red/20"
              />
            </div>
          </div>

          {/* Mobile: Text second */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="space-y-2">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple text-lg font-medium tracking-wide">Hello, I'm</h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 font-semibold">
                {personalInfo.title.split('|')[0].trim()}
              </p>
              <p className="text-lg text-gray-400">
                {personalInfo.subtitle}
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B63F5] to-[#597DF0] hover:opacity-90 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-[#3B63F5]/30 hover:shadow-[#3B63F5]/50 hover:scale-105 transition-all duration-300"
                onClick={scrollToContact}
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#597DF0] text-white hover:bg-[#3B63F5]/20 hover:border-[#3B63F5] font-semibold px-8 py-6 text-base hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://customer-assets.emergentagent.com/job_3c2bde26-baa1-4dd6-a6c3-4b7f71bc0705/artifacts/6a2xfnkv_Pallaw_Pathak_Senior_Android_Resume.pdf', '_blank')}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
