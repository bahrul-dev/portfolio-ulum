import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // FIXED: Using useNavigate for accurate route state retention
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { MediaItem, getType } from '../components/ImageSlider';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for back-navigation mapping
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] text-white font-mono p-6">
        <div className="border border-red-500/30 bg-red-500/5 p-8 rounded-xl text-center max-w-md shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <div className="text-red-400 font-black text-xs tracking-widest mb-2">// ERROR: TARGET_NODE_NOT_FOUND</div>
          <h2 className="text-2xl font-black mb-6 text-white tracking-tight">System Node Offline</h2>
          <button 
            onClick={() => navigate(-1)}
            className="inline-block px-5 py-2.5 rounded-lg bg-white/10 text-white font-bold text-xs border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
          >
            RETURN TO PROJECT MATRIC
          </button>
        </div>
      </div>
    );
  }

  // Consistent spectrum configuration matching Hero, About, and Projects
  const getCategoryTheme = (category) => {
    switch (category) {
      case 'Scraping & Mining':
        return { color: '#00ffcc', text: 'text-[#00ffcc]', border: 'border-[#00ffcc]/30', badge: 'text-[#00ffcc] bg-[#00ffcc]/10 border-[#00ffcc]/40', glow: 'shadow-[0_0_40px_rgba(0,255,204,0.15)]', btn: 'from-[#00ffcc] to-[#00f0ff]', pulse: 'bg-[#00ffcc]' };
      case 'AI & Automation':
        return { color: '#00f0ff', text: 'text-[#00f0ff]', border: 'border-[#00f0ff]/30', badge: 'text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/40', glow: 'shadow-[0_0_40px_rgba(0,240,255,0.15)]', btn: 'from-[#00f0ff] to-[#3b82f6]', pulse: 'bg-[#00f0ff]' };
      case 'OCR & Data':
        return { color: '#3b82f6', text: 'text-[#3b82f6]', border: 'border-[#3b82f6]/30', badge: 'text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/40', glow: 'shadow-[0_0_40px_rgba(59,130,246,0.15)]', btn: 'from-[#3b82f6] to-[#6366f1]', pulse: 'bg-[#3b82f6]' };
      case 'Full-Stack Apps':
        return { color: '#6366f1', text: 'text-[#6366f1]', border: 'border-[#6366f1]/30', badge: 'text-[#6366f1] bg-[#6366f1]/10 border-[#6366f1]/40', glow: 'shadow-[0_0_40px_rgba(99,102,241,0.15)]', btn: 'from-[#6366f1] to-[#a855f7]', pulse: 'bg-[#6366f1]' };
      default:
        return { color: '#ffffff', text: 'text-white', border: 'border-white/20', badge: 'text-white bg-white/10 border-white/30', glow: 'shadow-[0_0_25px_rgba(255,255,255,0.15)]', btn: 'from-slate-800 to-slate-900', pulse: 'bg-white' };
    }
  };

  const theme = getCategoryTheme(project.category);

  return (
    <section className="min-h-screen bg-[#000000] text-white py-24 px-6 relative overflow-hidden">
      
      {/* CHROMATIC MATRIX OVERLAY ENGINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-100 bg-linear-to-b from-cyan-500/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* FIXED NAVIGATION PORT: Safely routes back to exact previous grid coordinate */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-mono text-xs font-bold tracking-wider mb-12 group transition-colors bg-transparent border-none cursor-pointer"
        >
          <span className="text-sm group-hover:-translate-x-1 transition-transform inline-block">←</span> RETURN_TO_PROJECT_MATRIX
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* ================= HEADER AND INTERACTIVE SVG CONNECTOR JUNCTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-white/5">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 font-mono text-xs mb-3 font-bold">
                <span className="text-slate-500">// DEPLOYED_NODE</span>
                <span className={`tracking-widest uppercase px-2.5 py-0.5 rounded border ${theme.badge}`}>
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-1.5 font-mono">
                {project.tech.map(t => (
                  <span key={t} className="text-3xs px-2.5 py-1 bg-white/5 rounded text-white border border-white/10 font-bold shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* LIVE DATA JUNCTION CONDUIT (Replaced text logs with high-intensity aligned circuits) */}
            <div className="md:col-span-4 h-32 w-full relative hidden md:block border border-white/5 bg-[#030305]/40 rounded-xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 240 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Structural Grid Mesh */}
                <path d="M 0,32 L 240,32 M 0,64 L 240,64 M 0,96 L 240,96 M 60,0 L 60,128 M 120,0 L 120,128 M 180,0 L 180,128" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                
                {/* Main Geometric Laser Rail */}
                <path d="M 15,32 L 120,32 L 150,64 L 240,64" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
                <motion.path 
                  d="M 15,32 L 120,32 L 150,64 L 240,64" 
                  stroke={theme.color} strokeWidth="4" fill="none" strokeDasharray="30 90"
                  style={{ filter: `drop-shadow(0px 0px 8px ${theme.color})` }}
                  animate={{ strokeDashoffset: [0, -240] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Sub-Branch Active Line */}
                <path d="M 120,32 L 120,96 L 180,96" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
                <motion.path 
                  d="M 120,32 L 120,96 L 180,96" 
                  stroke="#ffffff" strokeWidth="3" fill="none" strokeDasharray="20 60"
                  style={{ filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.8))" }}
                  animate={{ strokeDashoffset: [240, 0] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Blinking Status Terminal Matrix Indicators */}
                <circle cx="150" cy="64" r="3.5" fill={theme.color} />
                <motion.circle cx="150" cy="64" r="7" stroke={theme.color} strokeWidth="1" animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                <circle cx="180" cy="96" r="3" fill="#ffffff" />
              </svg>
              <div className="absolute bottom-2 right-3 font-mono text-[8px] text-slate-500 tracking-widest">SYS_FLOW: OK</div>
            </div>
          </div>

          {/* ================= HIGH-SPEED HORIZONTAL RUNNING LASER CONDUIT CIRCUIT ================= */}
          <div className="w-full h-8 relative hidden sm:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="16" x2="100%" y2="16" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <motion.line
                x1="0" y1="16" x2="100%" y2="16"
                stroke="url(#detailLaserGrad)"
                strokeWidth="3.5"
                strokeDasharray="120 240"
                style={{ filter: `drop-shadow(0px 0px 8px ${theme.color})` }}
                animate={{ strokeDashoffset: [0, -720] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <circle cx="0" cy="16" r="3" fill={theme.color} />
              <defs>
                <linearGradient id="detailLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme.color} />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor={theme.color} />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute -top-2 left-0 font-mono text-[9px] text-slate-500 tracking-wider">// LOCAL_NODE_ROUTING_BUS_LINE_ENGAGED</div>
          </div>

          {/* HIGH-GLOW ACTION INTERFACE PORTS */}
          <div className="flex items-center gap-6">
            <motion.a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${theme.color}80` }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3.5 rounded-xl bg-linear-to-r ${theme.btn} text-slate-950 font-black text-sm text-center tracking-wide transition-all duration-300`}
            >
              LAUNCH LIVE INTERFACE
            </motion.a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono font-black text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              INSPECT SOURCE CODE
            </a>
          </div>

          {/* ================= INTERACTIVE OVERVIEW SHAPE CONSOLE ================= */}
          <div className="group relative p-6 md:p-8 bg-[#040406] border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-400/40 shadow-2xl">
            <span className="absolute -top-1 -left-1 font-mono text-[10px] text-slate-700 pointer-events-none group-hover:text-cyan-400/50 transition-colors">+</span >
            <span className="absolute -bottom-2 -right-1 font-mono text-[10px] text-slate-700 pointer-events-none group-hover:text-cyan-400/50 transition-colors">+</span >
            
            <div className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[9px] text-slate-500">
              <span className={`w-1.5 h-1.5 rounded-full ${theme.pulse} animate-pulse shadow-xs`} />
              <span>CORE_BUS_MONITOR</span>
            </div>

            <h3 className="text-xs font-mono font-black mb-4 text-[#00f0ff] tracking-widest uppercase">// SYSTEM_ARCHITECTURE_OVERVIEW</h3>
            <p className="text-slate-200 leading-relaxed text-base font-light">
              {project.fullDesc}
            </p>
          </div>

          {/* ================= HIGH-CONTRAST DATA ASSETS GRAPHIC MODULES ================= */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-black text-white tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                VISUAL_PRODUCTION_OUTPUT // COMPILED_LOG_CAPTURES
              </h3>
              
              <div className="space-y-8">
                {project.images.map((item, index) => {
                  const type = getType(item);
                  const isMedia = type === 'youtube' || type === 'gdrive' || type === 'video';
                  return (
                    <div
                      key={index}
                      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#040406] p-2 hover:border-white/30 transition-all duration-300 ${theme.glow} ${
                        isMedia ? 'aspect-video' : ''
                      }`}
                    >
                      <span className="absolute top-4 left-4 font-mono text-[9px] text-slate-300 z-20 bg-black/80 px-2.5 py-0.5 rounded border border-white/10 font-bold tracking-wider shadow-md">
                        SYS_CAPTURE_0{index + 1} // OPERATIONAL_RECORD
                      </span>

                      {isMedia ? (
                        <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                          <MediaItem item={item} alt={`${project.title} asset media ${index + 1}`} />
                        </div>
                      ) : (
                        <img
                          src={item}
                          alt={`${project.title} output screenshot ${index + 1}`}
                          className="w-full h-auto rounded-lg object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;