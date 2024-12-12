import React, { useState } from 'react'
import { AgregarCategoria } from './AgregarCategoria'


export const Categorias = () => {
  const [visible, setVisible]=useState({
    menu: true,
    verCategorias: false,
    AgregarCategoria: false,
  })
  return (
    <>
    {visible.menu?<div className='container mt-4 d-flex justify-content-center align-items-center p-2 flex-column gap-3'>
      <h2 className="text-center mt-3 misCompras hoverSelect">Ver categorias</h2>
      <h2 className="text-center mt-3 misCompras hoverSelect" onClick={()=>{setVisible({...visible,menu: false, AgregarCategoria: true})}}>Agregar categorias</h2>
    </div>:null}
    
    {visible.AgregarCategoria?<AgregarCategoria setVisible={setVisible} visible={visible}/>:null}
    </>
  )
}
