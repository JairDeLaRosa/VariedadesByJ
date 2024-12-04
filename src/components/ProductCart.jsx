import React from "react";
import { NumericFormat } from "react-number-format";
export const ProductCart = ({ product, onClickQuitar }) => {
  return (
    <div class="h-100 ">
      <div class="d-flex">
        <div style={{ width: 150, height: 137 }}>
          <img
            src={product.img}
            class="img-fluid rounded-start card-img-img"
            alt={product.nombre}
          />
        </div>
        <div class="w-75 ms-2">
          <div class="card-body">
            <p class="card-title d-flex" style={{justifyContent: "space-between"}}>
              <b>{product.nombre}</b>
              <button type="button" onClick={()=>onClickQuitar(product)} class="btn-close" aria-label="Close" ></button>
            </p>
            <p className="mt-2">Unidades {product.unidades}</p>
            <p className="mt-2">
              <NumericFormat
                value={product.precio}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix={"$ "}
                decimalScale={2}
                fixedDecimalScale
              />
              {" "}
              {/* <div className="">
                <button className="btn btn-primary me-1">Editar</button>
                <button className="btn btn-danger">Quitar</button>
              </div> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
