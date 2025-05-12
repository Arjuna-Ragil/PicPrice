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
        if (!result) return console.log("no result")

          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user;

          if (token && user) {

            const retrieveDoc = getDoc(doc(db, "users", user.uid))

            if (!(await retrieveDoc).exists()) {
              await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                name: user.displayName,
                profilePicture: user.photoURL
              });
            }
  
            await getDoc(doc(db, "users", user.uid))
  
            
          } else {
            return 
          }
      }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log("failed to get account", errorMessage || errorCode || error)
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
        name: username,
      });

      console.log("Account created")
    })
    .catch((error) => {
      console.log(error.message)
    })  
}

return (
  <div className={`
    flex 
    items-center 
    justify-center
    flex-row-reverse
    sm:gap-10 xl:gap-30 2xl:gap-10
  `}>

    {/*flower icon */}
    <div>
      <img
      src={flower}
      alt='flower'
      className={`
        hidden sm:block
        w-full 2xl:w-260
        h-135 2xl:h-300
        object-contain
      `}
      />
    </div>


    {/* form signup */}
    <div
    className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-3 sm:gap-4 2xl:gap-8
      w-auto lg:w-120 xl:w-130 2xl:w-260
      sm:h-120 lg:h-125 xl:h-125 2xl:h-300
      2xl:mr-80
      lg:ml-10
      bg-transparent sm:bg-[#ffffff]
      
      sm:rounded-none lg:rounded-3xl 
      sm:shadow-2xl
      transition-all 
      duration-300
    `}>
      <h2 
      className={`
        text-lg sm:text-xl xl:text-3xl 2xl:text-6xl
        font-semibold 
        font-poppins
        xl:mt-5 
        mb-2 2xl:mb-15
      `}>
        Sign Up</h2>

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
          py-1 sm:py-2 2xl:py-7
          bg-[#F0F0F0]
          rounded-full
          placeholder-transparent 
          text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-[#8d8b8b]
          transition-all
        `}/>

        {username === "" && (
        <label
        htmlFor='username'
        className={`
          absolute 
                text-[#bbbbbb]
                left-4 2xl:left-12
                font-poppins 
                text-[16px] 2xl:text-2xl
                transition-all 
                peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
                peer-placeholder-shown:text-[12px] sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-[#bbbbbb] 
                peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
                peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-[#bbbbbb]
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
          py-1 sm:py-2 2xl:py-7
          bg-[#F0F0F0]
          rounded-full
          placeholder-transparent 
          text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-[#8d8b8b]
          transition-all
        `}/>

        {emailU === "" && (
        <label 
        htmlFor='email'
        className={`
         absolute 
                text-[#bbbbbb]
                left-4 2xl:left-12
                font-poppins 
                text-[16px] 2xl:text-2xl
                transition-all 
                peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
                peer-placeholder-shown:text-[12px] sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-[#bbbbbb] 
                peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
                peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-[#bbbbbb]
        `}>
            Email</label>)}
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
          py-1 sm:py-2 2xl:py-7
          bg-[#F0F0F0]
          rounded-full
          placeholder-transparent 
          text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-[#8d8b8b]
          transition-all
        `}/>

        <span
        onClick={() => setShowPassword(!showPassword)}
        className={`
          absolute 
          right-4 
          top-1/2 
          -translate-y-1/2 
          text-[#bbbbbb]
          cursor-pointer
        `}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>

        {passwordU === "" && (
        <label
        htmlFor="password"
        className={`
          absolute 
                text-[#bbbbbb]
                left-4 2xl:left-12
                font-poppins 
                text-[16px] 2xl:text-2xl
                transition-all 
                peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
                peer-placeholder-shown:text-[12px] sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-[#bbbbbb] 
                peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
                peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-[#bbbbbb]
        `}>
            Password</label>)}
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
          py-1 sm:py-2 2xl:py-7
          bg-[#F0F0F0]
          rounded-full
          placeholder-transparent 
          text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
          focus:outline-none 
          focus:inset-ring-1
          focus:inset-ring-[#8d8b8b]
          transition-all
        `}/>

        {confirmPassword === "" && (
        <label
        htmlFor='confirmPassword'  
        className={`
          absolute 
                text-[#bbbbbb]
                left-4 2xl:left-12
                font-poppins 
                text-[16px] 2xl:text-2xl
                transition-all 
                peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2.5 2xl:peer-placeholder-shown:top-6.5
                peer-placeholder-shown:text-[12px] sm:peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base 2xl:peer-placeholder-shown:text-3xl
              peer-placeholder-shown:text-[#bbbbbb] 
                peer-focus:-top-3 sm:peer-focus:-top-4 lg:peer-focus:-top-4 2xl:peer-focus:-top-8
                peer-focus:text-[10px] sm:peer-focus:text-[12px] lg:peer-focus:text-sm 2xl:peer-focus:text-2xl
              peer-focus:text-[#bbbbbb]
        `}>
            Confirm Password</label>)}
      </div>


      {/* Button sign up*/}
      <button
      onClick={handleSignUp}
      className={`
        bg-[#ACCBE4]
            hover:bg-[#95cfff]
            font-semibold
            w-60 sm:w-80 xl:w-100 2xl:w-180
            py-1 sm:py-1.5 lg:py-2 2xl:py-5
            text-[12px] sm:text-sm lg:text-lg 2xl:text-3xl
            font-poppins
            rounded-full
            transition 
            duration-300
        `}>
          Sign Up</button>

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
            bg-[#ACCBE4]
            hover:bg-[#95cfff]
            font-semibold
            py-1 sm:py-1.5 lg:py-2 2xl:py-4 
            rounded-full
            transition 
            duration-300 
          
      `}>

        <FcGoogle 
        className={`
          text-lg sm:text-2xl 2xl:text-6xl
        `}/>
          continue with google
      </button>

      {/* signin redirect */}
      <div 
      className={`
        text-[10px] sm:text-[12px] lg:text-sm 2xl:text-2xl
              mb-4 2xl:mb-8
              font-poppins 
            text-[#5E5E5E]
      `}>
        Already have an account?{' '}

        <Link 
        to="/signin" 
        className={`
          text-[#5E5E5E]
          hover:underline 
          hover:text-[#9a9a9a]
          transition-all 
          duration-200
          font-semibold
          font-poppins
        `}>
          Sign in
        </Link>
      </div>
    </div>
  </div>
);
}

export default SignUpLayout