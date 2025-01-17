import React, { useState } from "react";

import { BusSchedule } from "../components/BusSchedule";
import { RouteSelector } from "../components/RouteSelector";
import { allRoutes } from "../constants/rotas";

function Horarios() {
  const [linha, setLinha] = useState("");
  const [diaDaSemana, setDiaDaSemana] = useState("DIA ÚTIL");
  const daysOfWeek = ["DIA ÚTIL", "SÁBADO", "DOMINGO"];

  const handleRouteChange = (event) => {
    setLinha(event.target.value);
  };

  const handleDayOfWeekChange = (event) => {
    setDiaDaSemana(event.target.value);
  };

  return (
    <div className="p-4 m-auto">
      <h1 className="p-5">Horários de Ônibus</h1>
      <RouteSelector
        selectedRoute={linha}
        onChange={handleRouteChange}
        allRoutes={allRoutes}
      />

      <div className="p-4">
        <label htmlFor="dayOfWeekSelect" className="p-1">
          Selecione o Dia da Semana:{" "}
        </label>
        <select
          id="dayOfWeekSelect"
          value={diaDaSemana}
          onChange={handleDayOfWeekChange}
          className="border rounded p-1 bg-gray-50"
        >
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <br></br>

      <BusSchedule linha={linha} diaDaSemana={diaDaSemana} />
    </div>
  );
}

export default Horarios;
