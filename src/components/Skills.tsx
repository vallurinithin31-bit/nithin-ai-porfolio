import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Boxes, 
  Sparkles, 
  Terminal, 
  Search, 
  CheckCircle2, 
  Flame, 
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming & Languages': <Code2 className="w-5 h-5" />,
    'AI & Machine Learning': <BrainCircuit className="w-5 h-5" />,
    'Generative AI & Automation': <Sparkles className="w-5 h-5" />,
    'Web Technologies & Frameworks': <Boxes className="w-5 h-5" />,
    'Tools, Platforms & Soft Skills': <Terminal className="w-5 h-5" />
  };

  const filteredCategories = skillCategories.map(category => {
    if (selectedCategory !== 'All' && category.title !== selectedCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) {
      return null;
    }

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof skillCategories;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-zinc-900 dark:text-white tracking-wider">
            Skills &amp; Knowledge Base
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
            A transparent overview of my technical stack, categorized by proven core expertise and actively developing technologies.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mt-4" />
        </div>

        {/* Legend & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                selectedCategory === 'All'
                  ? 'bg-white text-black shadow-lg font-semibold'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-white/40'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat.title
                    ? 'bg-white text-black shadow-lg font-semibold'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-white/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box & Legend */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Proficiency Status Badges Key */}
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono shrink-0">
              <span className="inline-flex items-center gap-1 text-white font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Core
              </span>
              <span className="inline-flex items-center gap-1 text-zinc-400">
                <Flame className="w-3.5 h-3.5 text-zinc-400" /> Learning
              </span>
            </div>

          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-3xl p-7 border border-zinc-200 dark:border-zinc-800/90 ai-glow-card flex flex-col justify-between"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
                      {categoryIcons[category.title] || <BrainCircuit className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-base font-cinzel font-bold text-zinc-900 dark:text-white tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isCore = skill.status === 'proficient';
                    return (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                          isCore
                            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700'
                            : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-800'
                        }`}
                      >
                        {isCore ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                        ) : (
                          <Flame className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified Stack</span>
                <span className="text-zinc-400">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
