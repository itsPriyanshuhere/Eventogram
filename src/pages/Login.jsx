import React from 'react'
import Template from '../Components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1=" Log in to your Eventogram account and"
      desc2="dive into a world of exciting events and connections."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login;
