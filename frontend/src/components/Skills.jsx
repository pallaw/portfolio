import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import {
  Bot, Layers, Smartphone, GitBranch, Activity, Wrench, Sparkles
} from 'lucide-react';
import { skills } from '../data/mock';

const iconMap = {
  bot: Bot,
  layers: Layers,
  smartphone: Smartphone,
  'git-branch': GitBranch,
  activity: Activity,
  wrench: Wrench,
};

const categoryStyle = {
  ai: {
    card: 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/50 via-teal-950/30 to-gray-900/60',
    icon: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20',
    glow: 'shadow-emerald-500/10',
  },
  architecture: {
    card: 'border-blue-500/30 bg-gray-900/50',
    icon: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    title: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20',
    glow: '',
  },
  crossplatform: {
    card: 'border-purple-500/30 bg-gray-900/50',
    icon: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    title: 'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20',
    glow: '',
  },
  platform: {
    card: 'border-orange-500/30 bg-gray-900/50',
    icon: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    title: 'text-orange-400',
    badge: 'bg-orange-500/10 text-orange-300 border-orange-500/30 hover:bg-orange-500/20',
    glow: '',
  },
  observability: {
    card: 'border-cyan-500/30 bg-gray-900/50',
    icon: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    title: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20',
    glow: '',
  },
  tooling: {
    card: 'border-gray-600/40 bg-gray-900/50',
    icon: 'text-gray-400 bg-gray-500/10 border-gray-500/30',
    title: 'text-gray-300',
    badge: 'bg-gray-500/10 text-gray-300 border-gray-500/30 hover:bg-gray-500/20',
    glow: '',
  },
};

const aiCategory = skills.categories.find(c => c.featured);
const otherCategories = skills.categories.filter(c => !c.featured);

const CategoryCard = ({ cat }) => {
  const Icon = iconMap[cat.icon] || Layers;
  const s = categoryStyle[cat.id] || categoryStyle.tooling;
  return (
    <Card className={`${s.card} border p-6 space-y-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg border ${s.icon}`}>
          <Icon size={18} />
        </div>
        <h3 className={`text-base font-bold ${s.title}`}>{cat.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item, idx) => (
          <Badge key={idx} className={`${s.badge} font-mono text-xs py-1 px-2.5 cursor-default hover:scale-105 transition-transform`}>
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
        </div>

        {/* AI-First Featured Card */}
        {aiCategory && (() => {
          const Icon = iconMap[aiCategory.icon] || Bot;
          const s = categoryStyle[aiCategory.id];
          return (
            <Card className={`${s.card} ${s.glow} border-2 p-6 sm:p-8 relative overflow-hidden shadow-lg`}>
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl border ${s.icon}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-bold ${s.title}`}>{aiCategory.title}</h3>
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-2.5 py-0.5">
                        <Sparkles size={11} />
                        AI-First
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-0.5">Leveraging AI tools to 10× engineering productivity</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {aiCategory.items.map((item, idx) => (
                    <Badge key={idx} className={`${s.badge} font-mono text-sm py-1.5 px-4 cursor-default hover:scale-105 transition-transform`}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })()}

        {/* Skill Categories Grid — row 1: first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCategories.slice(0, 3).map((cat) => <CategoryCard key={cat.id} cat={cat} />)}
        </div>
        {/* Row 2: remaining cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {otherCategories.slice(3).map((cat) => <CategoryCard key={cat.id} cat={cat} />)}
        </div>

      </div>
    </section>
  );
};

export default Skills;
