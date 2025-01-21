/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sobre Nós: Tecendo Laços na Nossa Comunidade
        </h1>
        <p className="text-gray-700 mb-4 text-justify">
          Em meio à dinâmica da vida moderna, muitas vezes nos distanciamos
          daqueles que compartilham o mesmo espaço que nós: nossos vizinhos.
          Este projeto surge como uma semente plantada no coração da nossa
          comunidade, idealizado por um morador com o desejo de reconectar as
          pessoas e construir um futuro melhor para o nosso bairro.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          Acreditamos que a força de uma comunidade reside na união e na troca
          de experiências. Por isso, criamos este espaço virtual, um ponto de
          convergência onde podemos encontrar informações relevantes, debater
          ideias, compartilhar conhecimento e, acima de tudo, fortalecer os
          laços que nos unem.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Nossa Visão
        </h2>
        <p className="text-gray-700 mb-6 text-justify">
          Nossa visão é ser um farol que ilumina o caminho para um bairro mais
          próspero, colaborativo e acolhedor. Queremos ser o elo que conecta os
          moradores, impulsionando ações positivas e construindo uma rede de
          apoio mútuo.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="px-6 py-3 posi bg-black text-white font-medium rounded hover:bg-gray-700 transition duration-300 "
          >
            Junte-se à Nossa Comunidade
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
