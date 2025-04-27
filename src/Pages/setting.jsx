import React, { useState } from 'react'
import MainLayout from '../layout/mainLayout'
import Title from '../Component/common/title'
import { auth } from '../services/firebase'
import { signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

const Setting = () => {

  const [logout, setLogout] = useState(false)

  function handleSignOut() {
    signOut(auth).then(() => {
      console.log("signOut Successfull")
      setLogout(true)

    }).catch((error) => {
      console.log(`error: ${error}`)
    })
  }

  if (logout) {
    return <Navigate to={"/signin"} replace/>
  }

  return (
    <>
        <MainLayout/>
        <div className={`
          flex
          flex-col
          py-5
          px-35
          gap-5
        `}>
          <header>
            <Title title={"Settings"}/>
          </header>

          <button onClick={handleSignOut}>
            Logout
          </button>
        </div>
    </>
  )
}

export default Setting