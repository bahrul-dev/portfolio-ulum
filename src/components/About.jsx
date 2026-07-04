import React from 'react';
import { motion } from 'framer-motion'; // FIXED: Correct library import

const About = () => {
  // Corporate capabilities aligned with high-performance metrics
  const corporateCapabilities = [
    { 
      id: '01', 
      title: 'Autonomous Data Extraction', 
      tag: 'SCRAPING_ENGINE',
      status: 'LOG_STREAM: ACTIVE',
      desc: 'Architecting resilient web scraping frameworks capable of bypassing modern protection layers in real-time to harvest massive datasets with absolute data integrity.' 
    },
    { 
      id: '02', 
      title: 'Intelligent Processing Pipelines', 
      tag: 'AI_AUTOMATION',
      status: 'PARSER_CORE: IDLE_READY',
      desc: 'Integrating artificial intelligence into execution workflows to parse, summarize, and convert unformatted chaotic documents into high-value, structured databases.' 
    },
    { 
      id: '03', 
      title: 'Efficiency & Business Logic', 
      tag: 'BUSINESS_LOGIC',
      status: 'OPEX_SYS: OPTIMIZED',
      desc: 'Bridging software engineering with a deep understanding of corporate administration to ensure every automation system directly reduces operational costs.' 
    }
  ];

  const panelContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const panelItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full py-32 px-6 bg-[#000000] border-t border-white/5 overflow-hidden" id="about">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* MAIN EXECUTIVE SUMMARY HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">Operational Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              Engineering Data Automation <br />
              {/* FIXED: Changed to bg-linear-to-r as suggested by Tailwind v4 lint */}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ffcc] via-[#00f0ff] to-[#3b82f6] drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                Driving Operational Efficiency
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-slate-200 text-lg font-light leading-relaxed border-l-2 border-white/10 pl-8 relative">
              {/* FIXED: Changed left-[-2px] to -left-0.5 as suggested by Tailwind v4 lint */}
              <span className="absolute -left-0.5 top-0 h-10 w-0.5 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
              I bridge the gap between software engineering and business analysis. My core focus is <strong className="text-white font-black">designing autonomous data automation infrastructures</strong> that eliminate repetitive, manual bottlenecks. I do not merely write scripts—I build structured data pipelines that convert chaotic web environments into precise, clean data ready for management, accelerating operational execution and <strong className="text-[#00ffcc] font-bold">optimizing cost efficiency</strong>.
            </p>
          </div>
        </div>

        {/* ================= DATA ROUTING HIGHWAY (Aligned Circuit Divider) ================= */}
        <div className="w-full h-12 mb-12 relative hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 1152 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aboutCircuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffcc" />
                <stop offset="50%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Static Structural Rails */}
            <path d="M 0,16 L 384,16 L 408,36 L 744,36 L 768,16 L 1152,16" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
            
            {/* COMPONENT STREAM BEAM: Thick high-contrast moving laser pulse */}
            <motion.path
              d="M 0,16 L 384,16 L 408,36 L 744,36 L 768,16 L 1152,16"
              stroke="url(#aboutCircuitGrad)"
              strokeWidth="3.5"
              fill="none"
              strokeDasharray="140 280"
              style={{ filter: "drop-shadow(0px 0px 8px rgba(0,240,255,0.8))" }}
              animate={{ strokeDashoffset: [0, -840] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Matrix Architecture Anchors */}
            <circle cx="384" cy="16" r="3.5" fill="#00ffcc" />
            <circle cx="768" cy="16" r="3.5" fill="#3b82f6" />
          </svg>
          {/* FIXED: Changed top-[-8px] to -top-2 as suggested by Tailwind v4 lint */}
          <div className="absolute -top-2 left-2 font-mono text-[9px] text-slate-500 tracking-wider">// INFRASTRUCTURE_BUS_CONDUIT</div>
        </div>

        {/* BENTO GRID: STRUCTURED ARCHITECTURE SHAPES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-24">
          
          {corporateCapabilities.map((capability, i) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative p-6 bg-[#040406] border border-white/10 rounded-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between min-h-80 hover:shadow-[0_0_35px_rgba(0,240,255,0.1)]"
            >
              {/* Technical Wireframe Siku Accents (+) */}
              <span className="absolute -top-1 -left-1 font-mono text-[10px] text-slate-800 pointer-events-none group-hover:text-cyan-400/40 transition-colors">+</span >
              <span className="absolute -bottom-2 -right-1 font-mono text-[10px] text-slate-800 pointer-events-none group-hover:text-cyan-400/40 transition-colors">+</span >

              <div>
                {/* Micro Document Index Header */}
                <div className="flex items-center justify-between mb-8 font-mono">
                  <span className="text-xs text-slate-400 font-bold tracking-wider">[{capability.id}]</span>
                  <span className="text-[10px] text-cyan-400 font-black tracking-widest bg-white/5 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    {capability.tag}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00ffcc] transition-colors tracking-tight">
                  {capability.title}
                </h3>

                {/* Capability Description */}
                <p className="text-slate-200 text-xs font-normal leading-relaxed">
                  {capability.desc}
                </p>
              </div>

              {/* Real-time Subsystem Status Stream Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                <span className="text-slate-500">// CAPABILITY_NODE</span>
                <span className="text-amber-400 font-bold group-hover:text-emerald-400 transition-colors animate-pulse">
                  {capability.status}
                </span>
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* ====== TELEMETRIC DATA PACKET DOCK PANEL ====== */}
        <motion.div 
          variants={panelContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center overflow-hidden"
        >
          {/* MTRK 01: WORK EFFICIENCY */}
          <motion.div variants={panelItemVariants} className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Work Efficiency</div>
            <motion.div 
              className="text-lg font-black text-cyan-400 tracking-tight"
              style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.4))" }}
            >
              Zero Manual Overhead
            </motion.div>
          </motion.div>

          {/* MTRK 02: TARGET SCALE */}
          <motion.div variants={panelItemVariants} className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Scale</div>
            <div className="text-lg font-black text-white tracking-tight">
              Enterprise Business
            </div>
          </motion.div>

          {/* MTRK 03: DATA INTEGRITY */}
          <motion.div variants={panelItemVariants} className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data Integrity</div>
            <div className="text-lg font-black text-white tracking-tight">
              100% Validated Integrity
            </div>
          </motion.div>

          {/* MTRK 04: EXECUTION SYSTEM */}
          <motion.div variants={panelItemVariants} className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Execution System</div>
            <motion.div 
              className="text-lg font-black text-blue-400 tracking-tight"
              style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.4))" }}
            >
              Fully Autonomous Core
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;