import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Em breve retornaremos sua mensagem.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vamos conversar sobre seu projeto? Estamos prontos para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-800 rounded-lg">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Telefone</p>
                  <p className="text-gray-600">(11) 98765-4321</p>
                  <p className="text-gray-600">(11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-800 rounded-lg">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <p className="text-gray-600">contato@marcenariaartesanal.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-800 rounded-lg">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Endereço</p>
                  <p className="text-gray-600">
                    Rua dos Artesãos, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-800 text-white rounded-lg">
              <h4 className="font-bold text-xl mb-2">Horário de Atendimento</h4>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white px-8 py-4 rounded-lg hover:bg-amber-900 transition-colors font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
