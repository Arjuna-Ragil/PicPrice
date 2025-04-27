import React, { useState } from 'react'
import { auth, db } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'

const SigninLayout = () => {

    const [emailI, setEmailI] = useState("")
    const [passwordI, setPasswordI] = useState("")
    const [successLogin, setSuccessLogin] = useState(false)

    function handleSignIn(){
        signInWithEmailAndPassword(auth, emailI, passwordI)
        .then(async (userCredential) => {
            const user = userCredential.user
            
            await getDoc(doc(db, "users", user.uid))

            console.log("account retrieve")

            setSuccessLogin(true)
        })
        .catch((error) => {
            console.log("failed to retrieve account" + error.message)
        })
    }
  
    if (successLogin) {
      return <Navigate to={'/'} replace/>
    }

  return (
    <div className={`
        flex
        flex-col
        items-center
        justify-center
        p-5
        gap-3
        bg-tertiary
      `}>
          <p>Login to Account</p>
          <input 
            type='email'
            placeholder='Email'
            onChange={(e) => setEmailI(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPasswordI(e.target.value)}
          />
          <button onClick={handleSignIn}>
            Sign In
          </button>
      </div>
  )
}

export default SigninLayout