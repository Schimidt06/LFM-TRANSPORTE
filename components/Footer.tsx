import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-950 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content Grid (Includes Contact Section) */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex flex-col">
                <h2 className="text-3xl font-display font-bold italic tracking-tighter text-white leading-none">
                  LFM
                </h2>
                <div className="bg-gradient-to-r from-yellow-600 to-transparent h-[2px] w-12 mt-1"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-500 mt-2">TRANSPORTES</span>
              </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Excelência e segurança no transporte rodoviário de cargas. Sua parceira logística de confiança em todo o Brasil.
            </p>
          </div>

          {/* Contact Highlight Section */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-bold text-xl">Fale Conosco</h3>
            <div className="space-y-4">
              {/* Phone 1 */}
              <a 
                href="https://wa.me/5514991851871" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-500 group-hover:text-slate-950" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase tracking-wide">WhatsApp</span>
                  <span className="text-white font-semibold text-lg hover:text-yellow-500 transition-colors">
                    (14) 99185-1871
                  </span>
                </div>
              </a>

              {/* Phone 2 */}
              <a 
                href="https://wa.me/5514981095496" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-500 group-hover:text-slate-950" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase tracking-wide">Comercial / Operacional</span>
                  <span className="text-white font-semibold text-lg hover:text-yellow-500 transition-colors">
                    (14) 98109-5496
                  </span>
                </div>
              </a>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-white/5 rounded-full">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase tracking-wide">Localização</span>
                  <span className="text-slate-300 text-sm">Jaú, São Paulo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col justify-end items-start md:items-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-500 hover:text-yellow-500 transition-colors text-sm uppercase font-bold tracking-widest group"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </MotionDiv>

        {/* Bottom Bar (Copyright Section) */}
        <MotionDiv 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600"
        >
          <p>&copy; {new Date().getFullYear()} LFM Transportes. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></span>
            <p>Desenvolvido com tecnologia de ponta.</p>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
};