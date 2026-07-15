import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative w-full py-32 px-6 bg-[#000000] border-t border-white/5 overflow-hidden" id="contact">
      
      {/* SHARP CHROMATIC BACKGROUND LIGHT OVERLAYS */}
      <div className="absolute top-[-20%] left-[-10%] w-140 h-140 rounded-full bg-linear-to-br from-cyan-500/5 via-blue-600/0 to-transparent blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-120 h-120 rounded-full bg-linear-to-tl from-indigo-500/5 via-purple-600/0 to-transparent blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* SECURE TERMINAL HEADER TAG */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/20 mb-6 font-mono text-xs text-[#00ffcc] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-ping"></span>
            SYSTEM ENDPOINT: UPLINK READY
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Establish Secure <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00ffcc] via-[#00f0ff] to-[#3b82f6] drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">Connection</span>
          </h2>
          
          <p className="text-slate-200 text-base md:text-lg mb-14 font-normal leading-relaxed max-w-2xl mx-auto">
            Stop wasting hours on manual business processes. Whether you require resilient automated data extraction pipelines, intelligent document parsers, or custom architecture integrations, I am ready to deploy solutions at enterprise scale.
          </p>

          {/* ================= TERMINAL UPLINK CIRCUIT (Active Running Laser Line) ================= */}
          <div className="w-full h-8 mb-12 relative hidden sm:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="16" x2="100%" y2="16" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <motion.line
                x1="0" y1="16" x2="100%" y2="16"
                stroke="url(#contactLaserGrad)"
                strokeWidth="3.5"
                strokeDasharray="140 280"
                style={{ filter: "drop-shadow(0px 0px 8px #00f0ff)" }}
                animate={{ strokeDashoffset: [0, -840] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <circle cx="50%" cy="16" r="3.5" fill="#00f0ff" />
              <defs>
                <linearGradient id="contactLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffcc" />
                  <stop offset="50%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-slate-500 tracking-widest">// SECURE_CHANNEL_ROUTING_BUS</div>
          </div>

          {/* HIGH-GLOW INTERACTION COMMUNICATION CORES */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 font-mono">
            {/* EMAIL INTERFACE NODE */}
            <motion.a 
              href="mailto:ulumarbalas6@gmail.com" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-start px-6 py-4 rounded-xl bg-black border-2 border-white/10 hover:border-white text-white transition-all duration-300 text-left min-w-xs group shadow-lg"
            >
              <span className="text-[10px] text-slate-500 font-bold mb-1 tracking-wider">PROTOCOL // SMTP_MAIL</span>
              <span className="text-sm font-black text-white mb-2">INITIALIZE EMAIL UPLINK</span>
              <span className="text-3xs text-[#00f0ff] group-hover:text-white transition-colors">ulumarbalas6@gmail.com →</span>
            </motion.a>
            
            {/* WHATSAPP INTERFACE NODE */}
            <motion.a 
              href="https://wa.me/6285865087073" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,204,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-start px-6 py-4 rounded-xl bg-linear-to-r from-[#00ffcc] to-[#00f0ff] text-slate-950 transition-all duration-300 text-left min-w-xs group shadow-xl"
            >
              <span className="text-[10px] text-slate-900/60 font-bold mb-1 tracking-wider">SECURE_TUNNEL // WA_API</span>
              <span className="text-sm font-black text-slate-950 mb-2">SECURE WHATSAPP CHANNEL</span>
              <span className="text-3xs text-slate-900 font-bold uppercase tracking-widest">CONNECT_LIVE_OPERATOR →</span>
            </motion.a>
          </div>
        </motion.div>

        {/* ================= HIGH-CONTRAST SYSTEM COMPLIANCE FOOTER ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300 font-mono text-xs tracking-wide"
        >
          <p className="font-bold">© 2026 Mukhamad Bahrul Ulum. All rights reserved.</p>
          
          <div className="flex items-center gap-6 font-black text-[11px]">
            <a href="https://www.linkedin.com/in/mukhamad-bahrul-ulum/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00f0ff] transition-colors">LINKEDIN</a>
            <a href="https://www.upwork.com/freelancers/~0110b32e81ea9c1e4c?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ffcc] transition-colors">UPWORK</a>
            <a href="https://github.com/bahrul-dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#3b82f6] transition-colors">GITHUB</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;