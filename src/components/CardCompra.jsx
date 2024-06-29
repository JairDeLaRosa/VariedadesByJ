import React from "react";
import { StarRating } from "./StarRating";

export const CardCompra = () => {
  return (
    <div
      className="border rounded pe-2 d-flex container mb-3 cardCompra"
      style={{ maxWidth: 720 }}
    >
      <div className="imgCardCompra">
        <img
          src="../assets/siliconaGLobos.jpg"
          alt=""
          className="rounded-start-2 card-img-img imgCardCompra"
        />
      </div>
      <div className="p-2 ms-2 d-flex flex-column cardComprainfo">
        <div>
          {" "}
          <h5 className="titleCardCompra p-1">
            Globos de estreallas con motivo de cerveza Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Facere odit quibusdam numquam.
          </h5>
        </div>
        <div>
          <span>Cantidad: 5</span>
        </div>
        <div>
          <StarRating rating={3.5} />
        </div>
        <div className="d-flex justify-content-between">
          <span className="display-6 precioCardCompra" style={{color: "gray" }}>
            $ 20.000,00
          </span>
          <button className="btn evaluarProduto"><em><u>Evaluar producto</u></em></button>
        </div>
      </div>
    </div>
  );
};
