import React, { useState, useEffect } from "react";

function BusSchedule({ linha, diaDaSemana }) {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8080/bus/info/${linha}/${diaDaSemana}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSchedule(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (linha && diaDaSemana) {
      fetchSchedule();
    }
  }, [linha, diaDaSemana]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Erro ao carregar horários: {error.message}</div>;
  }

  if (!schedule || schedule.length === 0) {
    return (
      <div>Nenhum horário encontrado para esta linha e dia da semana.</div>
    );
  }

  return (
    <div className="overflow-y-auto max-h-screen max-w-6xl border mx-auto w-3/4">
      {" "}
      {/* Adicionado scroll e altura máxima */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Linha
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Dia da Semana
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Horário de Saída
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ponto
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {schedule.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.route}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.dayOfWeek}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.departureTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.local}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusSchedule;
