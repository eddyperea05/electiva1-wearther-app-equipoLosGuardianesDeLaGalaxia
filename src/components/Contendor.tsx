import React from "react";
import { Card } from "./Card";

export const Contendor = () => {
  return (
    <div className="container justify-content-center align-items-center flex">
      <input type="text" className="form-control" placeholder="Ingrese el nombre de la ciudad"/>
      <button>Buscar</button>
      <Card lot="-74.08175" lat="4.60971" description="Ciudad de Bogota" />
    </div>
  );
};
