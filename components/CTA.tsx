
import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Casting motion.div to any to resolve property 'initial' does not exist errors
const MotionDiv = motion.div as any;

export const CTA: React.FC = () => {
  return (
    <section className="py-14 md:py-20 relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
      {/* Industrial Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-950 p-7 md:p-14 rounded-sm shadow-2xl shadow-black/40 border border-yellow-400/20"
        >
          
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4 leading-tight uppercase">
              PRONTO PARA OTIMIZAR <br className="hidden md:block" /> SUA LOGÍSTICA?
            </h2>
            <p className="text-slate-400 text-xs md:text-lg leading-relaxed">
              Solicite uma cotação agora mesmo e descubra como a <span className="text-yellow-500 font-bold">LFM Transportes</span> pode trazer mais eficiência e segurança para sua carga.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <MotionDiv
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ 
                scale: 0.95,
                transition: { type: "spring", stiffness: 500, damping: 15 } 
              }}
              className="w-full md:w-auto"
            >
              <Button 
                href="https://wa.me/5514991851871?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20transporte." 
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                className="bg-white text-slate-950 hover:bg-white hover:text-slate-950 shadow-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] border-none text-sm md:text-base px-8 md:px-10 py-4 md:py-5 transition-all duration-300"
              >
                Solicitar Cotação
                <ArrowRight className="w-5 h-5" />
              </Button>
            </MotionDiv>
          </div>

        </MotionDiv>
      </div>
    </section>
  );
};
