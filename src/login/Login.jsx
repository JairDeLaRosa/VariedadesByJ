import React, { useState } from "react";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { Register } from "./Register";

export const Login = () => {
  const [form, useForm] = useState(true);
  const [login, useLogin] = useState("col login ms-4 me-4 select");
  const [register, useRegister] = useState("col login  ms-4 me-4");
  return (
    <div className="container text-center w-50 mt-5 mb-5">
      <form className="form-control loginForm">
        <h3 className="variedadesByJ mt-3 mb-3">Variedades ByJ</h3>
        <div className="row mt-2 ms-5 me-5">
          <h3
            className={login}
            onClick={() => {
              useForm(true);
              useLogin("col login ms-4 me-4 select");
              useRegister("col login  ms-4 me-4");
            }}
          >
            <u>Login</u>
          </h3>{" "}
          <h3
            className={register}
            onClick={() => {
              useForm(false);
              useLogin("col login ms-4 me-4");
              useRegister("col login  ms-4 me-4 select");
            }}
          >
            <u>Register</u>{" "}
          </h3>
        </div>
        {form?<LoginForm/>: <Register/>}
      </form>
    </div>
  );
};
