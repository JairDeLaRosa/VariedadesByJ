import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";

import { fetchData } from "../functions/axios";
import { Products } from "../components/Products";
import { Categories } from "../components/Categories";
import { useParams } from "react-router-dom";
export const PaginaPrincipal = () => {
  const {product}=useParams()
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias]=useState([])
  const [isLoanding, setIsLoanding]=useState(true);
  const [isLoandingSearch, setIsLoandingSearch]=useState(false)
  useEffect(() => {
    const handleCargarProductos = async () => {
      try {
        const productos = await fetchData("productos");
        const getCategories = await fetchData("categorias");
        setCategorias(getCategories);
        setProducts(productos);
        setIsLoanding(false)
      } catch (err) {
        console.log(err);
      }
    };
    handleCargarProductos();
  }, []);
  const [count, setCount] = useState(0);
  const countCart = () => {
    setCount(count + 1);
  };

  const [productsSearch, setProductsSearch] = useState([]);
  useEffect(()=>{
    var data = [];
    if(product!=undefined){
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.nombre.toLowerCase().includes(product.toLowerCase())) {
          data.push(element);
        }
      }
    }
    console.log(data)
    setProductsSearch(data);
    setIsLoandingSearch(false)
  },[product])

  const onClickCategorie = (categorie) => {
    var data = [];
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.categoria.nombre.toLowerCase().includes(categorie.toLowerCase())) {
          data.push(element);
        }
      } 
    setProductsSearch(data);
  };
  return (
    <>
      <Nav sesion={localStorage.getItem("sesion")} />

      <button
        className="cart btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
        type="button"
      >
        <span className="cartCount">{count}</span>
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
      <Categories
            onClickCategorie={onClickCategorie}
            categories={categorias}
            setIsLoandingSearch={setIsLoandingSearch}
          />

      <section
        className="container mb-3 mt-3 d-flex justify-content-center"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        {isLoanding ? (<h2>Is loaning...</h2>):(<Products loandingSearch={isLoandingSearch} countCart={countCart} products={products} producsSearch={productsSearch} product={product}/>)}
        
      </section>
    </>
  );
};
