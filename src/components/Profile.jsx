import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MapPin, School, Mail, Code2, FileText } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import TiltCard from './TiltCard';
import data from '../portfolioData.json';

const Profile = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Backend Developer", "Full-Stack Enthusiast", "Tech Explorer"];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) { setDelta(prevDelta => prevDelta / 2); }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center pt-20 pb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <RevealOnScroll>
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400">
                {data.name}
              </span>
            </h1>
            
            {/* Typewriter */}
            <div className="h-8 mb-4">
              <span className="text-2xl md:text-3xl font-mono text-cyan-400 border-r-4 border-cyan-400 pr-2">
                &gt; {text}
              </span>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg border-l-2 border-slate-800 pl-6">
              {data.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/20 transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10">Download CV</span>
                <FileText size={18} />
              </a>

              <a href={`mailto:${data.email}`} className="relative px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 group overflow-hidden">
                <span className="relative z-10">Contact Me</span>
                <Mail size={18} className="relative z-10 group-hover:rotate-12 transition-transform"/>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <div className="flex gap-3">
                <a href={data.socials.github} target="_blank" rel="noreferrer" className="p-4 bg-[#1a1f2e] rounded-xl hover:bg-[#252b40] transition-colors border border-white/5 hover:border-white/10 text-white">
                  <Github size={20} />
                </a>
                <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-[#1a1f2e] rounded-xl hover:bg-[#252b40] transition-colors border border-white/5 hover:border-white/10 text-blue-400">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Location Info - FIXED RESPONSIVE */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-slate-500 pt-8 font-mono">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-500"/> {data.location}
              </span>
              <span className="flex items-center gap-2">
                <School size={14} className="text-purple-500"/> {data.campus}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3D Profile Card */}
        <RevealOnScroll delay={200}>
          <div className="flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <TiltCard className="w-80 h-80 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] shadow-2xl relative z-10 group">
               <img 
                src={data.profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700" 
               />
               <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
               
               {/* Mac Dots & Icon */}
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between text-white/90">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <Code2 size={20} className="text-white/50" />
                  </div>
               </div>
            </TiltCard>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Profile;