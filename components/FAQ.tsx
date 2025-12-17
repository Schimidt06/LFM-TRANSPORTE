
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Quais regiões a LFM Transportes atende?",
    answer: "Atendemos com excelência as rotas estratégicas do Centro-Oeste (MT, MS, GO) e Norte (PA, TO, RO). Nossa base em Jaú/SP também nos permite realizar operações logísticas integradas em todo o estado de São Paulo e Minas Gerais."
  },
  {
    question: "Como funciona o monitoramento via satélite?",
    answer: "Utilizamos a tecnologia Sascar Satelital em 100% da frota. Isso garante que, mesmo em áreas sem cobertura de celular (comum em rodovias remotas), nossa central receba dados de localização, velocidade e alertas de segurança em tempo real, sem interrupções."
  },
  {
    question: "Quais tipos de carga vocês transportam?",
    answer: "Somos especialistas em dois segmentos principais: Grãos e Fertilizantes (Graneleiro) utilizando Bitrens e Rodotrens, e Líquidos Alimentícios/Óleos Vegetais (Tanque) em equipamentos de aço inox com certificação sanitária."
  },
  {
    question: "A frota da LFM é própria ou terceirizada?",
    answer: "Operamos exclusivamente com frota própria de 10 unidades de última geração. Isso garante um controle rigoroso sobre a manutenção dos veículos, treinamento dos motoristas e, consequentemente, maior segurança e pontualidade para sua carga."
  },
  {
    question: "Como posso obter uma cotação de frete?",
    answer: "A cotação é imediata. Você pode utilizar o botão de WhatsApp aqui no site ou entrar em contato pelos telefones da nossa unidade em Jaú. Nossa equipe operacional está pronta para analisar sua rota e volume para oferecer a melhor solução logística."
  }
];

const MotionDiv = motion.div as any;

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-yellow-600/30 rounded-full bg-yellow-900/10 mb-6">
                <HelpCircle size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-[10px] font-black tracking-[0.2em] uppercase">SUPORTE & DÚVIDAS</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                PERGUNTAS <br />
                <span className="text-yellow-500">FREQUENTES</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Esclareça suas principais dúvidas sobre nossa operação, segurança e logística. Se precisar de mais informações, nossa central está à disposição.
              </p>
              <div className="w-12 h-1 bg-yellow-600"></div>
            </MotionDiv>
          </div>

          {/* Accordion Section */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-sm transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-yellow-600/40 bg-slate-900/50' 
                    : 'border-white/5 bg-slate-900/20 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-base md:text-lg font-display font-bold tracking-wide transition-colors ${
                    openIndex === index ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-yellow-500' : 'text-slate-600'}`}>
                    <Plus size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <MotionDiv
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-[-1px]">
                        {item.answer}
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
