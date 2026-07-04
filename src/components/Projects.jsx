import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { MediaItem, getType } from '../components/ImageSlider';

const Projects = () => {
  // Initializing with 'All' ensures projects are immediately visible to HR recruiters upon scrolling down
  const [activeFilter, setActiveFilter] = useState('All'); 

  const filters = [
    { name: 'All', code: 'SYS_CORE' },
    { name: 'Scraping & Mining', code: 'NODE_01' },
    { name: 'AI & Automation', code: 'NODE_02' },
    { name: 'OCR & Data', code: 'NODE_03' },
    { name: 'Full-Stack Apps', code: 'NODE_04' }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'Scraping & Mining':
        return { color: '#00ffcc', text: 'text-[#00ffcc]', border: 'hover:border-[#00ffcc] border-[#00ffcc]/30', badge: 'text-[#00ffcc] bg-[#00ffcc]/10 border-[#00ffcc]/40', glow: 'hover:shadow-[0_0_35px_rgba(0,255,204,0.2)]' };
      case 'AI & Automation':
        return { color: '#00f0ff', text: 'text-[#00f0ff]', border: 'hover:border-[#00f0ff] border-[#00f0ff]/30', badge: 'text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/40', glow: 'hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]' };
      case 'OCR & Data':
        return { color: '#3b82f6', text: 'text-[#3b82f6]', border: 'hover:border-[#3b82f6] border-[#3b82f6]/30', badge: 'text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/40', glow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]' };
      case 'Full-Stack Apps':
        return { color: '#6366f1', text: 'text-[#6366f1]', border: 'hover:border-[#6366f1] border-[#6366f1]/30', badge: 'text-[#6366f1] bg-[#6366f1]/10 border-[#6366f1]/40', glow: 'hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]' };
      default:
        return { color: '#ffffff', text: 'text-white', border: 'hover:border-white/40 border-white/10', badge: 'text-white bg-white/10 border-white/30', glow: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]' };
    }
  };

  return (
    <section className="relative w-full py-32 px-6 bg-[#000000] border-t border-white/5 overflow-hidden" id="projects">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HIGH-CONTRAST FORMAL EXECUTIVE HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/20 mb-4 font-mono text-xs text-[#00ffcc] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-ping"></span>
            INTERACTIVE SYSTEM ROUTER DETECTED
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            System <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ffcc] via-[#00f0ff] to-[#3b82f6] drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">Topology</span> Map
          </h2>
          <p className="text-slate-200 text-base max-w-xl mx-auto font-normal leading-relaxed">
            Click on the central core or branching nodes below to dynamically filter the autonomous system repository.
          </p>
        </div>

        {/* ================= GEOMETRIC MIND MAPPING & ALIGNED BUS HIGHWAY ================= */}
        <div className="w-full max-w-4xl mx-auto mb-20 relative p-8 bg-[#040406] rounded-3xl border border-white/10 shadow-2xl">
          
          {/* EXPLICIT RECRUITER OPERATION RADAR */}
          <div className="absolute top-4 right-6 font-mono text-[10px] text-amber-400 font-bold tracking-wider animate-pulse bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/20">
            [ SYSTEM CONSOLE: SELECT A NODE TO ROUTE DATA ]
          </div>

          {/* HIGHWAY SYSTEM PIPELINES (Perfect Geometric Alignment to Buttons Below) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 896 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cyberMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffcc" />
                  <stop offset="35%" stopColor="#00f0ff" />
                  <stop offset="70%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              {/* PATH TO NODE 01 (Outer Left Branch) -> Connects from Main Core Base to Leftmost Button Center */}
              <path d="M 448,115 L 448,160 L 122,160 L 122,236" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none"/>
              <motion.path 
                d="M 448,115 L 448,160 L 122,160 L 122,236" 
                stroke="url(#cyberMapGrad)" strokeWidth="3.5" fill="none" strokeDasharray="50 150"
                style={{ filter: "drop-shadow(0px 0px 8px #00ffcc)" }}
                animate={{ strokeDashoffset: [0, -400] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* PATH TO NODE 02 (Inner Left Branch) -> Connects from Main Core Base to Second Button Center */}
              <path d="M 448,115 L 448,180 L 338,180 L 338,236" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none"/>
              <motion.path 
                d="M 448,115 L 448,180 L 338,180 L 338,236" 
                stroke="url(#cyberMapGrad)" strokeWidth="3.5" fill="none" strokeDasharray="40 120"
                style={{ filter: "drop-shadow(0px 0px 8px #00f0ff)" }}
                animate={{ strokeDashoffset: [0, -320] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />

              {/* PATH TO NODE 03 (Inner Right Branch) -> Connects from Main Core Base to Third Button Center */}
              <path d="M 448,115 L 448,180 L 558,180 L 558,236" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none"/>
              <motion.path 
                d="M 448,115 L 448,180 L 558,180 L 558,236" 
                stroke="url(#cyberMapGrad)" strokeWidth="3.5" fill="none" strokeDasharray="40 120"
                style={{ filter: "drop-shadow(0px 0px 8px #3b82f6)" }}
                animate={{ strokeDashoffset: [0, -320] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />

              {/* PATH TO NODE 04 (Outer Right Branch) -> Connects from Main Core Base to Rightmost Button Center */}
              <path d="M 448,115 L 448,160 L 774,160 L 774,236" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none"/>
              <motion.path 
                d="M 448,115 L 448,160 L 774,160 L 774,236" 
                stroke="url(#cyberMapGrad)" strokeWidth="3.5" fill="none" strokeDasharray="50 150"
                style={{ filter: "drop-shadow(0px 0px 8px #6366f1)" }}
                animate={{ strokeDashoffset: [0, -400] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* INTERACTIVE NETWORK ROUTING CONSOLE BUTTONS */}
          <div className="flex flex-col items-center gap-16 relative z-10 pt-4">
            
            {/* CENTRAL INPUT: PORT 00 MAIN ROOT CONSOLE */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter('All')}
              className={`px-10 py-5 bg-[#000000] border-2 rounded-xl text-center font-mono transition-all duration-300 relative ${
                activeFilter === 'All' 
                  ? 'border-[#00ffcc] shadow-[0_0_30px_rgba(0,255,204,0.3)] text-white' 
                  : 'border-white/20 text-slate-200 hover:border-white/40'
              }`}
            >
              <div className="text-xs text-[#00ffcc] font-black tracking-widest">// CORE_STREAM</div>
              <div className="text-xl font-black tracking-tight mt-1 text-white">ALL OPERATIONAL SYSTEMS</div>
              <div className="text-[10px] text-slate-300 mt-2 font-bold animate-pulse tracking-wide">
                {activeFilter === 'All' ? '● CURRENT_ACTIVE_CORE' : '>>> INTERACTIVE CONSOLE: CLICK TO INITIALIZE ALL CONSOLES <<<'}
              </div>
            </motion.button>

            {/* SUBSYSTEM INTERNET LINK PORTS (4 Column Aligned Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {filters.slice(1).map((filter) => {
                const isSelected = activeFilter === filter.name;
                const theme = getCategoryTheme(filter.name);

                return (
                  <motion.button
                    key={filter.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveFilter(filter.name)}
                    className={`p-4 bg-[#000000] border-2 rounded-xl font-mono text-left transition-all duration-300 group ${
                      isSelected 
                        ? `text-white shadow-[0_0_25px_rgba(0,240,255,0.2)]`
                        : 'border-white/10 text-slate-200 hover:border-white/30'
                    }`}
                    style={{ borderColor: isSelected ? theme.color : '' }}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-3 font-bold text-slate-300">
                      <span>{filter.code}</span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.color, boxShadow: `0 0 8px ${theme.color}` }} />
                    </div>
                    
                    <div className="text-sm font-black tracking-tight text-white h-10 flex items-center leading-snug">
                      {filter.name}
                    </div>
                    
                    <div className="text-[10px] mt-4 font-black text-right tracking-widest pt-2 border-t border-white/5">
                      {isSelected ? (
                        <span style={{ color: theme.color }}>[ ENGAGED ]</span>
                      ) : (
                        <span className="text-[#00f0ff] group-hover:text-white transition-colors">ENGAGE NODE →</span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

          </div>
        </div>

        {/* ================= DYNAMIC PROJECTS CONTAINER MATRIX ================= */}
        <AnimatePresence mode="wait">
          {activeFilter && (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="font-mono text-xs text-white font-bold uppercase tracking-wider mb-8 bg-white/5 px-4 py-2 rounded border border-white/10 inline-block">
                // MOUNTED_DEVICES_LOG: <span className="text-[#00ffcc]">{activeFilter.toUpperCase()}</span> // {filteredProjects.length} NODE(S) IDENTIFIED
              </div>

              {/* Clean 3-Column Structured Layout for Decreased Page Length */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => {
                  const theme = getCategoryTheme(project.category);
                  const sysCode = `UNIT_DEPLOY_${String(idx + 1).padStart(2, '0')}`;

                  return (
                    <Link
                      key={project.id}
                      to={`/project/${project.id}`}
                      className={`group flex flex-col justify-between bg-[#040406] border border-white/10 rounded-xl p-5 transition-all duration-300 ${theme.border} ${theme.glow} relative`}
                    >
                      <div>
                        {/* Upper Module Index Badge */}
                        <div className="flex items-center justify-between gap-2 font-mono text-xs mb-4">
                          <span className="text-slate-300 font-bold">{sysCode}</span>
                          <span className={`font-black tracking-widest uppercase px-2.5 py-0.5 text-[9px] rounded border ${theme.badge}`}>
                            {project.category}
                          </span>
                        </div>

                        {/* High-Contrast Graphic Window Container */}
                        {project.images?.[0] && (
                          <div className="w-full h-40 rounded-lg overflow-hidden bg-black border border-white/10 mb-4 relative opacity-85 group-hover:opacity-100 transition-all duration-300">
                            {getType(project.images[0]) === 'image' ? (
                              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full pointer-events-none">
                                <MediaItem item={project.images[0]} alt={project.title} />
                              </div>
                            )}
                          </div>
                        )}

                        {/* White High-Contrast Typography Focus */}
                        <h3 className="text-xl font-black text-white group-hover:text-[#00ffcc] tracking-tight mb-2.5 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-200 text-xs font-normal leading-relaxed mb-6">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Explicit Interactive Call To Action */}
                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] mb-4">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="px-2 py-0.5 bg-white/10 rounded text-white border border-white/10 font-bold">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between font-mono text-xs pt-1">
                          <span className="text-amber-400 font-bold tracking-tight text-[11px]">▶ CLICK TO VIEW DETAILS</span>
                          <span className={`font-black flex items-center gap-1 ${theme.text} text-[11px]`}>
                            DIAGNOSE <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                          </span>
                        </div>
                      </div>

                      {/* Technical Wireframe Accents */}
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-cyan-400 transition-colors"></div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INDUSTRIAL COMPLIANCE STATUS BAR */}
        <div className="mt-28 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center text-xs text-slate-300 tracking-wider">
          <div className="font-bold">// BUS_SPEED: <span className="text-white">10 GBPS // MAX_STREAM</span></div>
          <div className="font-bold">// PIPELINE: <span className="text-[#00ffcc]">AUTOMATION_READY</span></div>
          <div className="font-bold">// PACKET_LOSS: <span className="text-emerald-400">0% // SECURE_LOGS</span></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;