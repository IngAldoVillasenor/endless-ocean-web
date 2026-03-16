import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
        <picture className="absolute inset-0 w-full h-full z-0">
        {/* Esta imagen se mostrará en pantallas medianas (md) y grandes */}
        <source media="(min-width: 768px)" srcSet="/background.png" />
        
        {/* Esta imagen se mostrará por defecto en celulares */}
        <img 
            src="/background-mobile.png" 
            alt="Buceo" 
            className="w-full h-full object-cover object-center object-bottom" 
        />
        </picture>

      {/* 2. EL TRUCO MÁGICO (z-10): El Overlay Oscuro */}
      {/* bg-black/60 significa negro al 60% de opacidad. Puedes subirlo a /70 o bajarlo a /40 */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* 3. CAPA SUPERIOR (z-20): Tu texto y botón */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Descubre un mundo nuevo bajo la superficie
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 drop-shadow-md">
          Únete a Endless Ocean Scuba. Certificaciones, viajes de expedición y una comunidad apasionada por el buceo.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
          Inicia tu certificación
        </button>
      </div>
      
    </section>
  );
}