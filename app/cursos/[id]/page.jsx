import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar'; // Ajusta la ruta si es necesario
import Footer from '@/app/components/Footer'; // Ajusta la ruta si es necesario

const getCourseData = (id) => {
  const db = {
    'open-water': {
      title: 'Open Water Diver (RAID)',
      tagline: 'Tu pasaporte al océano.',
      description: 'Aprende las bases del buceo autónomo. Este curso te certifica para bucear en cualquier parte del mundo hasta 18 metros de profundidad junto a un compañero.',
      structure: [
        { step: '1. Teoría Online', desc: 'Estudia a tu propio ritmo desde la plataforma o App oficial de RAID. Sin aulas aburridas.' },
        { step: '2. Aguas Confinadas', desc: 'Prácticas en alberca aquí en León, Gto. Aprenderás a armar tu equipo, flotabilidad y protocolos de seguridad.' },
        { step: '3. Mar Abierto', desc: '4 inmersiones de evaluación en el océano. ¡Únete a uno de nuestros próximos viajes para completarlo!' }
      ],
      includes: ['Uso de equipo de buceo durante las prácticas (chaleco, regulador, tanque, plomos)', 'Entradas a la alberca', 'Trámite y credencial digital RAID'],
      notIncluded: ['Equipo personal básico (visor, aletas, snorkel)', 'Costos del viaje de certificación (vuelos, hospedaje, viáticos)'],
      prerequisites: 'Saber nadar, edad mínima 10 años, completar cuestionario médico.'
    },
    'discover': {
      title: 'Descubre el Buceo (Bautizo)',
      tagline: 'Tu primera respiración bajo el agua.',
      description: 'Una sesión introductoria, segura y muy divertida en alberca. Ideal para quienes quieren vivir la experiencia de respirar bajo el agua sin el compromiso de un curso completo.',
      structure: [
        { step: '1. Sesión Informativa', desc: 'Breve plática sobre las reglas básicas de seguridad, cómo nos comunicamos bajo el agua y el uso del equipo.' },
        { step: '2. Familiarización', desc: 'Te pondremos el equipo en la parte baja de la alberca para que te adaptes a respirar por el regulador con total calma.' },
        { step: '3. Aventura Subacuática', desc: 'Bajo la supervisión directa de un profesional, daremos un paseo por la alberca practicando flotabilidad y disfrutando la ingravidez.' }
      ],
      includes: ['Uso de equipo completo de buceo', 'Entrada a la alberca en León', 'Instrucción personalizada y supervisión constante'],
      notIncluded: ['Certificación oficial (es un programa de experiencia, no una certificación)'],
      prerequisites: 'Tener buena salud general, edad mínima 10 años.'
    },
    'advanced': {
      title: 'Advanced Open Water (RAID)',
      tagline: 'Expande tus límites y habilidades.',
      description: 'Diseñado para buzos certificados que quieren ganar más experiencia, afinar su flotabilidad y prepararse para inmersiones más profundas y emocionantes.',
      structure: [
        { step: '1. Desarrollo de Conocimientos', desc: 'Módulos teóricos online sobre buceo profundo, navegación subacuática y 3 inmersiones de aventura de tu elección.' },
        { step: '2. Buceos Obligatorios', desc: 'Práctica de navegación con brújula y una inmersión profunda (hasta 30 metros).' },
        { step: '3. Buceos Electivos', desc: 'Puedes elegir entre buceo nocturno, control de flotabilidad, identificación de peces, buceo en barcos hundidos, entre otros.' }
      ],
      includes: ['Tanques y plomos para las inmersiones', 'Trámite y credencial digital RAID Advanced35'],
      notIncluded: ['Equipo de buceo personal', 'Costos de la expedición al mar (Veracruz, Isla Isabel, etc.)'],
      prerequisites: 'Certificación Open Water Diver o equivalente, edad mínima 12 años.'
    },
    'nitrox': {
      title: 'Especialidad Nitrox',
      tagline: 'Bucea por más tiempo con menos fatiga.',
      description: 'Aprende a bucear de forma segura utilizando Aire Enriquecido (Nitrox). Esta es la especialidad más popular porque te permite extender tu tiempo de fondo, ideal para viajes intensivos como el de Veracruz.',
      structure: [
        { step: '1. Teoría Online', desc: 'Aprende a gestionar la exposición al oxígeno, los límites de no descompresión y a planificar inmersiones con Nitrox.' },
        { step: '2. Práctica en Tierra', desc: 'Aprenderás a analizar el porcentaje de oxígeno en tu tanque y a llenar tu bitácora de aire enriquecido antes de bucear.' },
        { step: '3. Inmersiones en Mar (Opcional)', desc: 'Aunque el curso se puede completar sin buceos, te recomendamos ponerlo en práctica en nuestra próxima expedición.' }
      ],
      includes: ['Material de estudio digital', 'Práctica de análisis de mezcla', 'Certificación digital de Especialidad Nitrox'],
      notIncluded: ['Inmersiones de práctica (se pagan como parte del viaje)'],
      prerequisites: 'Certificación Open Water Diver.'
    }
  };

  return db[id] || null;
};

export default async function CourseDetailPage({ params }) {
  // Extraemos el "id" de la URL (ej. "open-water")
  const resolvedParams = await params;
  
  const course = getCourseData(resolvedParams.id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
          <Link href="/" className="text-cyan-600 hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabecera del Curso */}
          <div className="mb-12 border-b border-slate-200 pb-10">
            <Link href="/" className="text-cyan-600 hover:text-cyan-700 font-medium mb-6 inline-block">
              ← Volver a todos los cursos
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{course.title}</h1>
            <p className="text-xl text-slate-500 mb-6">{course.tagline}</p>
            <p className="text-lg text-slate-700 leading-relaxed">{course.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Columna Principal (Estructura) */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span>🗺️</span> ¿Cómo funciona?
                </h2>
                <div className="space-y-6">
                  {course.structure.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{item.step}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Columna Lateral (Info rápida y CTA) */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-lg shadow-cyan-900/5 sticky top-28">
                
                <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">El curso incluye:</h3>
                <ul className="space-y-3 mb-6">
                  {course.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-emerald-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">No incluye:</h3>
                <ul className="space-y-3 mb-8">
                  {course.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-red-400 mt-0.5">✕</span> {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                  Inscribirme al curso
                </button>
                <p className="text-xs text-center text-slate-400 mt-4 mt-4">
                  Requisitos: {course.prerequisites}
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}