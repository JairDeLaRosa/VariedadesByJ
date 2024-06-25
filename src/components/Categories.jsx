import React from 'react'
import { Seacrch } from './Seacrch'

export const Categories = () => {
  return (
    <div className="container categories d-flex justify-content-between align-items-center">
          <Seacrch />
          <div>
            <div class="nav-item dropdown ">
              <span
                class="nav-link dropdown-toggle hover"
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
          <div>
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle hover"
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
          <div>
            <div class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle hover"
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
          <button className="hover cart btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" type='button'>
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
          </button>
        </div>
  )
}
