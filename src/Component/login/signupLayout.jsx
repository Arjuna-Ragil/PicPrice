import { createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../services/firebase';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const SignUpLayout = () => {

const [username, setUsername] = useState("")
const [emailU, setEmailU] = useState("")
const [passwordU, setPasswordU] = useState("")

function handleSignUp() {
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
    shadow-blue-900/30 
    transition-all 
    duration-300`}
    >
    <h2 className={`
      text-2xl 
      font-semibold 
      text-white
      `}
      >
      Create New Account</h2>

    {/* Username */}
    <div className={`
    relative 
    w-full
    `}
    >
      <input
        type="text"
        id="username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className={`
          peer 
          w-full 
          px-3
          pt-8 
          pb-1
          border-b-2 
          border-blue-300 
          text-white 
          
          placeholder-transparent 
          bg-transparent 
          focus:outline-none 
          focus:border-blue-500 
          transition-all
          `}
      />
      <label
        placeholder="username"
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
          peer-focus:top-2 
          peer-focus:text-sm 
          peer-focus:text-blue-100
          `}
      >
        Username
      </label>
    </div>

    {/* Email */}
    <div 
    className={`
      relative w-full`}
      >
      <input
        type="email"
        id="email"
        value={emailU}
        placeholder="Email"
        onChange={(e) => setEmailU(e.target.value)}
        className={`
          peer 
          w-full 
          px-3 
          pt-6 
          pb-2 
          border-b-2 
          border-blue-300 
          text-white 
          placeholder-transparent 
          bg-transparent 
          focus:outline-none 
          focus:border-blue-500 
          transition-all`}
      />
      <label
        placeholder="email"
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
          peer-focus:top-2 
          peer-focus:text-sm 
          peer-focus:text-blue-100
          `}
      >
        Email
      </label>
    </div>

    {/* Password */}
    <div className={`
      relative 
      w-full
    `}
    >
      <input
        type="password"
        id="password"
        value={passwordU}
        placeholder="Password"
        onChange={(e) => setPasswordU(e.target.value)}
        className={`
          peer 
          w-full 
          px-3
          pt-6 
          pb-2 
          border-b-2 
          border-blue-300 
          text-white 
          placeholder-transparent 
          bg-transparent 
          focus:outline-none 
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
          peer-focus:top-2 
          peer-focus:text-sm 
          peer-focus:text-blue-300
          `}
      >
        Password
      </label>
    </div>

    {/* Button */}
    <button
      onClick={handleSignUp}
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
      Sign Up
    </button>

    <div className={`
      text-sm 
      mt-2 
    text-white
    `}
    >
      Already have an account?{' '}
      <Link 
      to="/signin" 
      className={`
        text-white
        underline 
        hover:text-blue-300 
        transition-all 
        duration-
        `}
      >
      Sign in
      </Link>
    </div>
  </div>
);
}

export default SignUpLayout