import React, { useState, useRef } from 'react';
import { ExternalLink, Download, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects, currentWork } from '../data/mock';

const activeItems = currentWork.map(item => ({
  id: item.id,
  name: item.name,
  company: item.company,
  roleLabel: item.roleLabel,
  description: item.description,
  image: item.image,
  technologies: item.technologies,
  metrics: item.metrics || {},
  links: { playStore: item.playStore || null, appStore: item.appStore || null },
  isActive: true,
  badge: item.badge || null,
}));

const pastItems = projects
  .filter(p => p.id !== 1)
  .map(p => ({ ...p, isActive: false, roleLabel: null, badge: null }));

const allItems = [...activeItems, ...pastItems];
const INITIAL_COUNT = 6;

const RoleBadge = ({ badge }) => {
  if (!badge) return null;
  const isContributor = badge === 'Contributor';
  return (
    <span className={`text-xs font-semibold rounded-full px-2.5 py-1 border backdrop-blur-sm ${
      isContributor
        ? 'text-blue-400 bg-blue-950/80 border-blue-500/40'
        : 'text-purple-400 bg-purple-950/80 border-purple-500/40'
    }`}>
      {badge}
    </span>
  );
};

const StoreButtons = ({ links }) => {
  const hasBoth = links.playStore && links.appStore;
  const hasNeither = !links.playStore && !links.appStore;

  if (hasNeither) {
    return (
      <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border border-yellow-700/50 text-yellow-500/70 text-sm bg-yellow-950/20">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
        Coming Soon
      </div>
    );
  }

  if (hasBoth) {
    return (
      <div className="flex gap-2">
        <Button
          className="flex-1 bg-accent-red/10 hover:bg-accent-red/20 text-accent-red border border-accent-red/30 hover:border-accent-red transition-all justify-center px-3 text-xs"
          onClick={() => window.open(links.playStore, '_blank')}
        >
          <ExternalLink size={13} className="mr-1.5 flex-shrink-0" />
          Play Store
        </Button>
        <Button
          className="flex-1 bg-accent-purple/10 hover:bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:border-accent-purple transition-all justify-center px-3 text-xs"
          onClick={() => window.open(links.appStore, '_blank')}
        >
          <ExternalLink size={13} className="mr-1.5 flex-shrink-0" />
          App Store
        </Button>
      </div>
    );
  }

  return (
    <>
      {links.playStore && (
        <Button
          className="w-full bg-accent-red/10 hover:bg-accent-red/20 text-accent-red border border-accent-red/30 hover:border-accent-red transition-all justify-between px-4"
          onClick={() => window.open(links.playStore, '_blank')}
        >
          <span className="flex-1 text-center">View on Play Store</span>
          <ExternalLink size={16} />
        </Button>
      )}
      {links.appStore && (
        <Button
          className="w-full bg-accent-purple/10 hover:bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:border-accent-purple transition-all justify-between px-4"
          onClick={() => window.open(links.appStore, '_blank')}
        >
          <span className="flex-1 text-center">View on App Store</span>
          <ExternalLink size={16} />
        </Button>
      )}
    </>
  );
};

const ProjectCard = ({ item, isOrphan }) => {
  const [imgError, setImgError] = useState(false);

  const borderClass = item.isActive
    ? 'border-emerald-500/40 hover:border-emerald-500/70 hover:shadow-emerald-500/10'
    : 'border-gray-700 hover:border-accent-red/50 hover:shadow-accent-red/10';

  const showImage = item.image && !imgError;

  return (
    <Card
      className={`${borderClass} bg-gray-900/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden group flex flex-col${isOrphan ? ' lg:col-start-2' : ''}`}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        {showImage ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-28 h-28 object-cover rounded-2xl shadow-lg"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 to-accent-purple/10 flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold text-white text-center">{item.name}</h3>
          </div>
        )}
        {item.isActive && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold rounded-full px-2.5 py-1 border backdrop-blur-sm text-emerald-400 bg-emerald-950/80 border-emerald-500/40">
              Currently Working
            </span>
          </div>
        )}
        {item.badge && (
          <div className="absolute top-3 right-3">
            <RoleBadge badge={item.badge} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-0.5">{item.name}</h3>
          <p className="text-sm text-gray-500">
            @{item.company}
            {item.roleLabel && (
              <span className="text-gray-600"> · {item.roleLabel.split('·')[1]?.trim()}</span>
            )}
          </p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {item.description}
        </p>

        {item.metrics && (item.metrics.downloads || item.metrics.rating) && (
          <div className="flex justify-between items-center py-3 border-t border-b border-gray-800 px-2">
            {item.metrics.downloads && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg border border-accent-red/30 bg-accent-red/5">
                  <Download className="text-accent-red" size={16} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.metrics.downloads}</p>
                  <p className="text-gray-500 text-xs">Downloads</p>
                </div>
              </div>
            )}
            {item.metrics.rating && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg border border-accent-purple/30 bg-accent-purple/5">
                  <Star className="text-accent-purple" size={16} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.metrics.rating}</p>
                  <p className="text-gray-500 text-xs">Rating</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tags — capped at 2 rows */}
        <div className="flex flex-wrap gap-2 max-h-14 overflow-hidden">
          {item.technologies.slice(0, 4).map((tech, idx) => (
            <Badge key={idx} className="bg-accent-red/10 text-accent-red border-accent-red/30 font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="pt-2 flex flex-col gap-3 mt-auto">
          <StoreButtons links={item.links} />
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [extraOverflow, setExtraOverflow] = useState('hidden');
  const extraRef = useRef(null);

  const firstItems = allItems.slice(0, INITIAL_COUNT);
  const extraItems = allItems.slice(INITIAL_COUNT);

  const isFirstOrphan = firstItems.length % 3 === 1;
  const isExtraOrphan = extraItems.length % 3 === 1;

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Recent Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
          </div>

          {/* Always-visible first 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstItems.map((item, index) => (
              <ProjectCard
                key={item.id}
                item={item}
                isOrphan={isFirstOrphan && index === firstItems.length - 1}
              />
            ))}
          </div>

          {/* Extra items — smooth height + fade transition */}
          {extraItems.length > 0 && (
            <div
              ref={extraRef}
              className="transition-[max-height,opacity] duration-700 ease-in-out"
              style={{
                maxHeight: showAll ? `${extraRef.current?.scrollHeight ?? 4000}px` : '0px',
                opacity: showAll ? 1 : 0,
                overflow: extraOverflow,
              }}
              onTransitionEnd={() => { if (showAll) setExtraOverflow('visible'); }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extraItems.map((item, index) => (
                  <ProjectCard
                    key={item.id}
                    item={item}
                    isOrphan={isExtraOrphan && index === extraItems.length - 1}
                  />
                ))}
              </div>
            </div>
          )}

          {allItems.length > INITIAL_COUNT && (
            <div className="text-center">
              <button
                className="border-2 border-gray-700 text-white hover:bg-gray-900 hover:border-accent-red font-semibold px-8 py-3 rounded-md text-sm transition-all duration-300 hover:scale-105"
                onClick={() => {
                  if (showAll) setExtraOverflow('hidden');
                  setShowAll(v => !v);
                }}
              >
                {showAll ? 'Show Less' : 'Show All Projects'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Projects;
