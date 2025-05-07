import React, { useState } from 'react'
import { auth, db } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { Navigate, Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/sidebar/picPrice.png';
import kamera from '../../assets/sidebar/kamera.png';


const SigninLayout = () => {

    const [emailI, setEmailI] = useState("")
    const [passwordI, setPasswordI] = useState("")
    const [showPassword, setShowPassword] = useState(false);
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
    <div 
    className={`
      flex 
      items-center 
      justify-center 
    `}>

      {/* buat ikon kamera */}
      <div>
        <img
        src={kamera}
        alt='kamera'
        className={`
          w-full
          h-full
          object-contain
        `}
        />
      </div>

      {/* login form */}
      <div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-4 
        w-full
        mr-20
        h-130
        bg-[#ffffff]
        bg-opacity-95 
        p-10 
        rounded-3xl 
        shadow-2xl
        shadow-blue-900/30 
        transition-all 
        duration-300
      `}>

        <div
          className={`
          my-5
          mt-15
        `}>

          {/* picprice */}
          <div
            className={`
              flex
              items-center
              justify-center
              gap-2
            `}>

            <img
              src={logo}
              alt="logo"
              className={`
                w-12
                h-12
                object-contain
            `}/>
            
            <h2
              className={`
                text-2xl
                font-semibold
                font-poppins
              `}>
                PicPrice</h2>
          </div>

            <h2 
              className={`
                font-semibold 
                text-[40px]
                font-poppins
              `}>
                Welcome Back!</h2>
        </div>
        

        {/* untuk email */}
        <div className={`
          relative 
        `}>

          <input 
            type='email'
            placeholder='Email'
            onChange={(e) => setEmailI(e.target.value)}
            className= {` 
              peer 
              w-80
              pl-6
              pr-4 
              py-2 
              bg-[#F0F0F0]
              rounded-full
              placeholder-transparent 
              focus:outline-none 
              focus:inset-ring-1
              focus:inset-ring-[#8d8b8b]
              transition-all 
            `}/>

            <label
              className={`
                absolute 
                text-[#bbbbbb]
                left-6
                font-poppins 
                text-[16px]
                transition-all 
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
              peer-placeholder-shown:text-[#bbbbbb] 
                peer-focus:-top-4 
                peer-focus:text-[12px]
              peer-focus:text-[#bbbbbb]
              `}
            > 
            Email 
            </label>

          </div>
          
          {/* untuk password */}
          <div 
          className={`
            relative
          `}>

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              onChange={(e) => setPasswordI(e.target.value)}
              className= {`
                peer 
                w-80
                pl-6
                pr-10
                py-2 
                bg-[#F0F0F0]
                rounded-full
                placeholder-transparent 
                focus:outline-none 
                focus:inset-ring-1
                focus:inset-ring-[#8d8b8b]
                transition-all
              `}
            />

            <span
              onClick = {() => setShowPassword(!showPassword)}
              className={`
                absolute 
                right-4 
                top-1/2 
                -translate-y-1/2 
                text-[#bbbbbb]
                cursor-pointer
              `}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>

            <label
            className={`
              absolute 
              text-[#bbbbbb]
              left-6
              font-poppins 
              text-[16px] 
              transition-all 
              peer-placeholder-shown:top-2 
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-[#bbbbbb] 
              peer-focus:-top-4 
              peer-focus:text-[12px] 
              peer-focus:text-[#bbbbbb]
              `}
            > 
            Password
            </label>

          </div>
          
          {/* sign in button */}
          <button 
          onClick={handleSignIn}
          className={`
            bg-[#ACCBE4]
            hover:bg-blue-700
            font-semibold
            w-80
            py-2
            font-poppins
            rounded-full
            transition 
            duration-300
          `}
          >
            Log in 
          </button>

          {/* google button */}
          <button
            onClick={() => console.log("Login with Google")}
            className={`
            w-80
            flex
            font-poppins 
            items-center 
            justify-center 
            gap-5 
            bg-[#ACCBE4]
            font-semibold
            py-2 
            rounded-full
            transition 
            duration-300 
            shadow-md 
            hover:shadow-lg
          `}>
            <FcGoogle 
            className={`
              text-2xl
            `}/>
              Continue with Google
          </button>


          {/* sign up redirect */}
          <div 
            className={`
              text-sm 
              mb-4
              font-poppins 
            text-[#5E5E5E]
            `}>
              Don’t have an account?{' '}
          
            <Link 
            to="/signup" 
            className={`
            text-[#5E5E5E]
              hover:underline 
            hover:text-[#9a9a9a]
              transition-all 
              duration-200
              font-semibold
              font-poppins
              `}
              >
              Sign up here
            </Link>
          </div>
      </div>
  </div>
  )
}

export default SigninLayout