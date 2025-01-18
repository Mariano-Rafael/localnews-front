import React, { useState, useEffect } from "react";

function Climate({ city }) {
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClimateData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8080/api/weather?city=${city}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setClimateData(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchClimateData();
    } else {
      setLoading(false);
    }
  }, [city]);

  if (loading) {
    return <div>Carregando informações climáticas...</div>;
  }

  if (error) {
    return <div>Erro ao carregar informações: {error.message}</div>;
  }

  if (!climateData) {
    return <div></div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      {" "}
      {/* Container com fundo branco, bordas arredondadas e sombra */}
      <h2 className="text-2xl font-bold mb-2">
        Clima em {climateData.city}
      </h2>{" "}
      {/* Título maior e em negrito */}
      <div className="grid grid-cols-2 gap-4">
        {" "}
        {/* Grid para organizar as informações */}
        <div>
          <p className="text-lg">Temperatura: {climateData.temp}°C</p>
          <p>Descrição: {climateData.description}</p>
          <p>Umidade: {climateData.humidity}%</p>
          <p>Velocidade do Vento: {climateData.wind_speedy}</p>
          <p>Data: {climateData.date}</p>
          <p>Hora: {climateData.time}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={`https://assets.hgbrasil.com/weather/icons/conditions/${climateData.condition_slug}.svg`}
            alt={`Ícone de ${climateData.description}`}
            className="w-20 h-20 mr-4"
          />
          <img
            src={`https://assets.hgbrasil.com/weather/icons/moon/${climateData.moon_phase}.png`}
            alt={`Fase da lua: ${climateData.moon_phase}`}
            className="w-20 h-20 mr-4"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">
        Previsão para os próximos dias:
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Data
              </th>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Dia da Semana
              </th>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Máxima
              </th>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Mínima
              </th>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Condição
              </th>
              <th className=" bg-gray-100 px-4 py-2 text-left text-gray-700">
                Chuva (mm)
              </th>
              <th className=" bg-gray-100 px-1 py-1 text-left text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {climateData.forecast.map((forecastDay) => (
              <tr key={forecastDay.date}>
                <td className="px-4 py-2">{forecastDay.date}</td>
                <td className="px-4 py-2">{forecastDay.weekday}</td>
                <td className="px-4 py-2">{forecastDay.max}°C</td>
                <td className="px-4 py-2">{forecastDay.min}°C</td>
                <td className="px-4 py-2">{forecastDay.description}</td>
                <td className="px-4 py-2">{forecastDay.rain}</td>
                <td className="px-4 py-2">
                  {" "}
                  <img
                    src={`https://assets.hgbrasil.com/weather/icons/conditions/${forecastDay.condition}.svg`}
                    alt={`Ícone de ${climateData.description}`}
                    className="w-12 h-12 mx-auto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Climate;
