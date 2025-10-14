import React from 'react';
import { Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Pallaw, I'd like to discuss a potential opportunity with you.");
    window.open(`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'red',
      action: null
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Quick Chat',
      link: null,
      color: 'green',
      action: handleWhatsApp
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: personalInfo.linkedinMessaging || personalInfo.linkedin,
      color: 'blue',
      action: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View My Code',
      link: personalInfo.github,
      color: 'purple',
      action: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'red',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, opportunities, or just having a chat about technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const getColorClasses = (color) => {
                switch(color) {
                  case 'red': return { bg: 'bg-accent-red/10', text: 'text-accent-red' };
                  case 'purple': return { bg: 'bg-accent-purple/10', text: 'text-accent-purple' };
                  case 'blue': return { bg: 'bg-blue-500/10', text: 'text-blue-500' };
                  case 'green': return { bg: 'bg-green-500/10', text: 'text-green-500' };
                  default: return { bg: 'bg-gray-800', text: 'text-white' };
                }
              };
              const colors = getColorClasses(method.color);
              
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-accent-red/50 hover:shadow-lg hover:shadow-accent-red/10 transition-all duration-300 hover:scale-105 p-6 cursor-pointer"
                  onClick={() => {
                    if (method.action) {
                      method.action();
                    } else if (method.link) {
                      window.open(method.link, method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank');
                    }
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-4 rounded-lg ${colors.bg}`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">{method.label}</h3>
                      <p className="text-gray-400 text-sm break-words">{method.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
