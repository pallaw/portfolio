import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { currentWork } from '../data/mock';

const CurrentlyBuilding = () => {
  return (
    <section id="current" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Currently Building</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              Apps I'm actively working on right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentWork.map((item) => (
              <Card
                key={item.id}
                className="bg-gray-900/50 border-gray-800 hover:border-accent-red/40 hover:shadow-lg hover:shadow-accent-red/10 transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`${item.image ? 'hidden' : 'flex'} fallback absolute inset-0 bg-gradient-to-br from-accent-red/10 to-accent-purple/10 items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{item.name}</span>
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    {item.status === 'active' ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-yellow-400 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                        In Dev
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">@{item.company} · {item.role}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-accent-red/10 text-accent-red border-accent-red/30 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    {item.playStore ? (
                      <Button
                        className="w-full bg-accent-red/10 hover:bg-accent-red/20 text-accent-red border border-accent-red/30 hover:border-accent-red transition-all justify-between px-4"
                        onClick={() => window.open(item.playStore, '_blank')}
                      >
                        <span className="flex-1 text-center">View on Play Store</span>
                        <ExternalLink size={16} />
                      </Button>
                    ) : (
                      <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border border-gray-700 text-gray-500 text-sm bg-gray-900/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
