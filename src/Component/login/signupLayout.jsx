import { createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../services/firebase';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';

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
      p-5
      gap-3
      bg-tertiary
    `}>
        <p>Create New Account</p>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type='email'
          placeholder='Email'
          onChange={(e) => setEmailU(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPasswordU(e.target.value)}
        />
        <button onClick={handleSignUp}>
          Sign Up
        </button>
    </div>
  )
}

export default SignUpLayout