import React, { useEffect, useState } from 'react'
import {NavAdmin} from "./NavAdmin.jsx"
import { Dashboard } from './Dashboard.jsx'
import { AddProduct } from './AddProduct.jsx'
import { AgregarCategoria } from './AgregarCategoria.jsx'

export const PanelAdmin = () => {
  const [menu, setMenu]=useState({
    dashboard: true,
    addProducts: false,
    addCategoria: false
  })
  return (
    <>
    <div className='container-fluid' style={{padding: "0"}}>
      <NavAdmin menu={menu} setMenu={setMenu}/>
      {menu.dashboard?<Dashboard/>:null}
      {menu.addProducts?<AddProduct/>:null}
      {menu.addCategoria?<AgregarCategoria/>:null}
    </div>
    
    </>
  )
}
