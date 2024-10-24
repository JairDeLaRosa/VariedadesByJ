import React, { useEffect, useState } from "react";

export const LoginForm = ({setInfo}) => {
    const [data,setData]=useState({
        email: null,
        contrasena: null,
        acept: 'false'
      })
      useEffect(()=>{
        setInfo(data)
      },[data])
  return (
    <>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Correo<span className="text-danger">*</span>
        </label>
        <input type="email" className="form-control" required value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}/>
      </div>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Constraseña<span className="text-danger">*</span>
        </label>
        <input type="password" className="form-control" required value={data.contrasena} onChange={(e)=>setData({...data,contrasena: e.target.value})}/>
      </div>
      <div className="d-flex justify-content-between ms-5 me-5 mt-3">
        <div className="text-start">
          <input
            className="form-check-input ms-1"
            type="checkbox"
            id="invalidCheck"
            value={true}
         onChange={(e)=>setData({...data,acept: e.target.value})}
          />
          <label className="form-check-label ms-2" for="invalidCheck">
            Recordad contraseña
          </label>
        </div>
        <a href="#">¿Olvidó su contraseña?</a>
      </div>
      <div style={{width: 200}} className="text-start ms-5 me-5 mt-3 mb-4">
        <button className="btn btn-primary">Iniciar sesión</button>
      </div>
    </>
  );
};
