import React, { useState } from "react";
import About from "./components/Home/About";
import Analytics from "./components/Home/Analytics";
import Cards from "./components/Home/Cards";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Hero from "./components/Home/Hero";
import NavBar from "./components/Home/NavBar";
import { Route, Routes } from "react-router-dom";
// import LoginForm from './components/loginForm/index'
// import RegistrationForm from './components/RegistrationForm/index'
import SidebarUi from "./components/sidebarUi/index";
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
      <div>
        {/* <div className="text-primary text-[50px]"></div>
        <input type="text" placeholder="Search" /> */}
        <NavBar />
        <Hero />
        <Analytics />
        <About />
        <Contact />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
