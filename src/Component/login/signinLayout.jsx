import React, { useState } from 'react'
import { auth, db } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

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
        gap-8 
        w-full 
        max-w-md 
        bg-tertiary 
        bg-opacity-95 
        p-10 
        rounded-3xl 
        shadow-2xl
        shadow-sky-100
        transition-all 
        duration-300
        
      `}>
          <h2 className={`
            text-2xl 
            font-semibold 
            text-white
            `}>Login to Account</h2>

{/* untuk email dan input */}
          <div className={`
            relative 
            w-full`}>

            <input 
              type='email'
              placeholder='Email'
              onChange={(e) => setEmailI(e.target.value)}
              className= {`
                peer 
                w-full 
                px-3 
                pt-6 
                pb-2 
                border-b-2 
                border-blue 
                text-white
                placeholder-transparent 
                bg-transparent 
                focus:outline-none 
                focus:border-blue-500 
                transition-all
              `}
          />

            <label
              placeholder="email"
              className={`
                absolute 
                left-2
                top-2 
                text-sm 
                text-blue-200 
                transition-all 
                peer-placeholder-shown:top-5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-white
                peer-focus:top-2 peer-focus:text-sm 
                peer-focus:text-blue-100`}
            > 
            Email 
            </label>

          </div>
          
{/* untuk password dan input */}
          <div className={`
            relative
            w-full
            `}>
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPasswordI(e.target.value)}
              className= {`
                peer
                w-full
                px-3 
                pt-6 
                pb-2 
                border-b-2 
                border-white
                text-white 
                placeholder-transparent 
                bg-transparent focus:outline-none 
                focus:border-blue-500 
                transition-all
              `}
            />

            <label
            placeholder="password"
            className={`
              absolute 
              left-3 
              top-2 
              text-sm 
              text-blue-200 
              transition-all 
              peer-placeholder-shown:top-5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-white
              peer-focus:top-2 peer-focus:text-sm 
              peer-focus:text-blue-300
              `}
            > 
            Password
            </label>

          </div>
          

          <button 
          onClick={handleSignIn}
          className={`
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-medium 
            py-2
            px-4
            rounded-md 
            transition 
            duration-300
            inset-ring-1
            inset-ring-white
            `}
          >
            Sign In
          </button>

          <div 
            className={`
              text-sm 
              mt-2 
            text-white`}
            >
            Don’t have an account?{' '}
          
            <Link 
            to="/signup" 
            className={`
            text-blue-400 
              hover:underline 
            hover:text-blue-300 
              transition-all 
              duration-200`}
              >
              Sign up
            </Link>
          </div>
      </div>
  )
}

export default SigninLayout