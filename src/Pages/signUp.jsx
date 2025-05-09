import React from 'react'
import LoginLayout from '../layout/loginLayout'
import SignUpLayout from '../Component/login/signupLayout'

const SignUp = () => {
  return (
    <>
        <LoginLayout direction={"br"}/>
        <div className={`
        flex
        justify-center
        items-center
        h-screen
        `}>
        <SignUpLayout />
        </div>
    </>
  )
}

export default SignUp