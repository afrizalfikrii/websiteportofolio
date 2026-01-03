import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import data from '../portfolioData.json';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <RevealOnScroll>
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-wider uppercase mb-4">
            <Send size={16} />
            Get In Touch
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Together</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {data.contact.availability}
          </p>
        </div>
      </RevealOnScroll>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Email Card */}
        <RevealOnScroll delay={100}>
          <a 
            href={`mailto:${data.contact.email}`}
            className="block group relative p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-950/30 border border-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-slate-400 text-sm break-all">{data.contact.email}</p>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl"></div>
            </div>
          </a>
        </RevealOnScroll>

        {/* Location Card */}
        <RevealOnScroll delay={300}>
          <div className="group relative p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-950/30 border border-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-slate-400 text-sm">{data.contact.location}</p>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl"></div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* CTA Section */}
      <RevealOnScroll delay={400}>
        <div className="text-center mt-12">
          <a 
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20"
          >
            <Mail size={20} />
            Send me an email
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
