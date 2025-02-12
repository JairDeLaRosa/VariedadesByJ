import React, { useEffect, useState } from "react";
import { Detalles } from "./Detalles";
import { NumericFormat } from "react-number-format";
import { fetchData } from "../functions/axios";

export const ComprasRealizadas = ({ visible, setVisible }) => {
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
   
   
   return (
     <>
       <div className="container" style={{ position: "relative" }}>
         <button
           type="button"
           class="btn"
           aria-label="Close"
           onClick={() => setVisible({ ...visible, menu: true, compras: false })}
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
                 {compra.aprobada == true ? (
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
