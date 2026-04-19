import React, { useState } from 'react';
import { Calendar, Mail, Clock, Smartphone, Bot, Download } from 'lucide-react';
import { Button } from './ui/button';
import { hireMe, personalInfo } from '../data/mock';
import CalendlyModal from './CalendlyModal';

const iconMap = { clock: Clock, smartphone: Smartphone, bot: Bot, download: Download };

const WhyCard = ({ icon, stat, label }) => {
  const Icon = iconMap[icon] || Clock;
  return (
    <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-5 flex flex-col gap-3 hover:border-accent-red/40 hover:bg-gray-800/60 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-lg bg-accent-red/10 border border-accent-red/20 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
        <Icon size={18} className="text-accent-red" />
      </div>
      <div>
        <p className="text-white font-bold text-xl leading-tight">{stat}</p>
        <p className="text-gray-400 text-sm mt-0.5">{label}</p>
      </div>
    </div>
  );
};

const HireMe = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section id="hire" className="py-16 md:py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-accent-purple/5 to-accent-red/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — headline + CTAs */}
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  {hireMe.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-accent-red to-accent-purple rounded-full" />
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
                  Senior Mobile Engineer open to consulting, contract, and leadership roles. Let's build something great together.
                </p>
              </div>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                <span className="text-accent-red font-medium text-sm">{hireMe.availability}</span>
              </div>

              {/* Primary CTA */}
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-accent-red to-accent-purple hover:from-accent-red/90 hover:to-accent-purple/90 text-white border-0 shadow-xl shadow-accent-red/25 hover:shadow-accent-red/40 transition-all px-8 py-6 text-base font-semibold group"
                onClick={() => setIsCalendlyOpen(true)}
              >
                <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Schedule a Call
              </Button>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="bg-gray-900/50 hover:bg-gray-800 text-white border-gray-700 hover:border-green-500/60 transition-all py-5 text-sm group flex flex-col h-auto gap-1.5"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Pallaw, I'd like to discuss a potential opportunity with you.");
                    window.open(`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                  </svg>
                  <span className="text-xs">WhatsApp</span>
                </Button>

                <Button
                  variant="outline"
                  className="bg-gray-900/50 hover:bg-gray-800 text-white border-gray-700 hover:border-blue-500/60 transition-all py-5 text-sm group flex flex-col h-auto gap-1.5"
                  onClick={() => window.open(personalInfo.linkedinMessaging || personalInfo.linkedin, '_blank')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform flex-shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                  </svg>
                  <span className="text-xs">LinkedIn</span>
                </Button>

                <Button
                  variant="outline"
                  className="bg-gray-900/50 hover:bg-gray-800 text-white border-gray-700 hover:border-gray-500/60 transition-all py-5 text-sm group flex flex-col h-auto gap-1.5"
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform flex-shrink-0 text-gray-400 group-hover:text-gray-200" />
                  <span className="text-xs">Email</span>
                </Button>
              </div>
            </div>

            {/* RIGHT — why work with me */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Why work with me</p>
              <div className="grid grid-cols-2 gap-4">
                {hireMe.whyWorkWithMe.map((item, idx) => (
                  <WhyCard key={idx} {...item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={personalInfo.calendly}
      />
    </>
  );
};

export default HireMe;
