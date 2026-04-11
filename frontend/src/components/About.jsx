import React from 'react';
import { Trophy, Users, Award, Code, Bot, Sparkles } from 'lucide-react';
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
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">About Pallaw</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
          </div>

          {/* Bio + AI callout */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border-l-4 border-accent-red/60 pl-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {about.description}
              </p>
            </div>

            {/* AI-First callout */}
            <div className="flex items-start gap-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-5">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                <Bot className="text-emerald-400" size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-emerald-400 font-bold text-sm">AI-First Engineering</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-2 py-0.5">
                    <Sparkles size={10} />
                    How I work
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{about.aiStatement}</p>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-accent-red/50 hover:shadow-lg hover:shadow-accent-red/10 transition-all duration-300 hover:scale-105 p-5 sm:p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-br from-accent-red/10 to-accent-purple/10 rounded-lg">
                      <Icon className="text-accent-red" size={28} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{highlight.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
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
