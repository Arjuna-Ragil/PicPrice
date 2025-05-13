import React, { useState } from 'react'
import { auth, db } from '../../services/firebase'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
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

    function handleSignInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(async (result) => {
          if (!result) return alert("failed to sign in")

            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user;
  
            if (token && user) {
  
              const retrieveDoc = getDoc(doc(db, "users", user.uid))
  
              if (!(await retrieveDoc).exists()) {
                await setDoc(doc(db, "users", user.uid), {
                  email: user.email,
                  username: user.displayName,
                  profilePictureURL: user.photoURL
                });
              }
    
              await getDoc(doc(db, "users", user.uid)) 
              setSuccessLogin(true)
            } else {
              return 
            }
        }).catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
          
          alert("failed to get account", errorMessage || errorCode || error)
      });
    }

    function handleSignIn(){
        signInWithEmailAndPassword(auth, emailI, passwordI)
        .then(async (userCredential) => {
            const user = userCredential.user
            await getDoc(doc(db, "users", user.uid))
            setSuccessLogin(true)
        })
        .catch((error) => {
            alert("failed to retrieve account" + error.message)
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
      sm:gap-10 xl:gap- 2xl:gap-10
    `}>

      {/* camera icon */}
      <div>
        <img
        src={kamera}
        alt='kamera'
        className={`
          hidden sm:block
          w-full 2xl:w-260
          h-135 2xl:h-300
          object-contain
        `}
        />
      </div>

      {/* login form container */}
      <div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-4 2xl:gap-8
        w-auto lg:w-120 xl:w-180 2xl:w-260
        sm:h-120 lg:h-125 xl:h-125 2xl:h-300
        lg:mr-10 xl:mr-15 
        2xl:ml-80
        bg-transparent sm:bg-white dark:sm:bg-container-dark
        lg:py-8
        sm:rounded-none lg:rounded-3xl 
        sm:shadow-2xl 
        transition-all 
        duration-300
      `}>


        <div
        className={`
          sm:my-5
          2xl:mt-0 
          mb-5 2xl:mb-20
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
              size-6 sm:size-9 lg:size-11 2xl:size-25
              object-contain
            `}/>
            
            <h2
            className={`
              text-[16px] sm:text-lg lg:text-2xl 2xl:text-5xl
              font-semibold
              font-poppins
              `}>PicPrice</h2>
          </div>

            <h2 
            className={`
              font-semibold 
              text-[20px] sm:text-2xl 2xl:text-7xl
              font-poppins
            `}>Welcome Back!</h2>
        </div>
        
        {/* email form */}
        <div 
        className={`
          relative 
        `}>

          <input 
          id='email'
          type='email'
          placeholder='Email'
          onChange={(e) => setEmailI(e.target.value)}
          className= {` 
            peer 
            w-60 sm:w-80 xl:w-100 2xl:w-180
            pl-6 2xl:pl-12
            pr-4 2xl:pr-10
            py-1 sm:py-2 2xl:py-7
            bg-input dark:bg-input-dark
            rounded-full
            placeholder-transparent 
            text-xs sm:text-sm lg:text-lg 2xl:text-3xl
            focus:outline-none 
            focus:inset-ring-1
            focus:inset-ring-inset-input
            transition-all 
            `}/>

            {emailI === "" && (
            <label
            htmlFor='email'
            className={`
              absolute 
              text-placeholder dark:text-placeholder-dark
              left-6 2xl:left-12
              font-poppins 
              text-[16px] 2xl:text-2xl
              transition-all 
              peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
              peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
              peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-5 2xl:peer-focus:-top-8
              peer-focus:text-[10px] sm:peer-focus:text-xs lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-placeholder dark:peer-focus:text-focus-dark
            `}
            > Email</label>)}
          </div>
          
          {/* password form */}
          <div 
          className={`
            relative
          `}>

            <input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            onChange={(e) => setPasswordI(e.target.value)}
            className= {`
              peer 
              w-60 sm:w-80 xl:w-100 2xl:w-180
              pl-6 2xl:pl-12
              pr-11 2xl:pr-10
              py-1 sm:py-2 2xl:py-7
              bg-input dark:bg-input-dark
              rounded-full
              text-xs sm:text-sm lg:text-lg 2xl:text-3xl
              placeholder-transparent 
              focus:outline-none 
              focus:inset-ring-1
              focus:inset-ring-inset-input
              transition-all
            `}
            />

            <span
            onClick = {() => setShowPassword(!showPassword)}
            className={`
              absolute 
              right-4 2xl:right-10
              top-1/2 
              -translate-y-1/2 
              text-placeholder dark:text-placeholder-dark
              cursor-pointer
              `}
            >
              {showPassword ? <EyeOff className='size-4 sm:size-6 2xl:size-13'  /> : <Eye className='size-4 sm:size-6 2xl:size-13' />}
            </span>

            {passwordI === "" && (
            <label
            htmlFor='password'
            className={`
              absolute 
              text-placeholder dark:text-placeholder-dark
              left-6 2xl:left-12
              font-poppins 
              text-[16px] 2xl:text-xl
              transition-all 
              peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
              peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
              peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
              peer-focus:text-[10px] sm:peer-focus:text-xs lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-placeholder dark:peer-focus:text-focus-dark
            `}
            > Password</label>)}
          </div>
          

          {/* sign in button */}
          <button 
          onClick={handleSignIn}
          className={`
            bg-linear dark:bg-white
            hover:bg-hover-button dark:hover:bg-hover-button-dark
            font-semibold
            w-60 sm:w-80 xl:w-100 2xl:w-180
            py-1 sm:py-1.5 lg:py-2 2xl:py-5
            text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
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
          onClick={handleSignInWithGoogle}
          className={`
            w-60 sm:w-80 xl:w-100 2xl:w-180
            flex
            font-poppins 
            text-xs sm:text-sm lg:text-lg 2xl:text-3xl
            items-center 
            justify-center 
            gap-5 
            bg-linear dark:bg-white
            hover:bg-hover-button dark:hover:bg-hover-button-dark
            font-semibold
            py-1 sm:py-1.5 lg:py-2 2xl:py-4 
            rounded-full
            transition 
            duration-300 
            
          `}>
            <FcGoogle 
            className={`
              text-lg sm:text-2xl 2xl:text-6xl
            `}/>Continue with Google
          </button>

          {/* sign up redirect */}
          <div 
          className={`
            text-[10px] sm:text-xs lg:text-sm 2xl:text-2xl
            mb-4 2xl:mb-8
            font-poppins 
            text-redirect
            `}>Don’t have an account?{' '}
          
            <Link 
            to="/signup" 
            className={`
              text-redirect
              hover:underline 
              hover:text-hover-redirect
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