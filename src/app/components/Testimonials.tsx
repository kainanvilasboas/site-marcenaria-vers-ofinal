import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente Residencial',
      content: 'A cozinha planejada ficou perfeita! Superou todas as nossas expectativas. Qualidade impecável e atendimento nota 10.',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Empresário',
      content: 'Contratei a marcenaria para fazer os móveis do meu escritório. Profissionalismo do início ao fim. Recomendo!',
      rating: 5,
    },
    {
      name: 'Ana Paula',
      role: 'Arquiteta',
      content: 'Trabalho com eles há anos em projetos dos meus clientes. Sempre entregam com excelência e dentro do prazo.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
