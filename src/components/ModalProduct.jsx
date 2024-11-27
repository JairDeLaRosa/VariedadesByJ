import React, { useState } from "react";
import { StarRating } from "./StarRating";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";

export const ModalProduct = ({ product, onClickAgregarCarrito, cantidad, setCantidad }) => {
  const precio = product.costo;

  const suma = () => {
    if (cantidad < product.cantidad) {
      setCantidad(cantidad + 1);
    }
  };
  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const tecla = (e) => {
    if (e.key === "ArrowLeft") {
      resta();
    } else if (e.key === "ArrowRight") {
      suma();
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
        onKeyDown={tecla}
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
                      src="https://i.postimg.cc/tghks4G1/bolsa-De-Yute.jpg"
                      class="img-fluid rounded-start card-img-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{product.nombre}</h5>
                      <label class="card-text">{product.descripcion}</label>
                      <StarRating rating={4.5} />
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Inventario: {product.cantidad}
                        </small>
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
              <button
              data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
                onClick={() =>
                  onClickAgregarCarrito({
                    img: "https://i.postimg.cc/tghks4G1/bolsa-De-Yute.jpg",
                    nombre: product.nombre,
                    unidades: cantidad,
                    precio: precio*cantidad
                  })
                }
              >
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
