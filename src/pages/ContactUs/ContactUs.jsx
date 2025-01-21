import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Nossos Contatos
        </h1>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FaInstagram className="text-2xl mr-2 text-pink-500" />
            <a
              href="https://www.instagram.com/tatuquarainfoco"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @nosso_bairro
            </a>{" "}
          </div>
          <div className="flex items-center mb-2">
            <FaWhatsapp className="text-2xl mr-2 text-green-500" />
            <a
              href="https://wa.me/5541987001211"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nos mande uma mensagem via Whatsapp!
            </a>{" "}
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-2xl mr-2 text-gray-600" />
            <a
              href="mailto:contato@tatuquara.com.br"
              className="text-blue-500 hover:underline"
            >
              contato@tatuquara.com.br
            </a>{" "}
          </div>
        </div>

        <div className="mb-6 border-t pt-4">
          {" "}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Como nos encontrar:
          </h2>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-2xl mr-2 text-red-500" />
            <p className="text-gray-700">Rua Enette Dubard, 760 - Tatuquara</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-700 ml-8">Curitiba, PR - CEP: 81470-252</p>
          </div>
        </div>

        <div className="border-t pt-4">
          {" "}
          {/* Separador e seção de horário de atendimento */}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Horário de Atendimento:
          </h2>
          <div className="flex items-center mb-2">
            <FaClock className="text-2xl mr-2 text-yellow-500" />
            <p className="text-gray-700">Segunda a sexta-feira: 9h às 18h</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-700 ml-8">Sábado: 9h às 13h</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-gray-700 ml-8">Domingo: Fechado</p>
          </div>
        </div>

        <p className="text-gray-700 mt-6 text-center">
          Esperamos te ouvir em breve!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
