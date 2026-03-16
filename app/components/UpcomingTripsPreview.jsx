import React from 'react';

// 1. Nuestros datos de prueba (Mock Data) estructurados
const tripsData = [
  {
    id: 1,
    destination: 'Faro',
    theme: 'Puente largo',
    dates: 'Del 1 al 4 de Mayo',
    isCertification: false,
    status: 'Lugares disponibles',
  },
  {
    id: 2,
    destination: 'Veracruz',
    theme: 'Viaje con certificación de Nitrox',
    dates: 'Del 24 al 27 de Julio',
    isCertification: true, // Usaremos esto para darle un estilo especial
    status: 'Detalles próximamente',
  },
  {
    id: 3,
    destination: 'Isla Isabel',
    theme: 'Expedición de buceo',
    dates: 'Del 27 al 30 de Noviembre',
    isCertification: false,
    status: 'Lugares disponibles',
  },
];

export default function UpcomingTripsPreview() {
  return (
    <section className="py-20 bg-sky-50 px-4" id="viajes">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado del componente usando tu copy */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Próximos Buceos
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            Querida familia, vayan desempolvando sus aletas, porque ya tenemos listas las fechas de nuestras siguientes aventuras.
          </p>
          <p className="text-xl font-medium text-cyan-700 italic">
            "Que no se nos olvide hacer espacio en la vida para lo que realmente nos hace felices 🤿🫧"
          </p>
        </div>

        {/* Grid de Tarjetas de Viajes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tripsData.map((trip) => (
            <div 
              key={trip.id} 
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${
                trip.isCertification ? 'border-amber-400' : 'border-cyan-500'
              }`}
            >
              {/* Badge superior */}
              <div className="absolute -top-4 right-6">
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm ${
                  trip.isCertification ? 'bg-amber-500' : 'bg-cyan-600'
                }`}>
                  {trip.status}
                </span>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex items-start gap-4 mb-6 mt-2">
                <div className="text-3xl text-cyan-600">📍</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{trip.destination}</h3>
                  <p className="text-slate-500 font-medium">{trip.theme}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600 mb-8 bg-slate-50 p-3 rounded-lg">
                <span className="text-xl">🗓️</span>
                <span className="font-semibold">{trip.dates}</span>
              </div>

              {/* Botón de acción */}
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors">
                {trip.isCertification ? 'Esperar detalles' : 'Me interesa (Votar)'}
              </button>
            </div>
          ))}
        </div>

        {/* Cierre y CTA secundario */}
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-4xl mx-auto border border-slate-100">
          <p className="text-slate-600 text-lg mb-2">
            En los próximos días compartiremos los detalles de la <strong className="text-slate-900">certificación de Nitrox</strong>.
          </p>
          <p className="text-slate-600">
            Si te interesa unirte al faro o a Isla Isabel, haz clic en "Me interesa" en las tarjetas de arriba para enviarte todos los detalles por privado. ¡No dejen que pase otro año sin sumar más burbujas al contador!
          </p>
        </div>

      </div>
    </section>
  );
}