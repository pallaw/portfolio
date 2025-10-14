import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { skills } from '../data/mock';

const Skills = () => {
  const otherCategories = [
    { title: 'Frameworks & Libraries', items: [...skills.frameworks, ...skills.libraries], color: 'red' },
    { title: 'Architecture & Patterns', items: skills.architecture, color: 'red' },
    { title: 'Tools & Practices', items: [...skills.tools, ...skills.practices], color: 'red' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
          </div>

          {/* Languages Section - Featured Design */}
          <div className="mb-12">
            <Card className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-accent-red/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-red"></div>
                  <h3 className="text-2xl font-bold text-white">Core Languages</h3>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-red"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {skills.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gray-800/50 hover:bg-gray-800 border-2 border-accent-red/20 hover:border-accent-red/50 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-red/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-red transition-colors leading-tight">
                            {lang.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="text-accent-red font-semibold text-lg">{lang.years}+</div>
                            <div className="text-gray-400 text-sm">years</div>
                          </div>
                        </div>
                        <div className="text-5xl font-bold text-accent-red/10 group-hover:text-accent-red/20 transition-colors">
                          {lang.years}
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="mt-4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-red to-accent-purple rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((lang.years / 10) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Other Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-accent-red/50 transition-all duration-300 p-6 space-y-4"
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-accent-red/10 text-accent-red border-accent-red/30 hover:bg-accent-red/20 font-mono text-sm py-1.5 px-3 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
