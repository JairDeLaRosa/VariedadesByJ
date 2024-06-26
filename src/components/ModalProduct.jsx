import React, { useState } from "react";
import product from "./../assets/product.jpg";
import { StarRating } from "./StarRating";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";

export const ModalProduct = () => {
  const precio = 20000;
  const [cantidad, setCantidad] = useState(1);
  const suma = () => {
    if (cantidad < 5) {
      setCantidad(cantidad + 1);
    }
  };
  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const comprar = () => {
    Swal.fire({
      title: "Compra realizada",
      icon: "success",
    });
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Comprar producto
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <div class="card h-100" style={{ maxWidth: 770 }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={product}
                      class="img-fluid rounded-start card-img-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        Globos de estrellas con motivo de cerveza
                      </h5>
                      <label class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </label>
                      <StarRating rating={4.5} />
                      <p class="card-text">
                        <small class="text-body-secondary">Inventario: 5</small>
                      </p>
                      <p className="mt-2">Seleccione la cantidad</p>
                      <p className="mt-2">
                        <button className="btn btn-light me-3" onClick={resta}>
                          -
                        </button>
                        {cantidad}
                        <button className="btn btn-light ms-3 " onClick={suma}>
                          +
                        </button>
                      </p>
                      <label className="display-6 model-precio">
                        <NumericFormat
                          value={precio * cantidad}
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          prefix={"$ "}
                          decimalScale={2}
                          fixedDecimalScale
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Agregar al carro
              </button>
              <button type="button" class="btn btn-success" onClick={comprar}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
