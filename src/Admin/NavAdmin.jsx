import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const NavAdmin = ({ menu, setMenu }) => {
  const [active, setActive] = useState({
    dashboard: "d-flex align-items-center hover nav-link nav-it active",
    productos: "d-flex align-items-center hover nav-link nav-it",
    categorias: "d-flex align-items-center hover nav-link nav-it",
  });
  const onCLickDashboard = () => {
    setActive({
      dashboard: "d-flex align-items-center hover nav-link nav-it active",
      productos: "d-flex align-items-center hover nav-link nav-it",
      categorias: "d-flex align-items-center hover nav-link nav-it",
    });
    setMenu({
      dashboard: true,
      productos: false,
      categorias: false,
    });
  };
  const onCLickAddProduct = () => {
    setActive({
      dashboard: "d-flex align-items-center hover nav-link nav-it",
      productos: "d-flex align-items-center hover nav-link nav-it active",
      categorias: "d-flex align-items-center hover nav-link nav-it",
    });
    setMenu({
      dashboard: false,
      productos: true,
      categorias: false,
    });
  };
  const onCLickcategorias = () => {
    setActive({
      dashboard: "d-flex align-items-center hover nav-link nav-it",
      productos: "d-flex align-items-center hover nav-link nav-it",
      categorias: "d-flex align-items-center hover nav-link nav-it active",
    });
    setMenu({
      dashboard: false,
      productos: false,
      categorias: true,
    });
  };
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
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-tags me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
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
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
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
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-list-nested me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                    />
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
