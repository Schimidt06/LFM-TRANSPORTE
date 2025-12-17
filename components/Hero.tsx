
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

const premiumEase = [0.22, 1, 0.36, 1];

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594386629986-189f78326793?q=80&w=2070&auto=format&fit=crop")',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-10"></div>
      
      <div className="container mx-auto px-5 md:px-6 z-20 pt-12 md:pt-20">
        <div className="max-w-4xl">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: premiumEase }}
            className="flex flex-wrap gap-2 mb-5 md:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-yellow-600/30 rounded-full bg-yellow-900/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-yellow-500 text-[9px] md:text-sm font-black tracking-[0.2em] uppercase">+10 ANOS DE EXPERIÊNCIA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-blue-500/30 rounded-full bg-blue-900/10 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-[9px] md:text-sm font-black tracking-[0.2em] uppercase">SASCAR</span>
            </div>
          </MotionDiv>

          <MotionH1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
            className="text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight"
          >
            LOGÍSTICA <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 block sm:inline">
              DE ALTO IMPACTO
            </span>
          </MotionH1>

          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
            className="text-sm md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-10 leading-relaxed font-light border-l-2 md:border-l-4 border-yellow-500 pl-4 md:pl-8"
          >
            Operação graneleira e tanque com <strong className="text-white">10 caminhões próprios</strong> rastreados via satélite. Especialistas nas rotas estratégicas do <strong className="text-white">Centro-Oeste e Norte</strong>.
          </MotionP>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
            className="flex flex-col sm:flex-row gap-3 md:gap-5"
          >
            <Button 
              href="https://wa.me/5514991851871" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-lg px-6 md:px-10 py-4 md:py-5"
            >
              <MessageSquare className="w-5 h-5" />
              Solicitar Frete
            </Button>
            
            <Button 
              href="#servicos" 
              variant="outline"
              className="px-6 md:px-10 py-4 md:py-5 text-xs md:text-base"
            >
              Nossa Operação
              <ChevronRight className="w-5 h-5" />
            </Button>
          </MotionDiv>
        </div>
      </div>

      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ delay: 0.8, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-600">Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </MotionDiv>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};
