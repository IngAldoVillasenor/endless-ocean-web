import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Columna 1: Marca y Misión */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
            <span>🤿</span> Endless Ocean Scuba
          </h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Explorando las profundidades y formando buzos seguros, responsables y apasionados por el océano. Tu aventura comienza aquí.
          </p>
        </div>
        
        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Explora</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#cursos" className="hover:text-cyan-400 transition-colors">Ruta de Certificación</a></li>
            <li><a href="#viajes" className="hover:text-cyan-400 transition-colors">Calendario de Viajes</a></li>
            <li><a href="#comunidad" className="hover:text-cyan-400 transition-colors">Galería de Comunidad</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Aviso de Privacidad</a></li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Contacto</h4>
          <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2">
              <span>📍</span> León, Guanajuato
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@endlessoceanscuba.com
            </li>
            <li className="flex items-center gap-2 mt-2">
              <a 
                href="https://www.instagram.com/endlessoceanscuba" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
              >
                <span>📷</span> Síguenos en Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Endless Ocean Scuba. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}