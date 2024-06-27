import React from "react";
import { NumericFormat } from "react-number-format";
export const Card = ({img, name, unidades, precio}) => {
  return (
    <button className="ms-3  mt-3 me-3 mb-2 cards text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
      <div className="card-img">
        <img src={img} alt="..." className="card-img-img"></img>{" "}
      </div>
      <div className="nameProduct">
        <span>{name}</span>
      </div>
      <span>Unidades : {unidades}</span>
      <span className="card-precio mt-1"><NumericFormat
                          value={precio}
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          prefix={"$ "}
                          decimalScale={2}
                          fixedDecimalScale
                        /></span>
    </button>
  );
};
