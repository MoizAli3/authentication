import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "../pages/Home";

const ProtectedRoute = () => {
  const token = Cookies.get("token");

  console.log(token);

  //   return token ? <Home /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
