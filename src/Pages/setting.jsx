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
        alert("failed to get user", error)
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
      lg:grid
      lg:grid-cols-3
      lg:grid-rows-5
      flex
      flex-col
      lg:h-screen
      lg:w-screen
      h-full
      w-full
      md:gap-10
      gap-5
      justify-center
      items-center
      lg:p-30
      md:pl-10
      sm:p-10
    
    `}>
      <div className='lg:row-start-2 lg:row-end-5 max-md:mt-25'>
        <MiniNavbar selected={selected} setSelected={setSelected} userInfo={userInfo}/>
      </div>

      <div className='lg:col-span-2 lg:row-start-2 lg:row-end-5'>
        <Setting Selected={selected} userInfo={userInfo}/>
      </div>
    </div>
    </>
  );
};

export default Settings