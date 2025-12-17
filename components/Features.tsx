
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Trophy, Radio, SignalHigh, ShieldAlert, Activity, Satellite, Navigation, Info } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const stats = [
  { label: 'Anos de Estrada', value: '+10', icon: <Trophy className="w-6 h-6" /> },
  { label: 'Frota Própria', value: '10', icon: <Truck className="w-6 h-6" /> },
  { label: 'Estados Atendidos', value: '09', icon: <MapPin className="w-6 h-6" /> },
];

const features = [
  {
    icon: <Radio className="w-8 h-8 text-slate-950" />,
    title: "Satelital Sascar",
    description: "Conectividade redundante via satélite. Sua carga monitorada mesmo no 'vazio' do Mato Grosso ou Pará."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-slate-950" />,
    title: "Gerenciamento de Risco",
    description: "Protocolos rigorosos de parada, sensores de porta e botão de pânico integrados à central 24h."
  },
  {
    icon: <Navigation className="w-8 h-8 text-slate-950" />,
    title: "Pontualidade Real",
    description: "Telemetria avançada que permite prever horários de chegada com precisão cirúrgica."
  }
];

const MotionDiv = motion.div as any;
const premiumEase = [0.22, 1, 0.36, 1];

export const Features: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const jauCoords: [number, number] = [-22.2965, -48.5579];
  const brazilCenter: [number, number] = [-15.7801, -47.9292];

  // Memoize icon to prevent re-creation on every render
  const truckIcon = useMemo(() => {
    if (!isMounted) return null;
    return L.divIcon({
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-4 bg-yellow-500/20 rounded-full animate-ping"></div>
          <div class="bg-yellow-500 p-2 rounded-full border-2 border-slate-950 shadow-xl relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-950"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-1.39-1.74a1 1 0 0 0-.78-.37H14"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
          </div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  }, [isMounted]);

  return (
    <section id="diferenciais" className="py-20 md:py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32 relative z-30">
          {stats.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: premiumEase }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-white/10 p-8 md:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 group-hover:border-yellow-600/50">
                <div className="mb-4 text-yellow-500 p-3 bg-yellow-500/5 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-display font-black text-white mb-2 tracking-tighter italic">
                  {stat.value}
                </div>
                <div className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                  {stat.label}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Tactical Monitor */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-10 md:mb-12">
            <MotionDiv
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Monitoramento em Tempo Real</span>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl mb-4 uppercase tracking-widest">
                VISUALIZAÇÃO DE FROTA SASCAR
              </h3>
              <div className="w-16 md:w-24 h-1 bg-yellow-600 mx-auto"></div>
            </MotionDiv>
          </div>

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-slate-900 border border-white/10 rounded-sm overflow-hidden shadow-2xl shadow-yellow-500/5"
          >
            {/* Map Area */}
            <div className="lg:col-span-8 bg-slate-950 h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden group border-b lg:border-b-0">
              
              {isMounted ? (
                <MapContainer 
                  center={brazilCenter} 
                  zoom={4} 
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                  />
                  
                  {truckIcon && (
                    <Marker position={jauCoords} icon={truckIcon}>
                      <Popup className="custom-popup">
                        <div className="p-2 min-w-[120px]">
                          <p className="font-bold text-xs uppercase font-display">Caminhão: LFM-0010</p>
                          <p className="text-[10px] font-semibold mt-1 uppercase text-slate-800">Status: Operacional</p>
                        </div>
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              ) : (
                <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                   <Activity className="text-yellow-500 animate-pulse" />
                </div>
              )}

              {/* Overlays */}
              <div className="leaflet-vignette"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent animate-[scan_6s_linear_infinite] z-[1000] pointer-events-none"></div>

              {/* Status Header */}
              <div className="absolute top-4 left-4 z-[1001] pointer-events-none">
                <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm inline-flex items-center gap-3">
                  <Satellite size={16} className="text-yellow-500" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">RASTREAMENTO: ATIVO</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="absolute bottom-6 w-full px-6 flex justify-center z-[1001] pointer-events-none">
                <div className="bg-slate-950/90 backdrop-blur-md border border-white/5 px-6 py-3 rounded-full flex items-center gap-3">
                  <Info size={14} className="text-yellow-600 shrink-0" />
                  <span className="text-[9px] md:text-[10px] text-slate-400 font-medium uppercase tracking-[0.15em] italic">
                    <strong className="text-yellow-600/80">NOTA:</strong> MAPA INTERATIVO PARA EXEMPLO DE VISUALIZAÇÃO DE FROTA.
                  </span>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-4 bg-slate-900 p-8 md:p-10 flex flex-col justify-between lg:border-l border-white/10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">Central de Comando</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-xs text-slate-400 uppercase">Ignição</span>
                      <span className="text-green-500 font-display font-bold text-lg">ONLINE</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-xs text-slate-400 uppercase">Velocidade</span>
                      <span className="text-white font-display font-bold text-lg">0 KM/H</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-xs text-slate-400 uppercase">Base</span>
                      <span className="text-yellow-500 font-display font-bold text-lg">JAÚ/SP</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-sm">
                   <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert size={14} className="text-yellow-500" />
                    <span className="text-[10px] font-bold text-yellow-500 uppercase">Alerta de Risco</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">Monitoramento via satélite ininterrupto.</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 border border-white/5 bg-slate-950/30 rounded">
                <Activity size={20} className="text-yellow-500" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Status Operacional</p>
                  <p className="text-xs text-white font-mono">Unidade Jaú/SP</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="mb-6 inline-flex p-4 md:p-5 bg-yellow-500 rounded-sm group-hover:bg-yellow-400 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3 md:mb-4 uppercase tracking-wider group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l border-white/10 pl-4 group-hover:border-yellow-500 transition-all duration-300">
                {feature.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};
