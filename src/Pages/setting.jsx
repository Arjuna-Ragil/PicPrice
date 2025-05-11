import React, { useEffect, useState } from 'react';
import MiniNavbar from '../Component/settings/mininavbar'
import Setting  from '../Component/settings/setting'
import MainLayout from '../layout/mainLayout';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from '../hooks/authContext';

const Settings = () => {
  const { user } = useAuth()

  const [selected, setSelected] = useState('profile');
  const [userInfo, setUserInfo] = useState([])

  async function getUserInfo() {
      try {
        const accountRef = doc(db, "users", user.uid)
        const getAccount = await getDoc(accountRef)
        setUserInfo(getAccount.data())
      } catch (error) {
        console.log("failed", error)
      }
    }
  
    useEffect(() => {
      getUserInfo()
    }, []) 

  return (
    <>
    <MainLayout />

    <div
    className={`
      flex
      justify-center
      w-full
      gap-10
      min-h-screen
      items-center
    `}>
      <div>
        <MiniNavbar selected={selected} setSelected={setSelected} userInfo={userInfo}/>
      </div>

      <div>
        <Setting Selected={selected} userInfo={userInfo}/>
      </div>
    </div>
    </>
  );
};

export default Settings