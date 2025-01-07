import React, { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";
import { sesion } from "../functions/Sesion";

export const ModalProduct = ({
  product,
  onClickAgregarCarrito,
  cantidad,
  setCantidad,
}) => {
  const onClickAgregarAlCarro = () => {
    if (localStorage.getItem("sesion")) {
      if (product.costoOferta == null) {
        onClickAgregarCarrito({
          img: product.imagenes[0].url,
          nombre: product.nombre,
          unidades: cantidad,
          precio: product.costo * cantidad,
        });
      } else {
        onClickAgregarCarrito({
          img: product.imagenes[0].url,
          nombre: product.nombre,
          unidades: cantidad,
          precio: product.costoOferta * cantidad,
        });
      }
    } else {
      Swal.fire({
        title: "Necesitas iniciar sesión primero",
        icon: "warning",
      });
      setCantidad(1)
    }
  };
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
    if(localStorage.getItem("sesion")){
      let mensaje = "Hola, quiero comprar este producto:";
    if (product.costoOferta == null) {
      mensaje += `
      * ${product.nombre}
        Cantidad: ${cantidad}
        Precio: $${(product.costo * cantidad)}
        `;
    }else{
      mensaje += `
      * ${product.nombre}
        Cantidad: ${cantidad}
        Precio: $${(product.costoOferta * cantidad)}
        `;
    }
    const url = `https://wa.me/3008021971?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    setCantidad(1)
    Swal.fire({
      title: "Pedido realizado",
      icon: "success",
    });
    }else{
      setCantidad(1)
      Swal.fire({
        title: "Necesitas iniciar sesión primero",
        icon: "warning",
      });
    }
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
              <div class="h-100" style={{ maxWidth: 770 }}>
                <div class="row g-3">
                  <div class="col-md-5">
                    <img
                      src={product.imagenes[0].url}
                      class="img-fluid rounded-start card-img-img"
                      alt={product.nombre}
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h5 class="card-title">{product.nombre}</h5>
                      <br />
                      <label class="card-text">{product.descripcion}</label>
                      <br />
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
                      <label className="display-6 model-precio d-flex flex-column gap-4">
                        {product.costoOferta != null ? (
                          <>
                            <div className="priceOfertModal">
                              <NumericFormat
                                className="priceModal"
                                value={product.costo * cantidad}
                                displayType="text"
                                thousandSeparator="."
                                decimalSeparator=","
                                prefix={"$ "}
                                decimalScale={2}
                                fixedDecimalScale
                              />
                            </div>
                            <NumericFormat
                              className="priceModal"
                              value={product.costoOferta * cantidad}
                              displayType="text"
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix={"$ "}
                              decimalScale={2}
                              fixedDecimalScale
                            />
                          </>
                        ) : (
                          <>
                            <NumericFormat
                              className="priceModal"
                              value={product.costo * cantidad}
                              displayType="text"
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix={"$ "}
                              decimalScale={2}
                              fixedDecimalScale
                            />
                          </>
                        )}
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
                onClick={() => onClickAgregarAlCarro()}
              >
                Agregar al carro
              </button>
              <button type="button" class="btn btn-success" onClick={comprar}>
                Pedir por wahasapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
