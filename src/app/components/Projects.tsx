export function Projects() {
  const projects = [
    {
      title: 'Cozinha Moderna',
      category: 'Cozinha',
      emoji: '🍳',
    },
    {
      title: 'Home Office Executivo',
      category: 'Escritório',
      emoji: '💼',
    },
    {
      title: 'Closet Personalizado',
      category: 'Dormitório',
      emoji: '👔',
    },
    {
      title: 'Estante para Sala',
      category: 'Sala',
      emoji: '📚',
    },
    {
      title: 'Bancada Gourmet',
      category: 'Área Externa',
      emoji: '🍖',
    },
    {
      title: 'Quarto Infantil',
      category: 'Dormitório',
      emoji: '🧸',
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos e inspire-se para seu próximo projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform">
                {project.emoji}
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm text-amber-800 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
