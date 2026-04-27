export function CTASection() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-6">¿Listo para optimizar tu equipo?</h2>
        <p className="mb-8 opacity-90">Únete a miles de usuarios que ya ahorran horas cada semana.</p>
        <a href="/login" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          Crear cuenta ahora
        </a>
      </div>
    </section>
  );
}