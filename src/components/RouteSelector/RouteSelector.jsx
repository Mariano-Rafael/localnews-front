import React from "react";

function RouteSelector({ selectedRoute, onChange, allRoutes }) {
  const sortedRoutes = [...allRoutes].sort();

  return (
    <div>
      <label htmlFor="routeSelect" className="bottom-6 p-5">
        Selecione a Linha:{" "}
      </label>
      <select
        id="routeSelect"
        value={selectedRoute}
        onChange={onChange}
        className="border rounded p-1 bg-gray-50"
      >
        <option value="">Selecione uma linha</option>
        {sortedRoutes.map((route) => (
          <option key={route} value={route}>
            {route}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RouteSelector;
