"use client"

import { useState } from 'react';

export default function NewsletterLead() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Aquí es donde harás el fetch() a tu backend o API (ej. Resend, Mailchimp)
    // Simulamos un retraso de red de 1.5 segundos por ahora:
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-900 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a nuestra bitácora de inmersión</h2>
        <p className="text-slate-300 mb-10 text-lg">
          Recibe noticias de nuestros próximos destinos (¡estamos preparando ruta a Puerto Morelos!), fechas de cursos de certificación y tips de buceo directamente en tu correo.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com" 
            required
            className="flex-1 px-5 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all"
            disabled={status === 'loading' || status === 'success'}
          />
          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {status === 'loading' ? 'Registrando...' : status === 'success' ? '¡Suscrito!' : 'Suscribirme'}
          </button>
        </form>
        
        {/* Mensaje de éxito o error */}
        <div className="h-8 mt-4">
          {status === 'success' && (
            <p className="text-emerald-400 font-medium animate-pulse">
              ¡Listo! Te has registrado exitosamente a nuestro boletín.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}