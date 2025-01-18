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
    <div className="pt-5">
      <h2 className="text-xl">Previsão do tempo em {climateData.city}</h2>
      <br></br>
      <p>Temperatura: {climateData.temp}°C</p>
      <p className="pb-3">Descrição: {climateData.description}</p>

      <h3 className="text-xl">Previsão para os próximos dias:</h3>
      <ul className="pt-1">
        {climateData.forecast.map((forecastDay) => (
          <li className="pt-1" key={forecastDay.date}>
            {forecastDay.weekday}, {forecastDay.date}: {forecastDay.description}{" "}
            (Max: {forecastDay.max}°C, Min: {forecastDay.min}°C, Chuva:{" "}
            {forecastDay.rain}mm)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Climate;
