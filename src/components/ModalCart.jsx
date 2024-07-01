import React, { useEffect } from "react";
import { ProductCart } from "./ProductCart";
import { NumericFormat } from "react-number-format";

export default function ModalCart({ productsCart,precioTotal }) {
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
                <ProductCart product={produc} />
              ))}
            </div>
            <div class="modal-footer">
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
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
