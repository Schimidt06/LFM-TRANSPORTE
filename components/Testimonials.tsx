import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Gestor de Logística | AgroCorp",
    content: "A LFM transformou nossa operação de escoamento de safra. A pontualidade e a comunicação dos motoristas são diferenciais que não encontramos em outras transportadoras.",
    stars: 5
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Diretor | Usina Santa Fé",
    content: "Parceiros confiáveis para transporte de líquidos. A frota é impecável e seguem rigorosamente as normas de segurança. Recomendo de olhos fechados.",
    stars: 5
  },
  {
    id: 3,
    name: "Ana Paula Souza",
    role: "Compradora | Fertilizantes SP",
    content: "Agilidade na cotação e eficiência na entrega. Ter uma base estratégica em Jaú facilita muito nossa logística regional. Excelente atendimento.",
    stars: 5
  }
];

const MotionDiv = motion.div as any;

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(234,179,8,0.2) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            O QUE NOSSOS PARCEIROS DIZEM
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-sm relative hover:border-yellow-600/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-yellow-600/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{item.content}"
              </p>

              <div>
                <h4 className="text-white font-bold font-display tracking-wide">{item.name}</h4>
                <p className="text-yellow-500/80 text-xs uppercase tracking-wider font-semibold">{item.role}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};