import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Truck } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-slate-950" />,
    title: "+5 Anos de Experiência",
    description: "Know-how consolidado em rotas complexas e cargas sensíveis, garantindo a integridade do seu produto."
  },
  {
    icon: <MapPin className="w-8 h-8 text-slate-950" />,
    title: "Base em Jaú/SP",
    description: "Localização estratégica no interior de São Paulo, facilitando o escoamento para portos e grandes centros."
  },
  {
    icon: <Truck className="w-8 h-8 text-slate-950" />,
    title: "Frota Moderna",
    description: "Veículos revisados e equipados com alta tecnologia de rastreamento e telemetria."
  }
];

const MotionDiv = motion.div as any;

export const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-slate-950 relative border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900 border border-white/10 p-8 rounded-sm hover:border-yellow-600/50 transition-colors group shadow-2xl shadow-black/50"
            >
              <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm shadow-lg shadow-yellow-600/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};