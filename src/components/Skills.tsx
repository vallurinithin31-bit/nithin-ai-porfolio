import React, { useState } from 'react';
import { 
  Cpu, 
  BrainCircuit, 
  Code2, 
  BarChart3, 
  Terminal, 
  Search, 
  Info,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-llm':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'programming-data':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'analytics-product':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'tools':
        return <Terminal className="w-5 h-5 text-indigo-300" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = skillCategories.map(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.explanation.toLowerCase().includes(searchQuery.toLowerCase())
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
    <section id="skills" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Skills &amp; Engineering Stack
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Hover over any technology pill to inspect its real-world application in my workflows and systems.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-electric-sm border border-cyan-300'
                  : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-electric-sm border border-cyan-300'
                    : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-dark-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Live Active Hover Tooltip Card Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-dark-900/90 border border-indigo-500/30 backdrop-blur-md flex items-center justify-between gap-4 min-h-[64px]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Info className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              {hoveredSkill ? (
                <div>
                  <span className="text-xs font-bold text-white font-mono mr-2">
                    {hoveredSkill.name}:
                  </span>
                  <span className="text-xs text-dark-200">
                    {hoveredSkill.explanation}
                  </span>
                </div>
              ) : (
                <div className="text-xs text-dark-400 font-mono">
                  💡 Hover over any skill pill below to view how I apply it in engineering and product workflows.
                </div>
              )}
            </div>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 hidden sm:block shrink-0">
            INTERACTIVE ECOSYSTEM
          </span>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl group hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-dark-400 font-mono">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-dark-300 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Interactive Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group/pill relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium tracking-wide bg-dark-800/80 hover:bg-gradient-to-r hover:from-indigo-600/90 hover:to-cyan-600/90 text-dark-200 hover:text-white border border-dark-700 hover:border-cyan-400/60 shadow-sm transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/pill:bg-white group-hover/pill:scale-125 transition-all" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-3.5 border-t border-dark-800 flex items-center justify-between text-[10px] font-mono text-dark-400">
                <span>VERIFIED SKILL DOMAIN</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> APPLIED &amp; ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
