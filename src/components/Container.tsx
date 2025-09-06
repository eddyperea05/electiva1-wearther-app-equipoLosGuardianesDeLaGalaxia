import React from "react";
import WeatherCard from "./wheaterCard";

export const Container = () => {
  return (
    <div className="container justify-content-center align-items-center flex">
      <input type="text" className="form-control" placeholder="Ingrese el nombre de la ciudad"/>
      <button>Buscar</button>
      <WeatherCard variant="detailed" />
    </div>
  );
};
