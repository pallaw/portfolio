import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'red'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: personalInfo.linkedin,
      color: 'purple'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View My Code',
      link: personalInfo.github,
      color: 'red'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-jetbrains to-accent-pink mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, opportunities, or just having a chat about technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-accent-jetbrains/50 hover:shadow-lg hover:shadow-accent-jetbrains/10 transition-all duration-300 hover:scale-105 p-6 cursor-pointer"
                  onClick={() => window.open(method.link, method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank')}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-4 rounded-lg ${
                      method.color === 'red' ? 'bg-accent-jetbrains/10' : 'bg-accent-pink/10'
                    }`}>
                      <Icon className={method.color === 'red' ? 'text-accent-jetbrains' : 'text-accent-pink'} size={32} />
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
