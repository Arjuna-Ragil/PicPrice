import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import flower from '../../assets/sidebar/flower.png'

const SignUpLayout = () => {

const [username, setUsername] = useState("")
const [emailU, setEmailU] = useState("")
const [passwordU, setPasswordU] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

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
  
            
          } else {
            return 
          }
      }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert("failed to get account", errorMessage || errorCode || error)
    });
  }

function handleSignUp() {
  if (passwordU !== confirmPassword) {
    return alert("Passwords do not match");
  }

  createUserWithEmailAndPassword(auth, emailU, passwordU)
    .then(async (userCredential) => {
      const user = userCredential.user

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: username,
      });
    })
    .catch(() => {
      alert("failed to sign up")
    })  
}

return (
  <div 
  className={`
    flex 
    items-center 
    justify-center
    flex-row-reverse
    sm:gap-10 xl:gap-35 2xl:gap-10
  `}>

    {/*flower icon */}
    <div>
      <img
      src={flower}
      alt='flower'
      className={`
        hidden sm:block
        w-full 
        min-h-screen 
        object-contain
      `}/>
    </div>

    {/* form signup */}
    <div
    className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-3 sm:gap-4 2xl:gap-8
      lg:w-130 xl:w-130 2xl:w-260
      sm:h-118 lg:h-130 xl:h-125 2xl:h-300
      lg:ml-10 xl:ml-15 2xl:ml-20
      px-7 lg:px-15 xl:px-20
      lg:py-5
      bg-transparent sm:bg-white dark:sm:bg-container-dark
      sm:rounded-none lg:rounded-3xl 
      sm:shadow-2xl
      transition-all 
      duration-300
    `}>

      <h2 
      className={`
        text-xl sm:text-xl xl:text-3xl 2xl:text-6xl
        font-semibold 
        font-poppins
        xl:mt-5 
        mb-2 2xl:mb-15
        dark:text-white
      `}>Sign Up</h2>

      {/* Username */}
      <div 
      className={`
        relative 
      `}>

        <input
        type="text"
        id="username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className={`
          peer 
          w-60 sm:w-80 xl:w-100 2xl:w-180
          pl-4 2xl:pl-12
          pr-4 2xl:pr-10
          py-2 sm:py-2 2xl:py-7
          bg-input dark:bg-input-dark
          rounded-full
          placeholder-transparent 
          text-sm sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-inset-input
          transition-all
        `}/>

        {username === "" && (
        <label
        htmlFor='username'
        className={`
          absolute 
          text-placeholder dark:text-placeholder-dark
          left-4 2xl:left-12
          font-poppins 
          text-[16px] 2xl:text-2xl
          transition-all 
          peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
          peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
          peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
          peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
          peer-focus:text-[10px] sm:peer-focus:text-xs lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
          peer-focus:text-placeholder dark:peer-focus:text-focus-dark
        `}>
          Username</label>)}
      </div>


      {/* Email */}
      <div 
      className={`
        relative 
      `}>
      
        <input
        type="email"
        id="email"
        value={emailU}
        placeholder="Email"
        onChange={(e) => setEmailU(e.target.value)}
        className={`
          peer 
          w-60 sm:w-80 xl:w-100 2xl:w-180
          pl-4 2xl:pl-12
          pr-4 2xl:pr-10
          py-2 sm:py-2 2xl:py-7
          bg-input dark:bg-input-dark
          rounded-full
          placeholder-transparent 
          text-sm sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-inset-input
          transition-all
        `}/>

        {emailU === "" && (
        <label 
        htmlFor='email'
        className={`
          absolute 
          text-placeholder dark:text-placeholder-dark
          left-4 2xl:left-12
          font-poppins 
          text-[16px] 2xl:text-2xl
          transition-all 
          peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
          peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
          peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
          peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
          peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
          peer-focus:text-placeholder dark:peer-focus:text-focus-dark
        `}>Email</label>)}
      </div>

      {/* Password */}
      <div className={`
        relative 
      `}>

        <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={passwordU}
        placeholder="Password"
        onChange={(e) => setPasswordU(e.target.value)}
        className={`
          peer 
          w-60 sm:w-80 xl:w-100 2xl:w-180
          pl-4 2xl:pl-12
          pr-10 2xl:pr-10
          py-2 sm:py-2 2xl:py-7
          bg-input dark:bg-input-dark
          rounded-full
          placeholder-transparent 
          text-sm sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-inset-input
          transition-all
        `}/>

        <span
        onClick={() => setShowPassword(!showPassword)}
        className={`
          absolute 
          right-4 
          top-1/2 
          -translate-y-1/2 
          text-placeholder dark:text-placeholder-dark
          cursor-pointer
        `}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>

        {passwordU === "" && (
        <label
        htmlFor="password"
        className={`
          absolute 
          text-placeholder dark:text-placeholder-dark
          left-4 2xl:left-12
          font-poppins 
          text-[16px] 2xl:text-2xl
          transition-all 
          peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
          peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
          peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
          peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
          peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
          peer-focus:text-placeholder dark:peer-focus:text-focus-dark
        `}>Password</label>)}
      </div>

      {/* confirm password */}
      <div 
      className={`
        relative 
      `}>

        <input
        type="password"
        placeholder="Confirm Password"
        id='confirmPassword'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={`
          peer 
          w-60 sm:w-80 xl:w-100 2xl:w-180
          pl-4 2xl:pl-12
          pr-4 2xl:pr-10
          py-2 sm:py-2 2xl:py-7
          bg-input dark:bg-input-dark
          rounded-full
          placeholder-transparent 
          text-xs sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-inset-input
          transition-all
        `}/>

        {confirmPassword === "" && (
        <label
        htmlFor='confirmPassword'  
        className={`
          absolute 
          text-placeholder dark:text-placeholder-dark
          left-4 2xl:left-12
          font-poppins 
          text-[16px] 2xl:text-2xl
          transition-all 
          peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
          peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
        peer-placeholder-shown:text-placeholder dark:peer-placeholder-shown:text-placeholder-dark
          peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
          peer-focus:text-[10px] sm:peer-focus:text-xs lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
        peer-focus:text-placeholder dark:peer-focus:text-focus-dark
        `}>
            Confirm Password</label>)}
      </div>


      {/* Button sign up*/}
      <button
      onClick={handleSignUp}
      className={`
        bg-linear dark:bg-white
        hover:bg-hover-button dark:hover:bg-hover-button-dark
        font-semibold
        w-60 sm:w-80 xl:w-100 2xl:w-180
        py-2 sm:py-1.5 lg:py-2 2xl:py-5
        text-sm sm:text-sm lg:text-lg 2xl:text-3xl
        font-poppins
        rounded-full
        transition 
        duration-300
        `}>Sign Up</button>


      {/* button continue with google */}
      <button
      onClick={handleSignInWithGoogle}
      className={`
        w-60 sm:w-80 xl:w-100 2xl:w-180
        flex
        font-poppins 
        text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
        items-center 
        justify-center 
        gap-5 
        bg-linear dark:bg-white
        hover:bg-hover-button dark:hover:bg-hover-button-dark
        font-semibold
        py-2 sm:py-1.5 lg:py-2 2xl:py-4 
        rounded-full
        transition 
        duration-300  
      `}>

        <FcGoogle 
        className={`
          text-lg sm:text-2xl 2xl:text-6xl
        `}/>continue with google
      </button>

      {/* signin redirect */}
      <div 
      className={`
        text-[10px] sm:text-xs lg:text-sm 2xl:text-2xl
        mb-4 2xl:mb-8
        font-poppins 
      text-gray-300
      `}>Already have an account?{' '}

        <Link 
        to="/signin" 
        className={`
          text-gray-300
          hover:underline 
          hover:text-hover-redirect
          transition-all 
          duration-200
          font-semibold
          font-poppins
        `}>Sign in</Link>
      </div>
    </div>
  </div>
);
}

export default SignUpLayout