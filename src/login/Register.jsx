import React from "react";

export const Register = () => {
  return (
    <>
      <div className="text-start ms-5 me-5 mt-3 d-flex justify-content-between">
        <div>
          <label className="form-label">
            Nombres<span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div>
          <label className="form-label">
            Apellidos<span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" required />
        </div>
      </div>
      <div className="text-start ms-5 me-5 mt-3 d-flex justify-content-between">
        <div>
          <label for="inputEmail4" class="form-label">
            Departamento
          </label>
          <select
            name="departamento"
            class="form-select form-control"
            id="validationCustom04"
          >
            <option selected disabled value="">
              Seleccione su departamento
            </option>
            <option value="amazonas">Amazonas</option>
            <option value="antioquia">Antioquia</option>
            <option value="arauca">Arauca</option>
            <option value="atlantico">Atlántico</option>
            <option value="bolivar">Bolívar</option>
            <option value="boyaca">Boyacá</option>
            <option value="caldas">Caldas</option>
            <option value="caqueta">Caquetá</option>
            <option value="casanare">Casanare</option>
            <option value="cauca">Cauca</option>
            <option value="cesar">Cesar</option>
            <option value="choco">Chocó</option>
            <option value="cordoba">Córdoba</option>
            <option value="cundinamarca">Cundinamarca</option>
            <option value="guainia">Guainía</option>
            <option value="guaviare">Guaviare</option>
            <option value="huila">Huila</option>
            <option value="la_guajira">La Guajira</option>
            <option value="magdalena">Magdalena</option>
            <option value="meta">Meta</option>
            <option value="narino">Nariño</option>
            <option value="norte_de_santander">Norte de Santander</option>
            <option value="putumayo">Putumayo</option>
            <option value="quindio">Quindio</option>
            <option value="risaralda">Risaralda</option>
            <option value="san_andres_y_providencia">
              San Andrés y Providencia
            </option>
            <option value="santander">Santander</option>
            <option value="sucre">Sucre</option>
            <option value="tolima">Tolima</option>
            <option value="valle_del_cauca">Valle del Cauca</option>
            <option value="vaupes">Vaupés</option>
            <option value="vichada">Vichada</option>
          </select>
        </div>
        <div>
          <label className="form-label">
            Municipio<span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" required />
        </div>
      </div>
      <div className="text-start ms-5 me-5 mt-3 d-flex justify-content-between">
        <div>
          <label className="form-label">
            Dirección<span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div>
          <label className="form-label">
            Telefono<span className="text-danger">*</span>
          </label>
          <input type="number" className="form-control" required />
        </div>
      </div>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Correo<span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          required
          placeholder="Ej: user@gmail.com"
        />
      </div>
      <div className="text-start ms-5 me-5 mt-3">
        <label className="form-label">
          Constraseña<span className="text-danger">*</span>
        </label>
        <input type="password" className="form-control" required />
      </div>
      <div className="d-flex justify-content-between ms-5 me-5 mt-4 mb-4">
        <div className="d-flex">
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
        <div className="w-25">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </>
  );
};
