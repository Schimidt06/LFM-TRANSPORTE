
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Casting motion components to any to resolve property 'initial' does not exist errors
const MotionDiv = motion.div as any;
const MotionA = motion.a as any;

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 py-3 md:py-4' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollToSection(e, '#inicio')}
          className="flex items-center gap-2 group active:scale-95 transition-transform"
        >
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-display font-bold italic tracking-tighter text-white leading-none">
              LFM
            </h1>
            <div className="bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-full mt-1 group-hover:scale-x-110 transition-transform duration-500 origin-center"></div>
          </div>
          <span className="hidden sm:block text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 ml-2 mt-2">TRANSPORTES</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-yellow-500 transition-colors font-semibold cursor-pointer relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex flex-col items-end">
             <a 
              href="https://wa.me/5514991851871" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-yellow-600/50 px-4 py-2 rounded text-yellow-500 hover:bg-yellow-600 hover:text-slate-900 transition-all text-sm font-bold uppercase active:scale-95"
            >
              <Phone size={14} />
              <span>(14) 99185-1871</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white hover:text-yellow-500 transition-colors relative z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <MotionDiv key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <X size={28} />
              </MotionDiv>
            ) : (
              <MotionDiv key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                <Menu size={28} />
              </MotionDiv>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 bg-slate-950 z-40 md:hidden flex flex-col pt-[80px] px-6 h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item, idx) => (
                <MotionA 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollToSection(e, item.href)}
                  className="text-2xl font-display font-bold text-slate-100 hover:text-yellow-500 py-5 border-b border-white/5 tracking-wider active:bg-white/5 px-2 rounded transition-colors flex justify-between items-center"
                >
                  {item.label}
                  <div className="w-2 h-2 rounded-full bg-yellow-600 opacity-20"></div>
                </MotionA>
              ))}
              
              <div className="mt-auto pb-12 pt-10 space-y-4">
                <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <MapPin size={16} className="text-yellow-600" />
                  <span>Nossa Matriz: Jaú/SP</span>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <MotionA 
                    href="https://wa.me/5514991851871"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-3 bg-yellow-600 text-slate-950 font-bold py-4 rounded-sm uppercase tracking-widest shadow-lg shadow-yellow-600/20 active:scale-95 transition-transform"
                  >
                    <Phone size={18} />
                    (14) 99185-1871
                  </MotionA>
                  
                  <MotionA 
                    href="https://wa.me/5514981095496"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-3 border border-yellow-600 text-yellow-500 font-bold py-4 rounded-sm uppercase tracking-widest active:bg-yellow-600/10 transition-colors active:scale-95"
                  >
                    <Phone size={18} />
                    (14) 98109-5496
                  </MotionA>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};
