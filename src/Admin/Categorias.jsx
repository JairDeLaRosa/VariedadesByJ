import React, { useEffect, useState } from "react";
import { AgregarCategoria } from "./AgregarCategoria";
import { EditarCategoria } from "./EditarCategoria";
import { deleteData, fetchData } from "../functions/axios";
import Swal from "sweetalert2";

export const Categorias = () => {
  const [visible, setVisible] = useState({
    menu: true,
    editarCategoria: false,
    agregarCategoria: false,
  });
  const [categorias, setCategorias]=useState([])
  const [categoria, setCategoria]=useState(0)
  const buscarcategorias=async()=>{
    const response = await fetchData("categorias")
    setCategorias(response)
  }
  useEffect(()=>{
    buscarcategorias()
  },[])
  const eliminarcategoria=(id)=>{
    const eliminar = async () => {
          try {
            const result = await deleteData(`categoriaEliminar/${id}`);
            console.log(result);
            buscarcategorias();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } catch (error) {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: `Esta categoria contiene productos asignados! ${error}`,
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
  }
  const editarcategoria=(id)=>{
    setCategoria(id)
    setVisible({ ...visible, menu: false, editarCategoria: true });
  }
  const buscarcategoria=async({target})=>{
    await buscarcategorias()
    var searchCategorias=[]
    if(target.value!=""){
      for (let index = 0; index < categorias.length; index++) {
        const element = categorias[index];
        if (element.nombre.toLowerCase().includes(target.value.toLowerCase())) {
          searchCategorias.push(element);
        }
      }
      setCategorias(searchCategorias)
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
                    placeholder="Buscar categoria"
                    onChange={buscarcategoria}
                  />
                </div>
    
                <span
                  style={{ width: "160px" }}
                  className="text-center hoverSelect col-3 btn btn-primary"
                  onClick={() => {
                    setVisible({ ...visible, menu: false, agregarCategoria: true });
                  }}
                >
                  Agregar categoria
                </span>
              </div>
    
              <table class="table container">
                <thead class="table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">sección</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoria) => (
                    <tr>
                      <th style={{ width: "30px" }} scope="row">
                        {categoria.idCategoria}
                      </th>
                      <td className="col-5">{categoria.nombre}</td>
                      <td className="col-2">{categoria.seccion}</td>
                      <td className="col-2 ">
                        <button className="btn btn-primary me-1" type="button" onClick={()=>editarcategoria(categoria.idCategoria)}>
                          Editar
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => eliminarcategoria(categoria.idCategoria)}
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
          {visible.agregarCategoria ? (
            <AgregarCategoria
              setVisible={setVisible}
              visible={visible}
              buscarcategorias={buscarcategorias}
            />
          ) : null}
          {visible.editarCategoria ? (
            <EditarCategoria
              setVisible={setVisible}
              visible={visible}
              buscarcategorias={buscarcategorias}
              categoria={categoria}
            />
          ) : null}
    </>
  );
};
