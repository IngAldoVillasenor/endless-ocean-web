"use client";

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function NewsletterLead() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const recaptchaRef = useRef(null); // Referencia para controlar el captcha

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const captchaValue = recaptchaRef.current.getValue();

    if (!captchaValue) {
      alert('Por favor, verifica que no eres un robot 🤿');
      return;
    }

    setStatus('loading');
    
    try {
      // Hacemos la petición POST a nuestro propio backend
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, captchaValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        // Si el backend nos manda un error (ej. falló el captcha)
        console.error(data.error);
        setStatus('error');
        alert(data.error || 'Ocurrió un error al suscribirte.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setStatus('error');
    } finally {
      // Siempre reiniciamos el captcha al terminar, sea éxito o error
      recaptchaRef.current.reset();
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a nuestra bitácora de inmersión</h2>
        <p className="text-slate-300 mb-10 text-lg">
          Recibe noticias de nuestros próximos destinos, fechas de cursos de certificación y tips de buceo directamente en tu correo.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-xl mx-auto">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
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
          </div>

          {/* Componente de Google reCAPTCHA */}
          <div className="mt-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              // Esta es una clave pública de prueba proporcionada por Google. 
              // NO la uses en producción, solo para entorno local (localhost).
              sitekey="6LfAyYwsAAAAAOVHArKopm76GrBQCF1Myt3UBiTd"
              theme="dark" // Le ponemos tema oscuro para que combine con el fondo
            />
          </div>

        </form>
        
        {/* Mensaje de éxito */}
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