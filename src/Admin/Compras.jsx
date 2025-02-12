import React, { useState } from 'react'
import { ComprasRealizadas } from './ComprasRealizadas';
import { Pedidos } from './Pedidos';

export const Compras = () => {
  const [visible, setVisible] = useState({
    menu: true,
    compras: false,
    pedidos: false,
  });
  return (
    <>
    {visible.menu?<div className='container mt-4 d-flex justify-content-center align-items-center p-2 flex-column gap-3'>
      <h2 className="text-center mt-3 misCompras hoverSelect" onClick={()=>setVisible({...visible, menu: false, compras: true})}>Compras</h2>
      <h2 className="text-center mt-3 misCompras hoverSelect" onClick={()=>setVisible({...visible, menu: false, pedidos: true})}>Pedidos</h2>
    </div>:null}
    {visible.compras?<ComprasRealizadas visible={visible} setVisible={setVisible}/>:null}
    {visible.pedidos?<Pedidos visible={visible} setVisible={setVisible}/>:null}
    </>
    
  )
}
