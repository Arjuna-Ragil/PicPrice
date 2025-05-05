import React from 'react'
import LoginLayout from '../layout/loginLayout'
import SignUpLayout from '../Component/login/signupLayout'

const SignUp = () => {
  return (
    <>
        <LoginLayout />
        <div className={`
        flex
        justify-center
        items-center
        min-h-screen
        backdrop-blur-md
        `}>
        <SignUpLayout />
        </div>
    </>
  )
}

export default SignUp