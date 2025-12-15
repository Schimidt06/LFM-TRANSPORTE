import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { MessageSquare, ChevronRight } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594386629986-189f78326793?q=80&w=2070&auto=format&fit=crop")',
        }}
      ></div>

      {/* Heavy Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-10"></div>
      
      {/* Mesh Pattern Overlay for Texture */}
      <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-4xl">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-yellow-600/30 rounded-full bg-yellow-900/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-widest uppercase">Referência em Transporte</span>
            </div>
          </MotionDiv>

          <MotionH1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            SOLUÇÕES EM TRANSPORTE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
              GRANELEIRO E TANQUE
            </span>
          </MotionH1>

          <MotionP 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-light border-l-2 border-yellow-600 pl-6"
          >
            Segurança, pontualidade e eficiência partindo da nossa base estratégica em <strong className="text-white">Jaú/SP</strong> para todo o território nacional.
          </MotionP>

          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              href="https://wa.me/5514991851871" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
            
            <Button 
              href="#servicos" 
              variant="outline"
            >
              Nossos Serviços
              <ChevronRight className="w-5 h-5" />
            </Button>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Deslize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>
      </MotionDiv>
    </section>
  );
};