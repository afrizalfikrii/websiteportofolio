// src/components/Experiences.jsx

import { Briefcase, Cpu } from 'lucide-react';
import data from '../portfolioData.json';
import RevealOnScroll from './RevealOnScroll.jsx';

const Experiences = () => {
  return (
    <section id="experience">
      <RevealOnScroll>
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <Briefcase className="text-cyan-400" /> Experience
        </h2>
      </RevealOnScroll>
      
      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
        {data.experiences.map((exp, index) => (
          <RevealOnScroll key={exp.id} delay={index * 200}>
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-150 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-400 font-medium mt-1">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="text-slate-500 text-sm">{exp.period}</span>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-300 text-xs font-mono">
                    {exp.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-[#0f1420] border border-white/5 rounded-2xl hover:bg-[#131b2e] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu size={64} />
                </div>
                <p className="text-slate-400 leading-relaxed mb-4 relative z-10">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-black/40 border border-white/5 rounded text-xs text-slate-300 font-mono hover:border-cyan-500/30 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Experiences;