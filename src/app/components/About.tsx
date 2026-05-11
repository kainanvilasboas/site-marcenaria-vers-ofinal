import { Award, Clock, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Clock size={32} />,
      title: '25+ Anos de Experiência',
      description: 'Décadas de tradição familiar na arte da marcenaria',
    },
    {
      icon: <Award size={32} />,
      title: 'Qualidade Garantida',
      description: 'Materiais nobres e acabamento impecável em cada projeto',
    },
    {
      icon: <Users size={32} />,
      title: 'Atendimento Personalizado',
      description: 'Do projeto à instalação, acompanhamos cada detalhe',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma marcenaria familiar que une tradição e inovação para criar móveis únicos e duradouros, feitos especialmente para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa História
              </h3>
              <p className="text-gray-700 mb-4">
                Fundada em 1999, nossa marcenaria nasceu do sonho de transformar madeira em arte funcional. Começamos em uma pequena oficina e hoje somos referência em móveis sob medida.
              </p>
              <p className="text-gray-700">
                Cada peça que criamos carrega nossa paixão pelo trabalho artesanal e o compromisso com a satisfação dos nossos clientes. Utilizamos apenas madeiras de reflorestamento e técnicas que respeitam o meio ambiente.
              </p>
            </div>
            <div className="aspect-video bg-amber-200 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-amber-800 text-6xl">
                🪵
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
