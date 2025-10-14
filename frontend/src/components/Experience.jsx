import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 md:pr-8">
                    {index % 2 === 0 && (
                      <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                            <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="text-cyan-400" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} className="text-cyan-400" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2 text-gray-400 text-sm">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    )}
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black shadow-lg shadow-cyan-500/50"></div>

                  <div className="md:w-1/2 md:pl-8">
                    {index % 2 !== 0 && (
                      <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                            <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="text-cyan-400" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} className="text-cyan-400" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2 text-gray-400 text-sm">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
