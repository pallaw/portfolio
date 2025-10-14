import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, link: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Linkedin, link: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, link: personalInfo.github, label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target={social.label === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-accent-red/50 hover:bg-accent-red/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="text-gray-400 hover:text-accent-red transition-colors" size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
