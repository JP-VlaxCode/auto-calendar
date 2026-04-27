export function LandingHero() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Tu tiempo, <span className="text-blue-600">automatizado</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
        Gestiona equipos, reuniones y tareas con el calendario compartido más inteligente del mercado. Deja que la IA trabaje por ti.
      </p>
      <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
        Comenzar prueba gratuita
      </a>
    </section>
  );
}