import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const NavAdmin = ({menu, setMenu}) => {
  const [active, setActive]=useState({
    dashboard: "d-flex align-items-center hover nav-link nav-it active",
    productos: "d-flex align-items-center hover nav-link nav-it",
    categorias: "d-flex align-items-center hover nav-link nav-it"
  })
  const onCLickDashboard=()=>{
    setActive({
    dashboard: "d-flex align-items-center hover nav-link nav-it active",
    productos: "d-flex align-items-center hover nav-link nav-it",
    categorias: "d-flex align-items-center hover nav-link nav-it"
    })
    setMenu({
      dashboard: true,
    productos: false,
    categorias: false
    })
  }
  const onCLickAddProduct=()=>{
    setActive({
      dashboard: "d-flex align-items-center hover nav-link nav-it",
      productos: "d-flex align-items-center hover nav-link nav-it active",
      categorias: "d-flex align-items-center hover nav-link nav-it"
    })
    setMenu({
      dashboard: false,
    productos: true,
    categorias: false
    })
  }
  const onCLickcategorias=()=>{
    setActive({
      dashboard: "d-flex align-items-center hover nav-link nav-it",
      productos: "d-flex align-items-center hover nav-link nav-it",
      categorias: "d-flex align-items-center hover nav-link nav-it active"
    })
    setMenu({
      dashboard: false,
    productos: false,
    categorias: true
    })
  }
  const navigate = useNavigate();
  const onSalir = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-nav">
      <div class="container">
        <div
          className="d-flex align-items-center"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={"../assets/logo.jpg"}
            alt="Logo"
            width={60}
            className="mt-2 mb-2"
          />{" "}
          <div className="variedadesByJTitle">
            <em>Variedades y Piñatería B y J</em>{" "}
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <span
                  className={active.dashboard}
                  onClick={() => onCLickDashboard()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-house me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  Compras
                </span>
              </li>

              <li class="nav-item">
                <span
                  className={active.productos}
                  onClick={() => onCLickAddProduct()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-fill ms-2 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                 Productos
                </span>
              </li>
              <li class="nav-item">
                <span
                  className={active.categorias}
                  onClick={() => onCLickcategorias()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-fill ms-2 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                 Categorias
                </span>
              </li>
              <li class="nav-item">
                <span
                  className="d-flex align-items-center hover nav-link nav-it"
                  onClick={() => onSalir()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right ms-2 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Salir
                </span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};
