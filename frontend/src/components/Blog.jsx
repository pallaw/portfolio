import React from 'react';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { articles } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Blog & Articles</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I write about Android development, Kotlin Multiplatform, and mobile architecture on Medium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-102 overflow-hidden group cursor-pointer"
                onClick={() => window.open(article.link, '_blank')}
              >
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/1a1a1b/06b6d4?text=Article';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-800">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://medium.com/@pallawpathak', '_blank')}
            >
              View All Articles on Medium
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
