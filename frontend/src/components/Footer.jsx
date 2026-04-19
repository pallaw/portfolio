import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/mock';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
];

const socialLinks = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: BookOpen, href: personalInfo.medium, label: 'Medium' },
];

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <span className="text-white font-bold text-lg tracking-tight">
            {personalInfo.name}
          </span>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
