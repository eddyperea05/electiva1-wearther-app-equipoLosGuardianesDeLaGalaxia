import React, { useState } from "react";
import { WeatherCard } from "./wheaterCard";

const searchCity = () => {};

export const Container = () => {
  const [city, setCity] = useState<string>("");

  const onChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    console.log(value);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: "100%", maxWidth: 400 }}>
        <input
          value={city}
          type="text"
          className="form-control mb-3"
          placeholder="Ingrese el nombre de la ciudad"
          onChange={onChangeCity}
        />
        <button className="btn btn-primary w-100 mb-3" onClick={searchCity}>
          Buscar
        </button>
        <WeatherCard variant="detailed" />
      </div>
    </div>
  );
};
