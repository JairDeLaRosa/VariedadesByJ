import React, { useState } from 'react'
import { AddProduct } from './AddProduct'

export const Productos = () => {
  const [visible, setVisible]=useState({
    menu: true,
    verProductos: false,
    agregarProductos: false,
  })
  return (
    <>{visible.menu?<div className='container mt-4 d-flex justify-content-center align-items-center p-2 flex-column gap-3'>
      <h2 className="text-center mt-3 misCompras hoverSelect">Ver productos</h2>
      <h2 className="text-center mt-3 misCompras hoverSelect" onClick={()=>{setVisible({...visible,menu: false, agregarProductos: true})}}>Agregar productos</h2>
    </div>: null}
    {visible.agregarProductos?<AddProduct setVisible={setVisible} visible={visible}/>:null}
    </>
    
    
  )
}
