import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm";

function Register() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  if (token) navigate("/");
  
  return <RegistrationForm />;
}

export default Register;
