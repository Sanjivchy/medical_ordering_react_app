import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/loginForm'

function Login() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  if (token) navigate("/");
  
  return (
    <LoginForm />
  )
}

export default Login