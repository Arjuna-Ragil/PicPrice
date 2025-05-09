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
    gap-10
  `}>

    {/* untuk ikon bunga */}
    <div>
      <img
      src={flower}
      alt='flower'
      className={`
        w-full
        h-135
        object-contain
        ml-10
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
      gap-4
      w-120
      h-130
      bg-[#ffffff]
      p-10 
      rounded-3xl 
      shadow-2xl 
      shadow-blue-900/30 
      transition-all 
      duration-300
    `}>
      <h2 
      className={`
        text-[40px]
        font-semibold 
        font-poppins
      `}>
        Sign Up
      </h2>

    
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

        {username === "" && (
        <label
          placeholder="username"
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
          `}>
            Username
        </label>)}
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
            w-80 
            pl-6
            pr-4
            py-2
            rounded-full
            placeholder-transparent 
            bg-[#F0F0F0]
            focus:outline-none 
            focus:inset-ring-1
            focus:inset-ring-[#8d8b8b]
            transition-all
          `}/>

        {emailU === "" && (
        <label 
          placeholder="email"
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
          `}>
            Email
        </label>)}
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
          placeholder="password"
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
          `}>
            Password
        </label>)}
      </div>


      {/* confirm password */}
      <div 
      className={`
        relative 
      `}>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`
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

        {confirmPassword === "" && (
        <label
          placeholder="password"
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
          `}>
            Confirm Password
        </label>)}
      </div>


      {/* Button sign up*/}
      <button
        onClick={handleSignUp}
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
        `}>
          Sign Up
      </button>

      {/* button continue with google */}
      <button
        onClick={handleSignInWithGoogle}
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
          continue with google
      </button>

      {/* signin redirect */}
      <div 
      className={`
        text-sm 
        mb-4
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