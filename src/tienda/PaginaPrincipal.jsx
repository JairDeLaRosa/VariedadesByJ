import React from "react";
import { Nav } from "../components/Nav";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

export const PaginaPrincipal = () => {
  return (
    <>
      <Nav />
      <section className="categories w-100">
        <Categories/>
      </section>
      <section className="products container mb-3">
        <Products/>
      </section>
    </>
  );
};
