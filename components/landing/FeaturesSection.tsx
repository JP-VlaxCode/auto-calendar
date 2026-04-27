export function FeaturesSection() {
  const features = [
    { title: "Sincronización en tiempo real", desc: "Todos los miembros ven los cambios al instante." },
    { title: "Automatización de tareas", desc: "Crea eventos recurrentes y recordatorios automáticos." },
    { title: "Integración total", desc: "Conecta con tus herramientas favoritas sin fricción." },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}