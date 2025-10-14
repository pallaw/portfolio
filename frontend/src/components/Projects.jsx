import React from 'react';
import { ExternalLink, Download, Star, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key projects I've contributed to during my tenure at leading tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 hover:border-accent-red/50 hover:shadow-lg hover:shadow-accent-red/10 transition-all duration-300 hover:scale-102 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-content').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`${project.image && !project.image.includes('placeholder') ? 'hidden' : 'flex'} fallback-content absolute inset-0 bg-gradient-to-br from-accent-red/10 to-accent-purple/10 flex-col items-center justify-center p-6`}>
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-500">@{project.company}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed min-h-[4rem]">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="flex justify-between items-center py-3 border-t border-b border-gray-800 px-4">
                      {project.metrics.downloads && (
                        <div className="flex items-center gap-2">
                          <Download className="text-accent-red" size={16} />
                          <div>
                            <p className="text-white font-semibold text-sm">{project.metrics.downloads}</p>
                            <p className="text-gray-500 text-xs">Downloads</p>
                          </div>
                        </div>
                      )}
                      {project.metrics.rating && (
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <p className="text-white font-semibold text-sm">{project.metrics.rating}</p>
                            <p className="text-gray-500 text-xs">Rating</p>
                          </div>
                          <Star className="text-accent-red" size={16} />
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-accent-red/10 text-accent-red border-accent-red/30 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {(project.links.playStore || project.links.appStore) && (
                    <div className="pt-2 flex flex-col gap-3">
                      {project.links.playStore && (
                        <Button
                          className="w-full bg-accent-red/10 hover:bg-accent-red/20 text-accent-red border border-accent-red/30 hover:border-accent-red transition-all justify-between px-4"
                          onClick={() => window.open(project.links.playStore, '_blank')}
                        >
                          <span className="flex-1 text-center">View on Play Store</span>
                          <ExternalLink size={16} />
                        </Button>
                      )}
                      {project.links.appStore && (
                        <Button
                          className="w-full bg-accent-purple/10 hover:bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:border-accent-purple transition-all justify-between px-4"
                          onClick={() => window.open(project.links.appStore, '_blank')}
                        >
                          <span className="flex-1 text-center">View on App Store</span>
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
