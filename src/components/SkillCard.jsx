import React from 'react';
import TiltCard from './TiltCard';

const SkillCard = ({ skill, delay }) => {
  const getIconPath = (iconName) => {
    // Map icon names to image file names (supports both SVG and PNG)
    const iconMap = {
      'react': 'react.png',
      'js': 'javascript.png',
      'javascript': 'javascript.png',
      'tailwind': 'tailwindcss.png',
      'tailwindcss': 'tailwindcss.png',
      'html': 'html5.png',
      'html5': 'html5.png',
      'php': 'php.png',
      'laravel': 'php.png',
      'python': 'python.png',
      'django': 'python.png',
      'mysql': 'mysql.png',
      'postgresql': 'postgresql.png',
      'postgres': 'postgresql.png',
      'git': 'git.png',
      'github': 'git.png',
      'nodejs': 'nodedotjs.png',
      'node': 'nodedotjs.png',
      'vite': 'vite.png',
      'nextdotjs': 'nextdotjs.png',
      'nextjs': 'nextdotjs.png',
      'next': 'nextdotjs.png'
    };
    
    const fileName = iconMap[iconName.toLowerCase()] || 'react.png';
    return `/images/icons/${fileName}`;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'cyan': 'from-cyan-500 to-blue-500',
      'yellow': 'from-yellow-400 to-orange-400',
      'orange': 'from-orange-500 to-red-500',
      'purple': 'from-purple-500 to-pink-500',
      'blue': 'from-blue-500 to-cyan-500',
      'green': 'from-green-500 to-emerald-500'
    };
    
    return colorMap[color] || 'from-cyan-500 to-blue-500';
  };

  const getLevelWidth = (level) => {
    const levelMap = {
      'Beginner': 'w-[40%]',
      'Intermediate': 'w-[70%]',
      'Advanced': 'w-[90%]'
    };
    
    return levelMap[level] || 'w-[70%]';
  };

  return (
    <div className={`transition-all duration-1000`} style={{ transitionDelay: `${delay}ms` }}>
      <TiltCard className="h-full">
        <div className="h-full p-6 rounded-2xl bg-[#0a0f1c] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getColorClasses(skill.color)} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
             <div className="w-full h-full bg-[#0a0f1c] rounded-[10px] flex items-center justify-center p-2.5">
               <img 
                 src={getIconPath(skill.iconName)} 
                 alt={`${skill.name} logo`}
                 className="w-full h-full object-contain"
               />
             </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
          <p className="text-sm text-slate-500 mb-4">{skill.level}</p>
          <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${getColorClasses(skill.color)} ${getLevelWidth(skill.level)}`}></div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

export default SkillCard;