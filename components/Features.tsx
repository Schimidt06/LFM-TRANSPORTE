
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Truck, Trophy, Radio, ShieldAlert, Activity, Satellite, Navigation, Info, AlertTriangle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
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

// Dados simulados da frota com metadados para o painel
const fleetData = [
  { id: 'LFM-0010', coords: [-22.2965, -48.5579] as [number, number], status: 'Operacional (Base)', location: 'JAÚ / SP', ignition: 'ONLINE', color: '#EAB308' },
  { id: 'LFM-0042', coords: [-15.6014, -56.0979] as [number, number], status: 'Em Trânsito', location: 'CUIABÁ / MT', ignition: 'ONLINE', color: '#EAB308' },
  { id: 'LFM-0028', coords: [-16.4674, -54.6364] as [number, number], status: 'Carregando', location: 'RONDONÓPOLIS / MT', ignition: 'ONLINE', color: '#22c55e' },
  { id: 'LFM-0035', coords: [-17.7912, -50.9201] as [number, number], status: 'Aguardando Descarga', location: 'RIO VERDE / GO', ignition: 'STANDBY', color: '#3b82f6' },
];

const MotionDiv = motion.div as any;
const premiumEase = [0.22, 1, 0.36, 1];

// Componente para centralizar o mapa suavemente ao clicar
const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, map.getZoom(), { duration: 1.5 });
  }, [center, map]);
  return null;
};

export const Features: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTruck, setActiveTruck] = useState(fleetData[0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const brazilCenter: [number, number] = [-15.7801, -47.9292];

  const createTruckIcon = (color: string, isActive: boolean) => {
    return L.divIcon({
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-4 rounded-full ${isActive ? 'animate-ping' : 'opacity-40'}" style="background-color: ${color}44"></div>
          <div class="p-2 rounded-full border-2 ${isActive ? 'border-white scale-110' : 'border-slate-950'} shadow-2xl relative z-10 transition-all duration-300" style="background-color: ${color}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-950"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-1.39-1.74a1 1 0 0 0-.78-.37H14"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
          </div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  };

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-20 md:mb-32 relative z-30">
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
              <div className="relative bg-slate-900 border border-white/10 p-6 md:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 group-hover:border-yellow-600/50">
                <div className="mb-3 md:mb-4 text-yellow-500 p-3 bg-yellow-500/5 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-6xl font-display font-black text-white mb-1 md:mb-2 tracking-tighter italic">
                  {stat.value}
                </div>
                <div className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs">
                  {stat.label}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Tactical Monitor */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-10 md:mb-12">
            <MotionDiv
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-[9px] mb-2 block">Monitoramento em Tempo Real</span>
              <h3 className="text-white font-display font-bold text-xl md:text-3xl mb-4 uppercase tracking-widest">
                SISTEMA TÁTICO DE LOGÍSTICA
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
                  zoomControl={false} // Desabilitamos para colocar em posição segura
                  className="w-full h-full"
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; CARTO'
                  />
                  
                  <ZoomControl position="bottomright" />
                  
                  <ChangeView center={activeTruck.coords} />
                  
                  {fleetData.map((truck) => (
                    <Marker 
                      key={truck.id} 
                      position={truck.coords} 
                      icon={createTruckIcon(truck.color, activeTruck.id === truck.id)}
                      eventHandlers={{
                        click: () => setActiveTruck(truck),
                      }}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2 min-w-[150px]">
                          <p className="font-bold text-xs uppercase font-display">Unidade: {truck.id}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: truck.color }}></span>
                            <p className="text-[10px] font-semibold uppercase text-slate-800">
                              {truck.status}
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              ) : (
                <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                   <Activity className="text-yellow-500 animate-pulse" />
                </div>
              )}

              {/* Overlays */}
              <div className="leaflet-vignette"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent animate-[scan_6s_linear_infinite] z-[1000] pointer-events-none"></div>

              {/* Status Header - Moved to Top Right to avoid zoom controls overlap */}
              <div className="absolute top-4 right-4 z-[1001] pointer-events-none flex flex-col items-end gap-2">
                <div className="bg-slate-950/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm inline-flex items-center gap-3 shadow-2xl">
                  <Satellite size={14} className="text-yellow-500" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">SASCAR ATIVO</span>
                </div>
                <div className="bg-yellow-500 text-slate-950 px-2 py-0.5 rounded-sm text-[8px] font-black uppercase tracking-tighter">
                  Exemplo de Rastreamento
                </div>
              </div>

              {/* Legal Disclaimer Overlay */}
              <div className="absolute bottom-4 left-4 z-[1001] pointer-events-none">
                <div className="bg-slate-950/60 backdrop-blur-sm border border-white/5 px-3 py-1.5 rounded-sm flex items-center gap-2">
                  <AlertTriangle size={12} className="text-yellow-600" />
                  <span className="text-[8px] md:text-[9px] text-slate-400 font-medium uppercase tracking-tight">
                    * DADOS ILUSTRATIVOS PARA FINS DE DEMONSTRAÇÃO TECNOLÓGICA
                  </span>
                </div>
              </div>
            </div>

            {/* Side Panel - Reativo ao Estado */}
            <div className="lg:col-span-4 bg-slate-900 p-6 md:p-10 flex flex-col justify-between lg:border-l border-white/10">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-4 md:mb-6">Painel de Telemetria</h4>
                  
                  <AnimatePresence mode="wait">
                    <MotionDiv 
                      key={activeTruck.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="flex justify-between items-center border-b border-white/5 pb-3 md:pb-4">
                        <span className="text-[10px] md:text-xs text-slate-400 uppercase">Ignição</span>
                        <span className={`${activeTruck.ignition === 'ONLINE' ? 'text-green-500' : 'text-blue-400'} font-display font-bold text-base md:text-lg`}>
                          {activeTruck.ignition}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3 md:pb-4">
                        <span className="text-[10px] md:text-xs text-slate-400 uppercase">Unidade</span>
                        <span className="text-white font-display font-bold text-base md:text-lg">{activeTruck.id}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3 md:pb-4">
                        <span className="text-[10px] md:text-xs text-slate-400 uppercase">Posição</span>
                        <span className="text-yellow-500 font-display font-bold text-base md:text-lg truncate ml-2 text-right">{activeTruck.location}</span>
                      </div>
                    </MotionDiv>
                  </AnimatePresence>
                </div>

                <div className="p-3 md:p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-sm">
                   <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert size={12} className="text-yellow-500" />
                    <span className="text-[9px] font-bold text-yellow-500 uppercase">Status Operacional</span>
                  </div>
                  <AnimatePresence mode="wait">
                    <MotionDiv
                      key={activeTruck.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed italic"
                    >
                      {activeTruck.status} - Canal Satelital Seguro (Demo).
                    </MotionDiv>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex items-center gap-4 p-3 md:p-4 border border-white/5 bg-slate-950/30 rounded">
                <div className="relative">
                  <Activity size={18} className="text-yellow-500" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">Sinal de Rastreamento</p>
                  <p className="text-[11px] text-white font-mono uppercase tracking-tighter">100% Estável</p>
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
              <div className="mb-4 md:mb-6 inline-flex p-4 md:p-5 bg-yellow-500 rounded-sm group-hover:bg-yellow-400 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-4 uppercase tracking-wider group-hover:text-yellow-500 transition-colors">
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
        .leaflet-bottom.leaflet-right {
          margin-bottom: 10px;
          margin-right: 10px;
        }
      `}</style>
    </section>
  );
};
