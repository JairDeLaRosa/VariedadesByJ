import React, { useEffect, useState } from "react";
import { AddProduct } from "./AddProduct";
import { deleteData, fetchData } from "../functions/axios";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";
import { EditarProducto } from "./EditarProducto";

export const Productos = () => {
  const [products, setProducts] = useState([]);
  const [producto, setProducto] = useState(0);
  const [visible, setVisible] = useState({
    menu: true,
    agregarProductos: false,
    editarProducto: false,
  });
  const buscarProductos = async () => {
    try {
      const result = await fetchData("productos");
      setProducts(result.sort((a, b) => a.cantidad - b.cantidad))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    buscarProductos();
    console.log(products);
  }, []);
  
  const eliminarProducto = (id) => {
    const eliminar = async () => {
      try {
        const result = await deleteData(`productos/${id}`);
        console.log(result);
        buscarProductos();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error,
          icon: "warning",
        });
      }
    };
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminar();
        
      }
    });
  };
  const editarProducto = (id) => {
    setVisible({ ...visible, menu: false, editarProducto: true });
    setProducto(id)
  };
  const buscarProducto=async({target})=>{
    await buscarProductos()
    var searchProducts=[]
    if(target.value!=""){
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.nombre.toLowerCase().includes(target.value.toLowerCase())) {
          searchProducts.push(element);
        }
      }
      setProducts(searchProducts)
    }
  }

  return (
    <>
      {visible.menu ? (
        <div className="container mt-4 d-flex  p-2 flex-column gap-3">
          <div className="d-flex justify-content-between">
            <div className="me-1">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto"
                onChange={buscarProducto}
              />
            </div>

            <span
              style={{ width: "160px" }}
              className="text-center hoverSelect col-3 btn btn-primary"
              onClick={() => {
                setVisible({ ...visible, menu: false, agregarProductos: true });
              }}
            >
              Agregar productos
            </span>
          </div>

          <table class="table container">
            <thead class="table-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <th style={{ width: "30px" }} scope="row">
                    {product.idProducto}
                  </th>
                  <td className="col-5">{product.nombre}</td>
                  <td>
                    <NumericFormat
                      value={product.costo}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                    />
                  </td>
                  <td className="col-2">{product.cantidad}</td>
                  <td className="col-2 ">
                    <button className="btn btn-primary me-1" type="button" onClick={()=>editarProducto(product.idProducto)}>
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => eliminarProducto(product.idProducto)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {visible.agregarProductos ? (
        <AddProduct
          setVisible={setVisible}
          visible={visible}
          buscarProductos={buscarProductos}
        />
      ) : null}
      {visible.editarProducto ? (
        <EditarProducto
          setVisible={setVisible}
          visible={visible}
          buscarProductos={buscarProductos}
          producto={producto}
        />
      ) : null}
    </>
  );
};
