import React from "react";
import { NumericFormat } from "react-number-format";
import { StarRating } from "./StarRating";

export const Card = ({ produc, onClick }) => {
  return (
    <div
      class="card"
      onClick={() => onClick(produc)}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <div>
      <img
        class="card-img"
        src={produc.imagenes[0].url}
        alt={produc.nombre}
      />
      </div>

      <div class="card-body" style={{padding: "8px"}}>
        <h4 class="card-title nameProduct" >{produc.nombre}</h4>
        <StarRating/>

        <div class="buy d-flex justify-content-between mt-1">
          <div class="price">
          <NumericFormat
          value={produc.costo}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix={"$ "}
          decimalScale={2}
          fixedDecimalScale
        />
          </div>
          <a href="#" class="btn btn-success  btnComprar">
            <i class="fas fa-shopping-cart"></i> Comprar
          </a>
        </div>
      </div>
    </div>
  );
};
