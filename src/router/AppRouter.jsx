import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { BASIC_MODULES_ROUTES, LOGIN } from "./Router";
import { PaginaPrincipal } from "../tienda/PaginaPrincipal";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={BASIC_MODULES_ROUTES[404]} element={<PaginaPrincipal />} />
        <Route path={BASIC_MODULES_ROUTES.HOME} element={<PaginaPrincipal />} />
        <Route path={LOGIN.LOGIN} element={<Login />} />
      </Routes>
    </>
  );
};
