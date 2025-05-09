import React from 'react'
import LoginLayout from '../layout/loginLayout'
import SigninLayout from '../Component/login/signinLayout'

const SignIn = () => {
  return (
    <>
        <LoginLayout direction={"bl"}/>

        <div className={`
          flex
          justify-center
          items-center
          h-screen
          `}>
          <SigninLayout/>
        </div>
    </>
  )
}

export default SignIn