
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { MessageCircle, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

function App() {
  const [showWaMenu, setShowWaMenu] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 antialiased selection:bg-yellow-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating Multi-Agent WhatsApp Widget */}
      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {showWaMenu && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-4 mb-4 w-[280px] md:w-72 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                <span className="font-bold text-xs text-yellow-500 uppercase tracking-widest">Atendimento Direto</span>
                <button 
                  onClick={() => setShowWaMenu(false)} 
                  className="text-slate-500 hover:text-white p-1"
                  aria-label="Fechar atendimento"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/5514991851871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 hover:bg-yellow-600 hover:text-slate-950 rounded-lg transition-all group active:scale-[0.98]"
                >
                  <div className="p-2 bg-yellow-500 rounded-full group-hover:bg-slate-950 group-hover:text-yellow-500 transition-colors">
                    <User size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-60">WhatsApp Unid. 1</span>
                    <span className="text-sm font-bold">(14) 99185-1871</span>
                  </div>
                </a>
                <a 
                  href="https://wa.me/5514981095496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 hover:bg-yellow-600 hover:text-slate-950 rounded-lg transition-all group active:scale-[0.98]"
                >
                  <div className="p-2 bg-yellow-500 rounded-full group-hover:bg-slate-950 group-hover:text-yellow-500 transition-colors">
                    <User size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-60">WhatsApp Unid. 2</span>
                    <span className="text-sm font-bold">(14) 98109-5496</span>
                  </div>
                </a>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setShowWaMenu(!showWaMenu)}
          className={`p-4 md:p-5 rounded-full shadow-2xl text-white transition-all transform hover:scale-105 active:scale-90 flex items-center gap-2 relative ${showWaMenu ? 'bg-slate-800' : 'bg-[#25D366]'}`}
          aria-label={showWaMenu ? "Fechar opções" : "Iniciar conversa via WhatsApp"}
        >
          {showWaMenu ? <X size={26} /> : <MessageCircle size={26} fill="currentColor" />}
          {!showWaMenu && (
            <span className="hidden sm:block font-bold pr-1 text-sm md:text-base">Cotação Rápida</span>
          )}
          
          {/* Subtle Notification Dot */}
          {!showWaMenu && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
