import React from "react";
import { NumericFormat } from "react-number-format";

export const Detalles = ({ compra }) => {
  return (
    <div
      class="modal fade"
      id="detalles"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 className="card-subtitle">Detalles de la Compra</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h4 className="card-subtitle mb-3">Información del Cliente</h4>
            <div className="row mb-4">
              <div className="col-md-6">
                <p>
                  <strong>Nombre:</strong> {compra.cliente.nombre}
                </p>
                <p>
                  <strong>Email:</strong> {compra.cliente.email}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Teléfono:</strong> {compra.cliente.telefono}
                </p>
                <p>
                  <strong>Dirección:</strong> {compra.cliente.direccion},
                  {compra.cliente.municipio},{compra.cliente.departamento}
                </p>
              </div>
            </div>

            <h4 className="card-subtitle mb-3">Información de la compra</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {compra.detalleCompras.map((detalleCompra) => (
                    <tr>
                      <td>{detalleCompra.producto.nombre}</td>
                      <td>{detalleCompra.cantidad}</td>
                      <td>$<NumericFormat
                          value={detalleCompra.precioUnitario}
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={0}
                          fixedDecimalScale
                        /></td>
                      <td>
                        $
                        <NumericFormat
                          value={
                            detalleCompra.cantidad *
                            detalleCompra.precioUnitario
                          }
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={0}
                          fixedDecimalScale
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <strong>Fecha de la Compra:</strong> {compra.fecha}
                </p>
              </div>
              <div className="col-md-6 text-end">
                <h5>
                  <strong>Total:</strong> $<NumericFormat
                          value={compra.total}
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={0}
                          fixedDecimalScale
                        />
                </h5>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
