import React from "react";
import { Seacrch } from "./Seacrch";

export const Categories = ({
  inputSearch,
  setInputSearch,
  onClickSearch,
  onClickCategorie,
}) => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ background: "#ffffff" }}>
      <div class="container-fluid">
        <div class="navbar-brand" style={{width: 230}}>
          <Seacrch inputSearch={inputSearch} onClickSearch={onClickSearch} setInputSearch={setInputSearch}/>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown2"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown2">
          <ul class="navbar-nav">
            <li class="nav-item dropdown ms-3 me-3">
              <span
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Papelería
              </span>
              <ul class="dropdown-menu">
                <li onClick={() => onClickCategorie("cinta")}>
                  <span class="dropdown-item li-categories">Cintas</span>
                </li>
                <li onClick={() => onClickCategorie("papeles")}>
                  <span class="dropdown-item">Papeles</span>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown ms-3 me-3">
              <span
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Piñatería
              </span>
              <ul class="dropdown-menu">
                <li
                  onClick={() => onClickCategorie("herramientas para fiestas")}
                >
                  <span class="dropdown-item">Herramientas para fiestas</span>
                </li>
                <li onClick={() => onClickCategorie("globos")}>
                  <span class="dropdown-item">Globos</span>
                </li>
                <li onClick={() => onClickCategorie("bolsas")}>
                  <span class="dropdown-item">Bolsas</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div className="container categories d-flex justify-content-between align-items-center">
    //       <Seacrch inputSearch={inputSearch} setInputSearch={setInputSearch} onClickSearch={onClickSearch}/>
    // <div>
    // <div class="nav-item dropdown">
    //   <span
    //     class="dropdown-toggle hover"
    //     href="#"
    //     role="button"
    //     data-bs-toggle="dropdown"
    //     aria-expanded="false"
    //   >
    //     Papelería
    //   </span>
    //   <ul class="dropdown-menu">
    // <li onClick={()=>onClickCategorie("cinta")}>
    //   <span class="dropdown-item">Cintas</span>
    // </li>
    // <li onClick={()=>onClickCategorie("papeles")}>
    //   <span class="dropdown-item">Papeles</span>
    // </li>
    //   </ul>
    // </div>
    // </div>
    // <div>
    //   <div className="nav-item dropdown">
    //     <span
    //       className=" dropdown-toggle hover"
    //       href="#"
    //       role="button"
    //       data-bs-toggle="dropdown"
    //       aria-expanded="false"
    //     >
    //       Piñatería
    //     </span>
    //     <ul class="dropdown-menu">
    // <li onClick={()=>onClickCategorie("herramientas para fiestas")}>
    //   <span class="dropdown-item">Herramientas para fiestas</span>
    // </li>
    // <li onClick={()=>onClickCategorie("globos")}>
    //   <span class="dropdown-item">Globos</span>
    // </li>
    // <li onClick={()=>onClickCategorie("bolsas")}>
    //   <span class="dropdown-item">Bolsas</span>
    // </li>
    //     </ul>
    //   </div>
    // </div>
    // <button className="hover cart btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" type='button'>
    //   <span className="cartCount">0</span>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="36"
    //     height="36"
    //     fill="currentColor"
    //     className="bi bi-cart"
    //     viewBox="0 0 16 16"
    //   >
    //     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    //   </svg>
    // </button>
    //     </div>
  );
};
