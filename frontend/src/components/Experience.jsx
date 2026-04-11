import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-red via-accent-purple to-transparent"></div>

            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 w-3 h-3 bg-gradient-to-br from-accent-red to-accent-purple rounded-full border-2 border-black shadow-lg shadow-accent-red/50 -translate-x-1/2 z-10"></div>

                  <Card className="bg-gray-900/50 border-gray-800 hover:border-accent-red/40 hover:shadow-lg hover:shadow-accent-red/10 transition-all duration-300 p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="space-y-0.5">
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 sm:text-right sm:flex-col sm:items-end">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-accent-red flex-shrink-0" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-accent-red flex-shrink-0" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-400 text-sm">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-red mt-1.5 flex-shrink-0">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-accent-red/10 text-accent-red border-accent-red/30 hover:bg-accent-red/20 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
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
