import React from "react";
import { Nav } from "../components/Nav";
import { Seacrch } from "../components/Seacrch";

export const PaginaPrincipal = () => {
  return (
    <>
      <Nav />
      <section className="searchAndCard w-100">
        <div className="container searchAndCard d-flex justify-content-between align-items-center">
          <Seacrch />
          <div className="hover">
            <div class="nav-item dropdown ">
              <span
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Papelería
              </span>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">Action</span>
                </li>
                <li>
                  <span class="dropdown-item">Another action</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hover">
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Piñatería
              </span>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">Action</span>
                </li>
                <li>
                  <span class="dropdown-item">Another action</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hover">
            <div class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Moda
              </span>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">Action</span>
                </li>
                <li>
                  <span class="dropdown-item">Another action</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hover cart">
            <span className="cartCount">0</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};
