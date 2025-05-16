import React from 'react'
import LoginLayout from '../layout/loginLayout'
import SignUpLayout from '../Component/login/signupLayout'

const SignUp = () => {
  return (
    <>
        <LoginLayout direction={"bg-gradient-to-br"}/>
        <div 
        className={`
          flex
          justify-center
          items-center
          h-screen
          dark:bg-[#161E36]
        `}>
        <SignUpLayout />
        </div>
    </>
  )
}

export default SignUp