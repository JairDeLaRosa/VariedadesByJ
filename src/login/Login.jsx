import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { postData } from "../functions/axios";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(true);
  const [login, setLogin] = useState("col login ms-4 me-4 select");
  const [register, setRegister] = useState("col login  ms-4 me-4");
  const [info, setInfo] = useState(null);
  const [isLoanding, setIsLoanding]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      console.log("Fomulario de Login");
      setIsLoanding(true)
      const handleChektUser = async () => {
        try {
          const result = await postData("check-usuario", info);
          if (result) {
            if(result.tipo=="admin"){
              localStorage.setItem("nombre",result.nombre)
              localStorage.setItem("apellido",result.apellido)
              navigate("/admin");
            }else{
            localStorage.setItem("idCliente",result.idCliente)
            localStorage.setItem("nombre",result.nombre)
            localStorage.setItem("apellido",result.apellido)
            localStorage.setItem("email",result.email)
            localStorage.setItem("departamento",result.departamento)
            localStorage.setItem("municipio",result.municipio)
            localStorage.setItem("direccion",result.direccion)
            localStorage.setItem("telefono",result.telefono)
            localStorage.setItem("sesion",true)
            navigate("/tienda");
            }
            
            setIsLoanding(false)
          }
        } catch (error) {
          setIsLoanding(false)
          if (error.response.data == "Correo invalido") {
            setIsLoanding(false)
            Error=false;
            Swal.fire({
              title: "Error",
              text: error.response.data,
              icon: "error",
            });
          } else if(error.response.data == "Contrasena invalida"){
            setIsLoanding(false)
            Error=false;
            Swal.fire({
              title: "Error",
              text: error.response.data,
              icon: "error",
            });
          }else{
            setIsLoanding(false)
            Swal.fire({
              title: "Error",
              text: "Error de conexion con la base de datos.",
              icon: "error",
            });
          }
       
            
          console.error("Error adding data:", error);
            
        }
      };
      handleChektUser();
      console.log(info);
    } else {
      console.log("Formulario de Registro");
      setIsLoanding(true)
      const handleAdd = async () => {
        try {
          const result = await postData("clientes", info);
          if (result) {
            setIsLoanding(false)
            Swal.fire({
              title: "¡Echo!",
              text: "¡Usuario registrado correctamente!",
              icon: "success",
            });
            setForm(true);
            setLogin("col login ms-4 me-4 select");
            setRegister("col login  ms-4 me-4");
          }
          console.log(result);
        } catch (error) {
          setIsLoanding(false)
          Swal.fire({
            title: "¡Error!",
            text: "¡Usuario no se pudo registrar el usuario!",
            icon: "error",
          });
          console.error("Error adding data:", error);
        }
      };
      handleAdd();
      console.log(info);
    }
  };
  return (
    <div className="w-100 d-flex justify-content-center w-50 mt-5 mb-5">
      {isLoanding ?<div>Loanding...</div>:<div style={{ width: 500 }} className="text-center">
        <form className="form-control loginForm" onSubmit={handleSubmit}>
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
        </form>
      </div>}
    
      
    </div>
  );
};
