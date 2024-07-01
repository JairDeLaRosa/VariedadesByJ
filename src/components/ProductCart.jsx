import React from "react";
import { NumericFormat } from "react-number-format";
export const ProductCart = ({product}) => {
  return (
    <div class="card h-100 mb-1">
      <div class="d-flex">
        <div style={{width: 150}}>
          <img
            src={`../assets/${product.img}`}
            class="img-fluid rounded-start card-img-img"
            alt="..."
          />
        </div>
        <div class="w-75">
          <div class="card-body">
            <p class="card-title"><b>{product.nombre}</b>
            </p>
            <p className="mt-2">Unidades {product.unidades}</p>
            <p className="mt-2"><NumericFormat
                value={product.precio}
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
