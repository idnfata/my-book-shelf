// import Error404Page from "@pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Login,  MainApp,  ForgotPassword, ResetPassword } from "../../pages";

const RouteApp = () => {
  // console.log(props)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact strict element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-passwrod" element={<ResetPassword />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
