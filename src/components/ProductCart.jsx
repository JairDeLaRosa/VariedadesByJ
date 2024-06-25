import React from "react";
import product from "./../assets/product.jpg";
import { NumericFormat } from "react-number-format";
export const ProductCart = () => {
  return (
    <div class="card h-100 mb-1" style={{ maxWidth: 770 }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={product}
            class="img-fluid rounded-start card-img-img"
            alt="..."
          />
        </div>
        <div class="col-md-8 d-flex align-items-center">
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
                className="me-3"
              /> <button className="btn btn-primary me-1">Editar</button><button className="btn btn-danger">Quitar</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};
