import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { ADMIN, BASIC_MODULES_ROUTES, LOGIN, PAGINA_PRINCIPAL } from "./Router";
import { PaginaPrincipal } from "../tienda/PaginaPrincipal";
import { MiCuenta } from "../tienda/MiCuenta";
import { PanelAdmin } from "../Admin/PanelAdmin";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={BASIC_MODULES_ROUTES[404]} element={<PaginaPrincipal />} />
        <Route path={BASIC_MODULES_ROUTES.HOME} element={<PaginaPrincipal />} />
        <Route path={BASIC_MODULES_ROUTES.PRODUCT} element={<PaginaPrincipal />} />
        <Route path={BASIC_MODULES_ROUTES.CATEGORIE} element={<PaginaPrincipal />} />
        <Route path={LOGIN.LOGIN} element={<Login />} />
        <Route path={ADMIN.ADMIN} element={<PanelAdmin />} />
        <Route path={PAGINA_PRINCIPAL.MICUENTA} element={<MiCuenta />} />

      </Routes>
    </>
  );
};
