import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { BASIC_MODULES_ROUTES } from "./Router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={BASIC_MODULES_ROUTES[404]} element={<Login />} />
        <Route path={BASIC_MODULES_ROUTES.HOME} element={<Login />} />
      </Routes>
    </>
  );
};
