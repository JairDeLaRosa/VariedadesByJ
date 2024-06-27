import React from "react";
import { NumericFormat } from "react-number-format";
export const ProductCart = () => {
  return (
    <div class="card h-100 mb-1">
      <div class="d-flex">
        <div style={{width: 150}}>
          <img
            src={`../assets/product.jpg`}
            class="img-fluid rounded-start card-img-img"
            alt="..."
          />
        </div>
        <div class="w-75">
          <div class="card-body">
            <p class="card-title"><b>Globos de estrellas con motivo de cerveza</b>
            </p>
            <p className="mt-2">Unidades 3</p>
            <p className="mt-2"><NumericFormat
                value={200000}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix={"$ "}
                decimalScale={2}
                fixedDecimalScale
              /> <div className="buttos-cart"><button className="btn btn-primary me-1">Editar</button><button className="btn btn-danger">Quitar</button></div></p>
          </div>
        </div>
      </div>
    </div>
  );
};
