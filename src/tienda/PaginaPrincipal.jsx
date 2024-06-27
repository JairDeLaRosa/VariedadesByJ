import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { products } from "../Data/Products";
export const PaginaPrincipal = () => {
  const [categorie, setCategorie] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState(null);
  const onClickSearch = (e) => {
    e.preventDefault();
    var data = [];
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (
        element.nombre.toLowerCase().includes(inputSearch.toLowerCase()) &&
        inputSearch.length > 1
      ) {
        data.push(element);
      }
    }
    setProductsSearch(data);
  };
  const onClickCategorie = (categorie) => {
    var data = [];
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (element.categoría.toLowerCase().includes(categorie.toLowerCase())) {
        data.push(element);
      }
    }
    setProductsSearch(data);
  };
  return (
    <>
      <Nav />
      <section className="categories w-100 d-flex align-items-center">
        <button
          className="cart btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          type="button"
        >
          <span className="cartCount">0</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#ffffff"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </button>
        <div className="container">
          {" "}
          <Categories
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            onClickSearch={onClickSearch}
            onClickCategorie={onClickCategorie}
          />
        </div>
      </section>
      <section className="container-fluid mb-3 mt-3">
        <Products producsSearch={productsSearch} />
      </section>
    </>
  );
};
