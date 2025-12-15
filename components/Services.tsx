import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Droplets, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Transporte Graneleiro",
    icon: <Wheat className="w-12 h-12 text-yellow-500" />,
    features: ["Grãos (Soja, Milho, Café)", "Fertilizantes", "Açúcar a granel"],
    description: "Logística eficiente para o agronegócio, com implementos adequados para evitar perdas e contaminações.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Transporte Tanque",
    icon: <Droplets className="w-12 h-12 text-yellow-500" />,
    features: ["Líquidos alimentícios", "Óleos vegetais", "Combustíveis e Etanol"],
    description: "Tanques em inox, rigorosamente higienizados e com motoristas certificados MOPP.",
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2070&auto=format&fit=crop"
  }
];

const MotionSpan = motion.span as any;
const MotionH2 = motion.h2 as any;
const MotionDiv = motion.div as any;

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-950 relative">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MotionSpan 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm"
          >
            O que fazemos
          </MotionSpan>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mt-2"
          >
            NOSSOS SERVIÇOS
          </MotionH2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[500px] overflow-hidden rounded-sm border border-white/10"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 opacity-90 group-hover:opacity-80 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                   {service.icon}
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 border-l-2 border-yellow-600 pl-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="w-full h-[1px] bg-white/10 group-hover:bg-yellow-500/50 transition-colors"></div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};