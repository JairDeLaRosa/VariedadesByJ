import React, { useState } from "react";
import { capitalizeFirstLetter } from "../functions/funciones";
import { postData } from "../functions/axios";
import Swal from "sweetalert2";

export const AgregarCategoria = ({ setVisible, visible }) => {
  const [categoria, setCategoria] = useState({
    nombre: null,
    seccion: null,
  });
  const addCategorie = async () => {
    try {
      const result = await postData("categoria", categoria);
      if (result) {
        Swal.fire({
          title: "Agregado correctamente",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategorie();
  };
  const onCategorie = ({ target }) => {
    const { value } = target;
    const str = capitalizeFirstLetter(value);
    setCategoria({ ...categoria, nombre: str });
  };

  return (
    <div className="container AgregarProducto">
      <h2 className="text-center mt-3 misCompras">Agregar categoria</h2>
      <form
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px"
        }}
        class="needs-validation mt-3"
        onSubmit={handleSubmit}
      >
        
        <div style={{position: "relative"}}><div style={{ width: "300px" }}>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ position: "absolute", right: "0", top: "-30px" }}
          onClick={() =>
            setVisible({ ...visible, menu: true, AgregarCategoria: false }) 
          }
        ></button>
          <label for="validationCustom01" class="form-label">
            Nombre de categoría
          </label>
          <input
            type="text"
            class="form-control"
            id="nombreCategoria"
            required
            value={categoria.nombre}
            onChange={onCategorie}
          />
          <div class="invalid-feedback">
            El nombre de la categoria es obligatorio.
          </div>
        </div>
        <div style={{ width: "300px" }} className="mt-3 mb-4">
          <label for="validationCustom01" class="form-label">
            Elige la sección
          </label>
          <select
            class="form-select"
            id="validationCustom04"
            required
            onChange={(e) =>
              setCategoria({ ...categoria, seccion: e.target.value })
            }
          >
            <option selected>...</option>
            <option>Papeleria</option>
            <option>Piñateria</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div>
          <button class="btn btn-primary" type="submit">
            Agregar categoria
          </button>
        </div></div>
        
      </form>
    </div>
  );
};
