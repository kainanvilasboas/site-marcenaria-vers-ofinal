import { Armchair, BookOpen, Box, DoorOpen, Home, Utensils } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Utensils size={40} />,
      title: 'Cozinhas Planejadas',
      description: 'Projetos completos de cozinhas sob medida, otimizando espaço e funcionalidade.',
    },
    {
      icon: <Armchair size={40} />,
      title: 'Móveis para Sala',
      description: 'Estantes, racks, mesas e painéis que transformam seu ambiente.',
    },
    {
      icon: <Home size={40} />,
      title: 'Dormitórios',
      description: 'Guarda-roupas, cabeceiras e móveis planejados para quartos.',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Home Office',
      description: 'Escrivaninhas, estantes e ambientes completos para trabalho em casa.',
    },
    {
      icon: <DoorOpen size={40} />,
      title: 'Portas e Esquadrias',
      description: 'Portas de madeira maciça e esquadrias personalizadas.',
    },
    {
      icon: <Box size={40} />,
      title: 'Móveis Corporativos',
      description: 'Soluções em marcenaria para escritórios e estabelecimentos comerciais.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em marcenaria para todos os ambientes da sua casa ou empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-800 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
