
import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Droplets, Cog } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Transporte Graneleiro",
    icon: <Wheat className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
    specs: "Bitrens e Rodotrens",
    features: ["Grãos (Soja, Milho, Café)", "Fertilizantes", "Lonas Reforçadas"],
    description: "Operação focada em grandes volumes com escoamento direto de fazendas e armazéns. Equipamentos novos que garantem a integridade da carga.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Transporte Tanque",
    icon: <Droplets className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
    specs: "Inox Alimentício",
    features: ["Líquidos alimentícios", "Óleos vegetais", "Limpeza Certificada"],
    description: "Especialistas em carga líquida. Tanques em aço inox com rigoroso controle sanitário e térmico, monitorados 24h via telemetria.",
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2070&auto=format&fit=crop"
  }
];

// Use any casting for motion components to resolve type issues with custom easing arrays
const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;
const MotionH2 = motion.h2 as any;

const premiumEase = [0.22, 1, 0.36, 1];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <MotionSpan 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm"
          >
            Capacidade Operacional
          </MotionSpan>
          <MotionH2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mt-2"
          >
            NOSSA FROTA PRÓPRIA
          </MotionH2>
          <div className="w-16 md:w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: premiumEase }}
              className="group relative flex flex-col h-full bg-slate-900 border border-white/5 rounded-sm overflow-hidden"
            >
              {/* Image Header */}
              <div className="h-48 md:h-64 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-slate-950 px-2.5 py-1 font-black text-[9px] md:text-[10px] uppercase tracking-widest rounded-sm">
                  100% Sascar Tracking
                </div>
              </div>

              <div className="p-6 md:p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="p-2.5 md:p-3 bg-white/5 rounded-sm text-yellow-500 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <span className="text-yellow-600 text-[10px] font-black uppercase tracking-[0.15em]">{service.specs}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Cog size={14} className="text-yellow-600" /> Diferenciais Técnicos
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-500 border-l border-yellow-600/30 pl-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
