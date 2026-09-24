import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Education &amp; Core Coursework
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Rigorous undergraduate computer science curriculum with specialization in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl glass-panel p-6 sm:p-9 rounded-3xl relative overflow-hidden border border-dark-700/80">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-dark-800">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/25 uppercase tracking-wider mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {educationData.status}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-indigo-300">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-dark-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900 border border-dark-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {educationData.year}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900 border border-dark-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Andhra Pradesh, India
              </span>
            </div>

          </div>

          {/* Key Coursework Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Key Specialized Coursework:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {educationData.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-dark-900/60 border border-dark-800 text-xs text-dark-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-sans font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
