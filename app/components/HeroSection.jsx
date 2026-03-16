export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-blue-900">
      {/* Overlay oscuro para asegurar que el texto sea legible. 
          Aquí después puedes inyectar un <video autoPlay loop muted> en posición absoluta */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
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