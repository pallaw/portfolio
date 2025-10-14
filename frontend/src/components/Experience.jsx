import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0A0515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-compose-royal to-accent-compose-purple mx-auto"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-compose-royal via-accent-compose-purple to-transparent transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-20 md:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-br from-accent-compose-royal to-accent-compose-purple rounded-full border-4 border-black shadow-lg shadow-accent-compose-royal/50 transform md:-translate-x-1/2 z-10"></div>

                  {/* Content card */}
                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <Card className="bg-[#1E123F]/50 border-gray-800 hover:border-accent-compose-royal/50 hover:shadow-lg hover:shadow-accent-compose-royal/10 transition-all duration-300 p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-compose-royal to-accent-compose-purple font-semibold text-lg">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} className="text-accent-compose-royal" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} className="text-accent-compose-royal" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 text-gray-400 text-sm">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent-compose-royal mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            className="bg-accent-compose-royal/10 text-accent-compose-royal border-accent-compose-royal/30 hover:bg-accent-compose-royal/20 font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
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
