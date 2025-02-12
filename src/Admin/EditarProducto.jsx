import React, { useEffect, useState } from "react";
import { fetchData, postData } from "../functions/axios";
import Swal from "sweetalert2";

export const EditarProducto = ({
  setVisible,
  visible,
  buscarProductos,
  producto,
}) => {
    const [product, setProduct] = useState({
        nombre: "",
        costo: "",
        cantidad: "",
        costoOferta: "",
      });
    const [checkOferta, setCheckOferta] = useState(false);
  const buscarProducto = async () => {
    const response = await fetchData(`productos/${producto}`);
    setProduct({...response, costoOferta: ""})
  };
  useEffect(() => {
    buscarProducto();   
  }, []);
  const actualizar=async()=>{
    console.log(product)
    setProduct({...product, idProducto: producto})
    try {
        const result =await postData("producto",product)
        console.log(result)
        buscarProductos()
                Swal.fire({
                  title: "Actualizado correctamente",
                  icon: "success",
                });
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
    <div className="container AgregarProducto">
      <h2 className="text-center mt-3 misCompras">Editar producto</h2>
      <form
        style={{ width: "70vw", position: "relative",maxWidth: "500px"}}
        class="row g-3 needs-validation mt-3 container justify-content-center"
      >
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ position: "absolute", right: "5px", top: "-30px" }}
          onClick={() =>
            setVisible({ ...visible, menu: true, editarProducto: false })
          }
        ></button>
        <label className="">Nombre</label>
        <input type="text" placeholder="Nuevo nombre" className="form-control" value={product.nombre} onChange={(e)=>setProduct({...product, nombre: e.target.value})}/>
        <label className="">Cantidad</label>
        <input type="number" placeholder="Nueva Cantidad" className="form-control" value={product.cantidad} onChange={(e)=>setProduct({...product, cantidad: e.target.value})}/>
        <label className="">costo</label>
        <input type="number" placeholder="Nuevo costo" className="form-control" value={product.costo} onChange={(e)=>setProduct({...product, costo: e.target.value})}/>
        <div className="justify-content-star"> <label for="validationCustom02" class="form-label">
            Precio de oferta
          </label>
          <input
            class="form-check-input ms-2"
            type="checkbox"
            id="flexCheckDefault"
            value={checkOferta}
            onChange={(e) => setCheckOferta(!checkOferta)}
          />
          {checkOferta ? (
            <input
              aria-label="Disabled input example"
              type="number"
              class="form-control"
              id="validationCustom02"
              onChange={(e) =>
                setProduct({ ...product, costoOferta: e.target.value })
              }
              required
            />
          ) : (
            <input
              aria-label="Disabled input example"
              type="number"
              class="form-control"
              id="validationCustom02"
              disabled
            />
          )}</div>
        
          <button class="btn btn-primary" type="button" style={{width: "100px"}} onClick={actualizar}>
            Actualizar
          </button>
      </form>
    </div>
  );
};
