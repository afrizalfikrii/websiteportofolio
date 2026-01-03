import data from '../portfolioData.json';
import TiltCard from './TiltCard';
import RevealOnScroll from './RevealOnScroll';

const SkillCard = ({ skill, delay }) => {
  // Fungsi helper untuk path logo
  const getLogoPath = (iconName) => {
    // Try PNG first, fallback to SVG
    const name = iconName.toLowerCase();
    // Check if PNG exists, otherwise use SVG
    return `/assets/icons/${name}.png`;
  };

  // Check if file is SVG based on iconName
  const isSVG = (iconName) => {
    const svgIcons = ['react', 'js', 'javascript', 'typescript', 'tailwind', 'tailwindcss', 'html', 'html5', 'php', 'python', 'mysql', 'postgresql', 'git', 'nodejs', 'nodedotjs', 'vite', 'nextdotjs', 'docker'];
    return svgIcons.includes(iconName.toLowerCase());
  };

  // 1. MAPPING WARNA GRADIENT (Agar terbaca oleh Tailwind)
  const gradientMap = {
    cyan: "from-cyan-400 to-cyan-500",
    green: "from-green-400 to-green-500",
    yellow: "from-yellow-400 to-yellow-500",
    blue: "from-blue-400 to-blue-500",
    purple: "from-purple-400 to-purple-500",
    red: "from-red-400 to-red-500",
    orange: "from-orange-400 to-orange-500",
  };

  // 2. MAPPING WARNA BORDER (Hex Code untuk style inline)
  const borderMap = {
    cyan: "#22d3ee",
    green: "#34d399",
    yellow: "#fbbf24",
    blue: "#3b82f6",
    purple: "#a855f7",
    red: "#ef4444",
    orange: "#f97316",
  };

  return (
    <div className="transition-all duration-1000" style={{ transitionDelay: `${delay}ms` }}>
      <TiltCard className="h-full">
        <div className="h-full p-6 rounded-2xl bg-[#0a0f1c] border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
          
          {/* Icon Box */}
          <div 
            className="w-16 h-16 rounded-2xl border-2 bg-transparent mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center p-3"
            // Gunakan borderMap berdasarkan nama warna di JSON (misal: 'cyan')
            style={{ borderColor: borderMap[skill.color] || '#ffffff' }}
          >
            <img 
              src={getLogoPath(skill.iconName)}
              alt={`${skill.name} logo`}
              className="w-full h-full object-contain"
              style={{ 
                filter: isSVG(skill.iconName) ? 'brightness(0) invert(1)' : 'none'
              }}
              onError={(e) => {
                // Try SVG if PNG fails
                if (e.target.src.endsWith('.png')) {
                  e.target.src = `/assets/icons/${skill.iconName.toLowerCase()}.svg`;
                  e.target.style.filter = 'brightness(0) invert(1)';
                } else {
                  // If both fail, show fallback letter
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-white text-2xl font-bold';
                  fallback.textContent = skill.name.charAt(0);
                  e.target.parentElement.appendChild(fallback);
                }
              }}
            />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
          <p className="text-sm text-slate-400 mb-4">{skill.level}</p>
          
          {/* Progress Bar Container */}
          <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden">
            {/* Animated Progress Bar Fill */}
            <div 
              // Ambil class gradient dari map berdasarkan key (misal: gradientMap['cyan'])
              className={`h-full bg-gradient-to-r ${gradientMap[skill.color] || 'from-gray-400 to-gray-500'} rounded-full transition-all duration-1000 ease-out`}
              style={{ 
                width: skill.level === 'Advanced' ? '90%' : 
                       skill.level === 'Intermediate' ? '75%' : '50%' 
              }}
            ></div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

const Skills = () => {
  // Group skills by category
  const groupedSkills = data.skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Define category order
  const categoryOrder = ['Frontend', 'Backend', 'Database', 'Tools & DevOps'];

  return (
    <section id="skills" className="mb-32">
      <RevealOnScroll>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">My Skills</h2>
            <p className="text-slate-400">Tech stack and tools I use daily.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-cyan-600 to-transparent rounded-full"></div>
        </div>
      </RevealOnScroll>
      
      {categoryOrder.map((category, catIndex) => {
        const categorySkills = groupedSkills[category];
        if (!categorySkills || categorySkills.length === 0) return null;
        
        return (
          <div key={category} className="mb-16">
            <RevealOnScroll delay={catIndex * 100}>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                {category}
              </h3>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorySkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={(catIndex * 200) + (index * 100)} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;