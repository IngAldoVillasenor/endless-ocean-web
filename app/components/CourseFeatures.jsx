import React from 'react';
import Link from 'next/link';

// 1. Datos de los cursos (Fáciles de actualizar o mover a una base de datos después)
const coursesData = [
  {
    id: 'discover',
    title: 'Descubre el Buceo',
    level: 'Principiantes',
    description: 'Tu primera respiración bajo el agua. Una sesión introductoria y segura en alberca para que vivas la experiencia sin compromiso.',
    logistics: 'Práctica en León',
    icon: '🤿',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    id: 'open-water',
    title: 'Open Water Diver',
    level: 'Certificación Inicial',
    description: 'Tu pasaporte al océano. Aprende la teoría a tu ritmo, domina las habilidades en alberca y certifícate con 4 inmersiones en mar abierto.',
    logistics: 'León + Viaje al Mar',
    icon: '🌊',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'advanced',
    title: 'Advanced Open Water',
    level: 'Intermedio',
    description: 'Expande tus límites. Perfecciona tu flotabilidad, aprende navegación subacuática y experimenta la emoción de tu primer buceo profundo.',
    logistics: 'Mar Abierto',
    icon: '🧭',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'nitrox',
    title: 'Especialidad Nitrox',
    level: 'Avanzado',
    description: 'Bucea por más tiempo y con menos fatiga respirando aire enriquecido. La certificación ideal para exprimir al máximo viajes como el de Veracruz.',
    logistics: 'Teoría + Mar Abierto',
    icon: '🫧',
    color: 'bg-amber-100 text-amber-700',
  }
];

export default function CourseFeatures() {
  return (
    <section className="py-24 bg-white px-4" id="cursos">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ruta de Certificación
          </h2>
          <p className="text-lg text-slate-600">
            Desde tu primera burbuja hasta convertirte en un buzo avanzado. Te acompañamos paso a paso con seguimiento personalizado y los más altos estándares de seguridad.
          </p>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="group flex flex-col bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Ícono y Nivel */}
              <div className="flex justify-between items-start mb-6">
                <div className={`text-3xl p-3 rounded-xl ${course.color}`}>
                  {course.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">
                  {course.level}
                </span>
              </div>

              {/* Textos */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {course.description}
              </p>

              {/* Logística y Acción */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-auto">
                <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                  <span>📍</span> {course.logistics}
                </span>
                <Link href={`/cursos/${course.id}`} className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1 transition-colors group">
                    Detalles <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}