import React, { useState } from "react";
import { Climate } from "../../components/Climate";

function Clima() {
  const [city, setCity] = useState("Curitiba");
  const [searchCity, setSearchCity] = useState("Curitiba");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <div className="p-5 m-4">
      <h1 className="pb-4">Previsão do Tempo</h1>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={handleInputChange}
        className="border rounded p-2 mr-3"
      />
      <button
        onClick={handleSearch}
        className="bg-black hover:bg-white text-white hover:text-black border border-black shadow-2xl transition duration-700 ease-in-out rounded font-bold py-2 px-3"
      >
        Buscar
      </button>
      <Climate city={searchCity} />
    </div>
  );
}

export default Clima;
