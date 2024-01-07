import React from 'react'
import signupImg from "../assets/Concert-image.jpg"
import Template from '../Components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join Eventogram and unlock a universe of event planning and attendance."
      desc1=""
      desc2="Your next adventure starts with a simple sign-up!"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
