import React from 'react';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

// "Aug 2023 - Dec 2024" -> "2023 – 2024"
// "Feb 2026 - Present"  -> "2026 – Now"
const yearRange = (duration) => {
  const parts = duration.split(' - ');
  const startYear = parts[0].split(' ').pop();
  const endYear = duration.includes('Present') ? 'Now' : parts[1]?.split(' ').pop();
  return `${startYear} – ${endYear}`;
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto rounded-full" />
          </div>

          {/* Date-column timeline */}
          <div className="relative grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr]">
            {/* Gradient rail running between the two columns */}
            <div
              className="absolute top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-red via-accent-purple to-transparent left-[110px] md:left-[160px]"
              aria-hidden="true"
            />

            {experience.map((exp) => (
              <React.Fragment key={exp.id}>
                {/* Left column — date */}
                <div className="py-5 pr-6 text-right">
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple leading-tight">
                    {yearRange(exp.duration)}
                  </p>
                  <p className="text-[11px] font-mono text-gray-500 mt-1">
                    {exp.duration}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    {exp.location}
                  </p>
                </div>

                {/* Right column — content */}
                <div className="py-5 pl-6 border-l border-white/5 relative">
                  {/* Node dot on the rail */}
                  <span
                    className="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-accent-red ring-[3px] ring-black"
                    aria-hidden="true"
                  />

                  <h3 className="text-lg font-bold text-white leading-tight">
                    {exp.position}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple font-semibold text-sm mt-0.5">
                    {exp.company}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="text-accent-red mt-1 flex-shrink-0">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-accent-red/10 text-accent-red border-accent-red/30 hover:bg-accent-red/20 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
