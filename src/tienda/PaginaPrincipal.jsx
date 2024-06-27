import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { products } from "../Data/Products";
export const PaginaPrincipal = () => {
  const [categorie,setCategorie]=useState('')
  const [inputSearch, setInputSearch]=useState('')
  const [productsSearch, setProductsSearch]=useState(null)
  const onClickSearch=(e)=>{
    e.preventDefault()
    var data=[]
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if(element.nombre.toLowerCase().includes(inputSearch.toLowerCase()) && inputSearch.length>1){
        data.push(element)
      }
    }
    setProductsSearch(data)
  }
  const onClickCategorie=(categorie)=>{
    var data=[]
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if(element.categoría.toLowerCase().includes(categorie.toLowerCase())){
        data.push(element)
      }
    }
    setProductsSearch(data)
  }
  return (
    <>
      <Nav />
      <section className="categories w-100">
        <Categories inputSearch={inputSearch} setInputSearch={setInputSearch} onClickSearch={onClickSearch} onClickCategorie={onClickCategorie}/>
      </section>
      <section className="container-fluid mb-3 mt-3">
        <Products producsSearch={productsSearch}/>
      </section>
    </>
  );
};
