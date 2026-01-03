import React, { useState, useEffect } from 'react';
import { Mail, User, Code2, Briefcase, Menu, X } from 'lucide-react';
import data from '../portfolioData.json';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(data.email);
      alert("Email copied to clipboard!");
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = data.email;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert("Email copied to clipboard!");
      } catch (err) {
        console.error('Unable to copy to clipboard', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={20} /> },
    { id: 'experience', label: 'Exp', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR (Top) ================= */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter text-white cursor-pointer group">
            AF<span className="text-cyan-400 group-hover:text-purple-400 transition-colors">.</span>DEV
          </div>
          
          <div className="flex gap-1 items-center bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md shadow-lg shadow-black/20">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white/10 text-white shadow-lg shadow-purple-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label === 'Exp' ? 'Experience' : item.label}
              </a>
            ))}
          </div>

          <button onClick={handleCopyEmail} className="p-2 text-slate-300 hover:text-cyan-400 transition-colors group relative">
             <Mail size={24} />
             <span className="absolute top-full right-0 mt-2 w-max px-2 py-1 text-xs bg-white/10 backdrop-blur text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">Copy Email</span>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE LAYOUT ================= */}
      
      {/* 1. Mobile Top Bar (Logo Only) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-white">
          AF<span className="text-cyan-400">.</span>DEV
        </div>
        <button onClick={handleCopyEmail} className="p-2 bg-white/5 rounded-full text-slate-300 active:scale-95 transition-transform">
          <Mail size={18} />
        </button>
      </div>

      {/* 2. Mobile Bottom Bar (Floating Navigation) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-3 shadow-2xl shadow-black/50 flex justify-around items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
                activeSection === item.id 
                  ? 'text-cyan-400' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-white/5 rounded-xl -z-10 animate-pulse"></div>
              )}
              
              {item.icon}
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;