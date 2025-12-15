import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
      {/* Industrial Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-950 p-8 md:p-12 rounded-sm shadow-2xl shadow-black/40 border border-yellow-400/20">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              PRONTO PARA OTIMIZAR SUA LOGÍSTICA?
            </h2>
            <p className="text-slate-300 text-lg">
              Solicite uma cotação agora mesmo e descubra como a <span className="text-yellow-500 font-bold">LFM Transportes</span> pode trazer mais eficiência e segurança para sua carga.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button 
              href="https://wa.me/5514991851871?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20de%20transporte." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-950 hover:bg-slate-200 shadow-none border-none text-base px-10 py-4"
            >
              Solicitar Cotação
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};