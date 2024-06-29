import React from "react";
import { Nav } from "../components/Nav";
import { CardCompra } from "../components/CardCompra";

export const MiCuenta = () => {
  return (
    <>
      <Nav />
      <section className="container mb-3 mt-3 d-flex justify-content-center flex-column align-items-center">
        <div
          className="container bg-white d-flex p-2"
          style={{ maxWidth: 800 }}
        >
          <div className="miPerfil-img">
            <img
              src="../assets/logo.jpg"
              alt="perfil"
              className="card-img-img border border-1 rounded-circle"
            />
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: 680 }}
          >
            <div className="container-fluid ">
              <div>
                <span className="display-6">
                  {" "}
                  <em>Jair De La Rosa </em>
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="">
                  <em>Jair@gmail.com </em>{" "}
                </span>{" "}
                <span className="hover text-end" style={{ width: 100 }}>
                  <em>
                    <u>Mis datos</u>
                  </em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container bg-white d-flex p-2 justify-content-center"
          style={{ maxWidth: 800 }}
        >
          <h3 className="misCompras mt-2 display-6 text-center">
            <em>Mis compras</em>
          </h3>
        </div>

        <div className="container bg-white d-flex flex-column justify-content-center pb-1" style={{ maxWidth: 800 }}>
          <CardCompra/>
          <CardCompra/>
          <CardCompra/>
          <CardCompra/>
        </div>
      </section>
    </>
  );
};
