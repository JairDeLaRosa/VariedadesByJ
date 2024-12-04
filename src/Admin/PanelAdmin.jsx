import React, { useEffect, useState } from 'react'
import {NavAdmin} from "./NavAdmin.jsx"
import { Compras } from './Compras.jsx'
import { Productos } from './Productos.jsx'
import { Categorias } from './Categorias.jsx'
import { AddProduct } from './AddProduct.jsx'
import { AgregarCategoria } from './AgregarCategoria.jsx'
import { Route, Routes } from 'react-router-dom'
import { ADMIN } from '../router/Router.js'

export const PanelAdmin = () => {
  const [menu, setMenu]=useState({
    dashboard: true,
    productos: false,
    categorias: false
  })
  return (
    <>
    <div className='container-fluid' style={{padding: "0"}}>
      <NavAdmin menu={menu} setMenu={setMenu}/>
      {menu.dashboard?<Compras/>:null}
      {menu.productos?<Productos/>:null}
      {menu.categorias?<Categorias/>:null}
    </div>
    </>
  )
}
