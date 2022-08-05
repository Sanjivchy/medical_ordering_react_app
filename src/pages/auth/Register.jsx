import React from 'react'
import { useSelector } from 'react-redux'
import RegistrationForm from '../../components/RegistrationForm'

function Register() {

  const auth = useSelector(state => state.auth)
  console.log(auth);
  return (
    <RegistrationForm />
  )
}

export default Register