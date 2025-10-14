import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages, color: 'cyan' },
    { title: 'Frameworks & Libraries', items: [...skills.frameworks, ...skills.libraries], color: 'blue' },
    { title: 'Architecture & Patterns', items: skills.architecture, color: 'cyan' },
    { title: 'Tools & Practices', items: [...skills.tools, ...skills.practices], color: 'blue' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-6 space-y-4"
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className={`${
                        category.color === 'cyan'
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20'
                      } font-mono text-sm py-1.5 px-3 hover:scale-105 transition-transform cursor-default`}
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
