import React from "react";
import type { clima } from "../interfaces/clima";



export const Card = (clima: clima) => {



  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{clima.description}</h5>
          <h6>Lat {clima.lat}</h6>
          <h6>Lot {clima.lot}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
