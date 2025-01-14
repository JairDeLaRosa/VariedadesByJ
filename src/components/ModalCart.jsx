import React from "react";
import { ProductCart } from "./ProductCart";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";

export default function ModalCart({ productsCart,precioTotal,setProductsCart }) {
  
  const comprar = () => {
    let mensaje="Hola, quiero comprar los siguientes productos:"
    if(productsCart.length!=0){
      productsCart.forEach(produto=>{
        mensaje+=`
      * ${produto.nombre}
        Cantidad: ${produto.unidades}
        Precio: $${produto.precio}
        `
      })
      mensaje+=`
      Precio total: $${precioTotal}`
    }
    const url=`https://wa.me/3008021971?text=${encodeURIComponent(mensaje)}`
    window.open(url,"_blank")
    Swal.fire({
      title: "Pedido realizado",
      icon: "success",
    });
  };
  const onClickQuitar=(producto)=>{
    const arrayProductsFilter = productsCart.filter(obj => 
      JSON.stringify(obj) !== JSON.stringify(producto)
    );
    setProductsCart(arrayProductsFilter)
  }
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modalCart w-100 mt-4">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Tu carrito
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {productsCart.map((produc) => (
                <ProductCart product={produc} onClickQuitar={onClickQuitar}/>
              ))}
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <span className="display-6">
                <NumericFormat
                  value={precioTotal}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={"$ "}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </span>
              <button type="button" class="btn btn-success" onClick={comprar}>
                Pedir por wahasapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
