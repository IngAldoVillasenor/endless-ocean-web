import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
            {/* Logo y Nombre */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img 
                src="/logo-endless.png" 
                alt="Endless Ocean Scuba Logo" 
                // Aquí está la magia de Tailwind:
                className="w-12 h-12 object-cover rounded-full border-2 border-cyan-500 shadow-md" 
            />
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
                Endless Ocean
            </span>
            </div>
          
          {/* Menú de Escritorio */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#cursos" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
              Cursos RAID
            </a>
            <a href="#viajes" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
              Expediciones
            </a>
            <a href="#comunidad" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
              Comunidad
            </a>
            {/* Este botón en el futuro puede ser "Mi Bitácora" o "Login" */}
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-lg shadow-cyan-900/20">
              Contáctanos
            </button>
          </div>

          {/* Botón Menú Móvil (Hamburguesa simple) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}