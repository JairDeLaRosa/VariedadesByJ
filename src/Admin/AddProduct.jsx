import React, { useEffect, useState } from "react";
import { fetchData, postData } from "../functions/axios";
import axios from "axios";

export const AddProduct = ({ setVisible, visible }) => {
  const [checkOferta, setCheckOferta] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [product, setProduct] = useState({
    nombre: null,
    costo: null,
    cantidad: null,
    descripcion: null,
    categoria: null,
    costoOferta: null
  });
  const [images, setImages] = useState({
    files: null,
  });
  const formData = new FormData();
  const getCategories = async () => {
    try {
      const result = await fetchData("categorias");
      setCategorias(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const obtenerCategoria = ({ target }) => {
    const { value } = target;
    categorias.forEach((categoria) => {
      if (categoria.nombre == value) {
        setProduct({ ...product, categoria: categoria });
        console.log(value);
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images.files) {
      alert("Por favor, selecciona archivos");
      return;
    }
    console.log(product);
    try {
      const result = await postData("producto", product);
      console.log(result);
      console.log(images.files);
      formData.append("productoId", result.idProducto);
      for (let i = 0; i < images.files.length; i++) {
        formData.append("files", images.files[i]);
      }
      const response = await axios.post(
        "http://localhost:8080/byj/imagenesProductos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        alert("Ingresado correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container AgregarProducto">
      <h2 className="text-center mt-3 misCompras">Agregar producto</h2>
      <form
        style={{ width: "70vw", position: "relative" }}
        class="row g-3 needs-validation mt-3"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ position: "absolute", right: "5px", top: "-30px" }}
          onClick={() =>
            setVisible({ ...visible, menu: true, agregarProductos: false })
          }
        ></button>

        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">
            Nombre del producto
          </label>
          <input
            type="text"
            class="form-control"
            id="nombreProduct"
            required
            value={product.nombre}
            onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
          />
          <div class="invalid-feedback">
            El nombre de usuario es obligatorio.
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Precio
          </label>
          <input
            type="number"
            class="form-control"
            id="validationCustom02"
            value={product.costo}
            onChange={(e) => setProduct({ ...product, costo: e.target.value })}
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
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
          )}

          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">
            Descripcion
          </label>
          <textarea
            type="text"
            class="form-control"
            id="validationCustom03"
            value={product.descripcion}
            onChange={(e) =>
              setProduct({ ...product, descripcion: e.target.value })
            }
          />
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            Categoría
          </label>
          <select
            class="form-select"
            id="validationCustom04"
            required
            onChange={obtenerCategoria}
          >
            <option selected>Sin categoria</option>
            {categorias.map((categoria) => (
              <option>{categoria.nombre}</option>
            ))}
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom02" class="form-label">
            Cantidad
          </label>
          <input
            type="number"
            class="form-control"
            id="validationCustom02"
            value={product.cantidad}
            onChange={(e) =>
              setProduct({ ...product, cantidad: e.target.value })
            }
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">
              Inserte imagenes del producto
            </label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
              onChange={(e) => setImages({ ...images, files: e.target.files })}
            />
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
