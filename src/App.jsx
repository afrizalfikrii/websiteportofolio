// src/App.jsx

import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import Skills from './components/Skills.jsx';
import Experiences from './components/Experiences.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import data from './portfolioData.json';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 overflow-x-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <Profile />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      
      <footer className="relative z-10 text-center py-10 border-t border-white/5 text-slate-600 bg-[#02040a]">
        © {new Date().getFullYear()} {data.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;