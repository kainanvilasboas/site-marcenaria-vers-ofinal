import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Móveis Sob Medida com Qualidade Artesanal
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformamos madeira em arte. Criamos móveis personalizados que combinam funcionalidade, beleza e durabilidade para seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors"
              >
                Solicite um Orçamento
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-800 text-amber-800 rounded-lg hover:bg-amber-50 transition-colors"
              >
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-amber-200 rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-amber-800 text-6xl">
                🪑
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
