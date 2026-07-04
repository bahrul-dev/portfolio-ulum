import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail'; // Kita akan buat file ini setelah ini

// Komponen pembungkus untuk Halaman Utama
const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </>
);

// Fitur agar saat pindah halaman, layar otomatis mulai dari atas
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-emerald-500/30 selection:text-emerald-200 text-slate-50 font-sans">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Home />} />
          
          {/* Halaman Detail Proyek (ID dinamis) */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;