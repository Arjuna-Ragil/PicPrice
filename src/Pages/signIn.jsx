import React from 'react'
import LoginLayout from '../layout/loginLayout'
import SigninLayout from '../Component/login/signinLayout'

const SignIn = () => {
  return (
    <>
        <LoginLayout direction={"bg-gradient-to-bl"}/>
        <div 
        className={`
          flex
          justify-center
          items-center
          h-screen
          dark:bg-background-dark
          `}>
          <SigninLayout/>
        </div>
    </>
  )
}

export default SignIn