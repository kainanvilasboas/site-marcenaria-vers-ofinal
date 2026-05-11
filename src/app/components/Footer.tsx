import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">
              Marcenaria Artesanal
            </h3>
            <p className="text-gray-400">
              Transformando madeira em arte desde 1999. Qualidade e tradição em cada projeto.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                (11) 98765-4321
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                contato@marcenariaartesanal.com.br
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Marcenaria Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
