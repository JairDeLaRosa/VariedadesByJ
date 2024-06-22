import React from "react";

export const LoginForm = () => {
  return (
    <>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Correo<span className="text-danger">*</span>
        </label>
        <input type="email" className="form-control" required />
      </div>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Constraseña<span className="text-danger">*</span>
        </label>
        <input type="password" className="form-control" required />
      </div>
      <div className="d-flex justify-content-between ms-5 me-5 mt-3">
        <div className="text-start">
          <input
            class="form-check-input ms-1"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label ms-2" for="invalidCheck">
            Acepto terminos y condiciones
          </label>
        </div>
        <a href="#">¿Olvidó su contraseña?</a>
      </div>
      <div className="w-100 text-start ms-5 me-5 mt-3 mb-4">
        <button className="btn btn-primary w-25">Login</button>
      </div>
    </>
  );
};
