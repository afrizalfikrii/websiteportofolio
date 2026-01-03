import React from 'react';
import { Briefcase } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import ProjectCard from './ProjectCard';
import data from '../portfolioData.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <RevealOnScroll>
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-400 text-sm font-bold tracking-wider uppercase mb-4">
            <Briefcase size={16} />
            Portfolio
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan dengan berbagai teknologi modern.
          </p>
        </div>
      </RevealOnScroll>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
