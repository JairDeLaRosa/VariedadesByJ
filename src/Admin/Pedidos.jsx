import React, { useEffect, useState } from "react";
import { Detalles } from "./Detalles";
import { deleteData, fetchData, postData } from "../functions/axios";
import Swal from "sweetalert2";
import { NumericFormat } from "react-number-format";

export const Pedidos = ({ visible, setVisible }) => {
  const [compras, setCompras] = useState([]);
  const [detalleCompra, setDetalleCompra] = useState({
    idCompra: 0,
    fecha: "",
    cliente: {
      nombre: "",
      apellido: "",
      email: "",
      idCliente: 0,
      departamento: "",
      municipio: "",
      direccion: "",
      telefono: "",
    },
    total: 26000.0,
    aprobada: false,
    detalleCompras: [
      {
        idDetalleCompra: 0,
        cantidad: "0",
        precioUnitario: 13000.0,
        producto: {
          nombre: "",
        },
      },
    ],
  });
  const obtenerCompras = async () => {
    const result = await fetchData("compras");
    console.log(result);
    setCompras(result);
  };
  useEffect(() => {
    obtenerCompras();
  }, []);
  const descartar = async (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, descartar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteData(`compras/${id}`);
        obtenerCompras();
        Swal.fire({
          title: "descartado!",
          icon: "success",
        });
      }
    });
  };
  const aprobar=async(compra)=>{
    const data={
      idCompra: compra.idCompra,
      cliente: compra.cliente,
      aprobada:true,
      fecha: compra.fecha,
      total: compra.total
    }
    console.log(data)
    const result=await postData('compras', data)
    compra.detalleCompras.map(async(detalleCompra)=>{
      if(detalleCompra.producto.cantidad>=detalleCompra.cantidad){
        var dataProduct={...detalleCompra.producto, cantidad: detalleCompra.producto.cantidad - detalleCompra.cantidad}
      const result2=await postData("producto",dataProduct)
      obtenerCompras()
      Swal.fire({
        title: "Compra aprobada!",
        icon: "success",
      });
      }
    })
  }
  return (
    <>
      <div className="container" style={{ position: "relative" }}>
        <button
          type="button"
          class="btn"
          aria-label="Close"
          onClick={() => setVisible({ ...visible, menu: true, pedidos: false })}
        >
          <i
            class="bi bi-arrow-left"
            style={{ fontSize: "30px", position: "absolute", right: "10px" }}
          ></i>
        </button>
        <table class="table container">
          <thead class="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Cliente</th>
              <th scope="col">Fecha</th>
              <th scope="col">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {compras.map((compra) => (
              <>
                {compra.aprobada == false ? (
                  <tr>
                    <th style={{ width: "30px" }} scope="row">
                      {compra.idCompra}
                    </th>
                    <td className="col-4">
                      {compra.cliente.nombre} {compra.cliente.apellido}
                    </td>
                    <td className="col-3">{compra.fecha}</td>
                    <td className="col-3">
                      $<NumericFormat
                        value={compra.total}
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={0}
                        fixedDecimalScale
                      />
                    </td>
                    <td className="col-2 ">
                      <div className="d-flex">
                        <button
                          className="btn btn-info me-1"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#detalles"
                          onClick={() => setDetalleCompra(compra)}
                        >
                          Detalles
                        </button>
                        <Detalles compra={detalleCompra} />
                        <button className="btn btn-success me-1" type="button" onClick={()=>aprobar(compra)}>
                          Aprobar
                        </button>
                        <button
                          className="btn btn-danger me-1"
                          type="button"
                          onClick={() => descartar(compra.idCompra)}
                        >
                          Descartar
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
