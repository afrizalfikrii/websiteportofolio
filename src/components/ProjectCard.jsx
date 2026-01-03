import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import TiltCard from './TiltCard';

const ProjectCard = ({ project, index }) => {
  return (
    <RevealOnScroll delay={index * 100}>
      <TiltCard className="group relative bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-bold text-white">
            Featured
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-10">💼</div>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-cyan-400 transition-colors duration-300 text-sm font-semibold"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1f2e] border border-white/10 text-white rounded-lg hover:border-white/30 transition-colors duration-300 text-sm font-semibold"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl"></div>
        </div>
      </TiltCard>
    </RevealOnScroll>
  );
};

export default ProjectCard;
