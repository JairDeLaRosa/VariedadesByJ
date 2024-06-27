import React from "react";
import { NumericFormat } from "react-number-format";

export const Card = ({ produc, onClick }) => {
  return (
    <button
      className="ms-3  mt-3 me-3 mb-2 cards text-center"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      type="button"
      onClick={()=>onClick(produc)}
    >
      <div className="card-img">
        <img src={`../assets/${produc.img}`} alt="..." className="card-img-img"></img>{" "}
      </div>
      <div className="nameProduct">
        <span>{produc.nombre}</span>
      </div>
      <span>Unidades : {produc.unidades}</span>
      <span className="card-precio mt-1">
        <NumericFormat
          value={produc.precio}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix={"$ "}
          decimalScale={2}
          fixedDecimalScale
        />
      </span>
    </button>
  );
};
