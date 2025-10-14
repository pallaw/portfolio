import React from 'react';
import { Trophy, Users, Award, Code } from 'lucide-react';
import { Card } from './ui/card';
import { about } from '../data/mock';

const iconMap = {
  trophy: Trophy,
  users: Users,
  award: Award,
  code: Code
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0F0820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1E123F] via-[#597DF0] to-[#3B63F5] mx-auto"></div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto text-left">
            {about.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <Card
                  key={index}
                  className="bg-[#1E123F]/50 border-gray-800 hover:border-accent-compose-royal/50 hover:shadow-lg hover:shadow-accent-compose-royal/10 transition-all duration-300 hover:scale-105 p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-br from-accent-compose-royal/10 to-accent-compose-purple/10 rounded-lg">
                      <Icon className="text-accent-compose-royal" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
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

export default About;
