import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import LoginForm from './components/loginForm/index'
// import RegistrationForm from './components/RegistrationForm/index'
import SidebarUi from './components/sidebarUi/index'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Index";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <LoginForm></LoginForm> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <SidebarUi></SidebarUi> */}


    </>
  );
}

export default App;
