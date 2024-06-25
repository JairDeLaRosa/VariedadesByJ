import React from "react";
import product from "./../assets/product.jpg";
export const Card = () => {
  return (
    <button className="ms-3 mt-3 me-3 mb-2 cards text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
      <div className="card-img">
        <img src={product}  alt="..." className="card-img-img"></img>{" "}
      </div>
      <div className="nameProduct">
        <span>Globos de estrellas con motivo de cerveza</span>
      </div>
      <span>Inventrario : 4</span>
      <span className="card-precio">$ 50.000,00</span>
    </button>
  );
};
