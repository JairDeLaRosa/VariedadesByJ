import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate=useNavigate()
  const [form, setForm] = useState(true);
  const [login, setLogin] = useState("col login ms-4 me-4 select");
  const [register, setRegister] = useState("col login  ms-4 me-4");
  const [info, setInfo] = useState(null);
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (form) {
      console.log("Fomulario de Login");
      console.log(info);
      navigate("/tienda")
    } else {
      console.log("Formulario de Registro");
      console.log(info);
      Swal.fire({
        title: "¡Echo!",
        text: "¡Usuario registrado correctamente!",
        icon: "success",
      });
    }
    setForm(true);
    setLogin("col login ms-4 me-4 select");
    setRegister("col login  ms-4 me-4");
  };
  return (
    <div className="w-100 d-flex justify-content-center w-50 mt-5 mb-5">
      <div style={{width: 500}} className="text-center"><form className="form-control loginForm" onSubmit={handleSubmit}>
        <h3 className="variedadesByJ mt-3 mb-3">Variedades ByJ</h3>
        <div className="row mt-2 ms-5 me-5">
          <h3
            className={login}
            onClick={() => {
              setForm(true);
              setLogin("col login ms-4 me-4 select");
              setRegister("col login  ms-4 me-4");
            }}
          >
            <u>Login</u>
          </h3>{" "}
          <h3
            className={register}
            onClick={() => {
              setForm(false);
              setLogin("col login ms-4 me-4");
              setRegister("col login  ms-4 me-4 select");
            }}
          >
            <u>Register</u>{" "}
          </h3>
        </div>
        {form ? (
          <LoginForm setInfo={setInfo} />
        ) : (
          <Register setInfo={setInfo} />
        )}
      </form></div>
      
    </div>
  );
};
