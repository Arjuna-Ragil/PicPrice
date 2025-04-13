import { createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../services/firebase';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';

const SignUpLayout = () => {

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function handleSignUp() {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: username,
        wishlist: [],
        history: []
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
          onChange={setUsername}
        />
        <input 
          type='email'
          placeholder='Email'
          onChange={setEmail}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={setPassword}
        />
        <button onClick={handleSignUp}>
          Sign Up
        </button>
    </div>
  )
}

export default SignUpLayout