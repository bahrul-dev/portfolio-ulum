import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Skill categories highlighted via ultra-vibrant neon spectrums
  const specializations = [
    { text: '#Web_Scraping', color: 'from-[#00ffcc] to-[#00f0ff]' },
    { text: '#AI_Automation', color: 'from-[#00f0ff] to-[#3b82f6]' },
    { text: '#Data_Architecture', color: 'from-[#3b82f6] to-[#6366f1]' }
  ];

  const [specIndex, setSpecIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpecIndex((prev) => (prev + 1) % specializations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 bg-[#000000]" id="home">
      
      {/* SHARP CHROMATIC BACKGROUND LIGHT ANCHORS */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-150 h-150 rounded-full bg-blue-600/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-125 h-125 rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none"></div>

      {/* ====== INTEGRATED IDE DATA HIGHWAY CIRCUITS ====== */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="integratedRouterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="40%" stopColor="#00f0ff" />
              <stop offset="75%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* 1. TOP GUIDE RAIL */}
          <path d="M 0,90 L 1440,90" stroke="url(#integratedRouterGrad)" strokeWidth="0.5" opacity="0.3" />
          <text x="40" y="80" fill="#00ffcc" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.5">// CLIENT_CONNECTION_ESTABLISHED</text>

          {/* 2. THE MAIN PIPELINE HIGHWAY (Thicker, High-Contrast Neon Routing) */}
          <path 
            d="M 60,120 L 60,540 L 450,540 L 580,670 L 960,670 L 1080,550 L 1080,240 L 1380,240" 
            stroke="url(#integratedRouterGrad)" strokeWidth="1.5" opacity="0.2" fill="none" 
          />
          
          {/* High-Contrast Fast Moving Laser Core Pulse */}
          <motion.path 
            d="M 60,120 L 60,540 L 450,540 L 580,670 L 960,670 L 1080,550 L 1080,240 L 1380,240" 
            stroke="#00f0ff" strokeWidth="3.5" fill="none" strokeDasharray="60 240"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(0,240,255,0.8))" }}
            animate={{ strokeDashoffset: [0, -600] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* 3. SUB-BRANCHES FILE TREE (LEFT PANEL SOURCE) */}
          <g>
            <path d="M 60,200 L 120,200 M 60,280 L 160,280 L 160,370 M 160,325 L 220,325 M 160,370 L 220,370" stroke="url(#integratedRouterGrad)" strokeWidth="1.5" opacity="0.3" fill="none" />
            <text x="50" y="145" fill="#00ffcc" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.9">WORKSPACE // bahrul_sys</text>
            <text x="135" y="204" fill="#94a3b8" fontSize="10" fontFamily="monospace" opacity="0.6">├── apps/</text>
            <text x="175" y="329" fill="#00f0ff" fontSize="10" fontFamily="monospace" opacity="0.8">├── <tspan fill="#ffffff">aidiskusi.my.id</tspan></text>
            <text x="175" y="374" fill="#94a3b8" fontSize="10" fontFamily="monospace" opacity="0.6">└── index.html</text>
          </g>

          {/* 4. SUB-BRANCHES OUTPUT REGISTRY (RIGHT PANEL PRODUCTION) */}
          <g>
            <path d="M 1080,330 L 1160,330 M 1080,420 L 1180,420 L 1180,500 M 1180,460 L 1240,460 M 1180,500 L 1240,500" stroke="url(#integratedRouterGrad)" strokeWidth="1.5" opacity="0.3" fill="none" />
            <text x="1095" y="225" fill="#3b82f6" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.8">LIVE_STREAM // compiled</text>
            <text x="1110" y="334" fill="#94a3b8" fontSize="10" fontFamily="monospace" opacity="0.6">├── build_log.txt</text>
            <text x="1110" y="424" fill="#94a3b8" fontSize="10" fontFamily="monospace" opacity="0.6">└── out/</text>
            <text x="1255" y="464" fill="#00ffcc" fontSize="10" fontFamily="monospace" opacity="0.7">├── <tspan fill="#ffffff">scraper_engine.py</tspan></text>
            <text x="1255" y="504" fill="#3b82f6" fontSize="10" fontFamily="monospace" opacity="0.7">└── <tspan fill="#ffffff">database.env</tspan></text>
          </g>

          {/* INTERSECTING ANCHOR HIGH-VISIBILITY NODES */}
          <text x="55" y="544" fill="#00ffcc" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>
          <text x="445" y="544" fill="#00f0ff" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>
          <text x="575" y="674" fill="#3b82f6" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>
          <text x="955" y="674" fill="#00ffcc" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>
          <text x="1075" y="554" fill="#00f0ff" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>
          <text x="1075" y="244" fill="#3b82f6" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.9">+</text>

          {/* Real-time Glowing Router Signal Targets */}
          <rect x="448" y="538" width="5" height="5" fill="#00ffcc" className="animate-ping" />
          <rect x="958" y="666" width="5" height="5" fill="#00f0ff" className="animate-ping" />
        </svg>
      </div>

      {/* MINIMALIST STICKY NAVIGATION HEADER */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-[#000000]/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-tight text-white">
            BAHRUL<span className="text-cyan-400">.sys</span>
          </div>
          <div className="flex items-center gap-8 font-mono text-xs text-slate-300 font-semibold tracking-wider">
            <a href="#home" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-28 lg:mt-12">
        
        {/* LEFT COLUMN: CRITICAL CORE CONTENT WITH HIGH VISIBILITY */}
        <motion.div className="text-left" variants={containerVariants} initial="hidden" animate="visible">
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-md mb-8 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
            <span className="text-xs font-mono text-slate-200 font-bold tracking-wider uppercase">System Operator Active</span>
          </motion.div>

          {/* VIBRANT GLOWING SPECTRUM TYPOGRAPHY */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white leading-none">
              Hi, I'm <br/>
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#00ffcc] via-[#00f0ff] to-[#6366f1] font-black drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]"
              >
                Bahrul Ulum
              </motion.span>
            </h1>
          </motion.div>
          
          {/* SPINNING NEON SPEC TICKER */}
          <motion.div variants={itemVariants} className="h-12 overflow-hidden mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={specIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`text-2xl md:text-3xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-linear-to-r ${specializations[specIndex].color} drop-shadow-[0_0_10px_rgba(0,240,255,0.2)]`}
              >
                {specializations[specIndex].text}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-slate-200 text-lg max-w-xl mb-10 leading-relaxed font-normal">
              I architect beautiful data solutions. Using Python and AI pipelines to transform chaos, messy sites, and PDFs into highly structured, premium business databases at <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f0ff] to-[#3b82f6] font-extrabold shadow-sm">10x enterprise speeds.</span>
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a href="mailto:ulumarbalas6@gmail.com" className="px-8 py-4 w-full sm:w-auto rounded-xl bg-linear-to-r from-[#00ffcc] via-[#00f0ff] to-[#3b82f6] text-slate-950 font-black text-lg text-center hover:scale-[1.03] transition-all shadow-[0_0_35px_rgba(0,240,255,0.4)] tracking-wide">
              Build My Pipeline
            </a>
            <a href="/CV_Mukhamad_Bahrul_Ulum.pdf" download="CV_Mukhamad_Bahrul_Ulum.pdf" className="px-8 py-4 w-full sm:w-auto rounded-xl bg-slate-950 border border-white/20 text-white font-bold text-lg text-center backdrop-blur-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
              📂 Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: FLOATING AVATAR POD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center mt-16 lg:mt-0"
        >
          <div className="relative w-80 h-80 md:w-112.5 md:h-112.5 flex items-end justify-center">
            
            {/* Geometric Orbit Path Rings */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="225" cy="225" r="180" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 6" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} />
              <motion.circle cx="225" cy="225" r="140" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="4 8" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} />
            </svg>

            {/* Premium Matte Circular Backing Panel */}
            <div className="absolute bottom-0 w-72 h-72 md:w-96 md:h-96 bg-slate-950/20 border-2 border-white/10 rounded-full backdrop-blur-xs shadow-2xl z-0"></div>

            {/* FLOATING AVATAR POD WITH MATTE PARABOLIC CLIP */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10 w-[78%] flex flex-col items-center justify-end overflow-visible"
              style={{ bottom: '-10px' }}
            >
              <img 
                src="/profile-transparent.png" 
                alt="Mukhamad Bahrul Ulum" 
                className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,240,255,0.3)] filter contrast-102 relative z-10" 
                style={{
                  clipPath: 'inset(0% 0% 0% 0% round 0% 0% 120px 120px)'
                }}
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;