import React from 'react';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/mock';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    color: 'text-blue-400 hover:text-blue-300',
    bg: 'hover:bg-blue-500/10 border-blue-500/20 hover:border-blue-400/50',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: personalInfo.github,
    color: 'text-gray-300 hover:text-white',
    bg: 'hover:bg-gray-500/10 border-gray-700 hover:border-gray-500',
  },
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    color: 'text-accent-red hover:text-red-400',
    bg: 'hover:bg-accent-red/10 border-accent-red/20 hover:border-accent-red/50',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: personalInfo.medium,
    color: 'text-gray-300 hover:text-white',
    bg: 'hover:bg-gray-500/10 border-gray-700 hover:border-gray-500',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
          <p className="text-gray-400 text-lg">
            Open to consulting, leadership roles, or a conversation about mobile engineering.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, label, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? '_self' : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border ${bg} ${color} transition-all duration-200 hover:scale-105 font-medium text-sm`}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-xs">
          Based in India · Available for remote roles worldwide
        </p>
      </div>
    </section>
  );
};

export default Contact;
