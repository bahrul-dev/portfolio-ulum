import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const getType = (item) => {
  if (!item) return 'unknown';
  if (typeof item === 'object' && item.type === 'youtube') return 'youtube';
  if (typeof item === 'object' && item.type === 'gdrive') return 'gdrive';
  if (typeof item === 'string' && /\.(mp4|webm)$/i.test(item)) return 'video';
  return 'image';
};

const PlayButton = ({ url, label }) => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#000000]">
    {/* Grid Scanline Overlay Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-size-[100%_4px] opacity-30 z-0" />
    
    <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6 font-mono">
      {/* High-Contrast Interactive Cyber Launch Disc */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-black border-2 border-[#00f0ff] hover:border-[#00ffcc] flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,204,0.5)] transition-all hover:scale-105 group/play"
      >
        <svg className="w-6 h-6 text-[#00f0ff] group-hover:text-[#00ffcc] ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </a>
      
      <div>
        <p className="text-white font-black text-sm tracking-tight">{label || 'INITIALIZE_MEDIA_STREAM'}</p>
        <p className="text-slate-400 text-3xs mt-1 tracking-widest">// SECURE_LINK: GOOGLE_DRIVE_STORAGE</p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xs text-[#00f0ff] hover:text-white font-bold tracking-wider uppercase border border-[#00f0ff]/20 px-3 py-1 bg-[#00f0ff]/5 rounded hover:bg-[#00f0ff]/10 transition-all"
      >
        EXECUTE RUNTIME DETACHED →
      </a>
    </div>
  </div>
);

export const MediaItem = ({ item, alt }) => {
  const type = getType(item);

  if (type === 'youtube') {
    return (
      <iframe
        src={item.url}
        title={alt}
        className="w-full h-full bg-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
      />
    );
  }

  if (type === 'gdrive') {
    const openUrl = item.url.replace('/preview', '/view');
    return <PlayButton url={openUrl} label={item.label} />;
  }

  if (type === 'video') {
    return (
      <video src={item} controls className="w-full h-full object-cover bg-black" />
    );
  }

  return (
    <img src={item} alt={alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
  );
};

const ImageSlider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full h-86 rounded-xl overflow-hidden border border-white/10 bg-black relative">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 pointer-events-none" />
        <MediaItem item={images[0]} alt={title} />
      </div>
    );
  }

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  const isVideo = (item) => {
    const t = getType(item);
    return t === 'youtube' || t === 'gdrive' || t === 'video';
  };

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden border border-white/10 bg-black group shadow-2xl">
      
      {/* Structural Wireframe Corner Crosses */}
      <span className="absolute top-2 left-2 font-mono text-[9px] text-slate-700 pointer-events-none z-20">+</span >
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-slate-700 pointer-events-none z-20">+</span >

      {/* Slide Core Viewer Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <MediaItem item={images[current]} alt={`${title} matrix asset ${current + 1}`} />
        </motion.div>
      </AnimatePresence>

      {/* TACTICAL ARROW CONTROLS (Bracketed Interface Buttons) */}
      <button
        onClick={prev}
        aria-label="Previous System Buffer"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white hover:text-[#00ffcc] w-10 h-10 border border-white/10 hover:border-[#00ffcc]/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 font-mono text-sm cursor-pointer shadow-lg"
      >
        [
      </button>

      <button
        onClick={next}
        aria-label="Next System Buffer"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white hover:text-[#00ffcc] w-10 h-10 border border-white/10 hover:border-[#00ffcc]/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 font-mono text-sm cursor-pointer shadow-lg"
      >
        ]
      </button>

      {/* BINARY STEP INDICATORS (Clean Linear Dashes Over Circles) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Route to stream asset ${i + 1}`}
            className={`h-1 rounded-sm transition-all duration-300 cursor-pointer ${
              i === current
                ? 'bg-[#00f0ff] w-6 shadow-[0_0_8px_#00f0ff]'
                : 'bg-white/20 hover:bg-white/40 w-3'
            }`}
          />
        ))}
      </div>

      {/* HARD CONTRAS METADATA TRACK BADGES */}
      <div className="absolute top-4 right-4 flex gap-2 z-20 font-mono text-[10px] font-bold">
        {isVideo(images[current]) && (
          <span className="bg-red-500/10 text-red-400 px-2.5 py-1 rounded border border-red-500/30 tracking-widest uppercase shadow-sm">
            STREAM: VIDEO
          </span>
        )}
        <span className="bg-white/5 text-slate-300 px-2.5 py-1 rounded border border-white/10 tracking-wider">
          BUFFER_INDEX: {String(current + 1).padStart(2, '0')} // {String(images.length).padStart(2, '0')}
        </span>
      </div>

    </div>
  );
};

export default ImageSlider;