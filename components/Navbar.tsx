import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div as any;

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Fecha o menu primeiro
    
    // Aumentado para 300ms para dar tempo do menu mobile fechar visualmente antes de pular a tela
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollToSection(e, '#inicio')}
          className="flex items-center gap-2 group"
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-display font-bold italic tracking-tighter text-white leading-none">
              LFM
            </h1>
            <div className="bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-full mt-1 group-hover:w-[120%] transition-all duration-500"></div>
          </div>
          <span className="hidden sm:block text-xs font-bold tracking-[0.2em] text-slate-400 ml-2 mt-2">TRANSPORTES</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-yellow-500 transition-colors font-semibold cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5514991851871" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-yellow-600/50 px-4 py-2 rounded text-yellow-500 hover:bg-yellow-600 hover:text-slate-900 transition-all text-sm font-bold uppercase"
          >
            <Phone size={16} />
            <span>(14) 99185-1871</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white hover:text-yellow-500 transition-colors relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] bg-slate-950 z-40 md:hidden flex flex-col p-6 border-t border-white/10 h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-4 pb-20">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-xl font-display font-bold text-slate-300 hover:text-yellow-500 py-4 border-b border-white/5 tracking-wider active:bg-white/5 px-2 rounded transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://wa.me/5514991851871"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-yellow-600 text-slate-950 font-bold py-5 text-center rounded-sm uppercase tracking-widest shadow-lg shadow-yellow-600/20 active:scale-95 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};