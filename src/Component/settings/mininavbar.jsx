import { React, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'
import photoProfile from "../../assets/settings/image.svg"

const Navbar = ({selected,setSelected, userInfo}) => {

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
    const menuItems = [
        { id: 'profile', label: 'Profile' },
        { id: 'appearance', label: 'Appearance' },
        { id: 'language', label: 'Language & Region' },
        { id: 'password', label: 'Change Password' },
    ];
    
    return (
        <div 
        className={`
            w-full 
            bg-container
            dark:bg-container-dark
            p-6 
            rounded-xl
        `}>

            {/* untuk foto profile */}
            <div
            className={`
                text-center
                flex
                flex-col
                items-center
                justify-center
                gap-2
            `}>
                <img src={userInfo.profilePictureURL || photoProfile} className="size-50 rounded-full"/>
                <p
                className="font-medium 2xl:text-2xl text-base dark:text-white">{userInfo.username}</p>
                <p className="2xl:text-2xl text-base mb-10 dark:text-white">{userInfo.email}</p>
            </div>

            <ul className="sm:flex lg:flex-col sm:flex-row grid grid-cols-2 grid-rows-2 space-x-4 lg:gap-3 dark:text-white">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelected(item.id)}
                    className={`w-full text-center px-3 py-2 rounded-full sm:font-semibold transition font-poppins max-md:text-xs ${
                      selected === item.id
                        ? 'bg-[#C4C4C4] dark:bg-subcontainer-dark'
                        : 'hover:bg-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <hr className="my-2 border-gray-300" />

            <button
            onClick={handleSignOut}
            className={`
                py-2
                text-left
                px-3
                font-poppins
                rounded-full
                w-full
                font-semibold
                hover:bg-red-500
                dark:text-white
            `}>
                Logout
            </button>
          </div>
    );
}

export default Navbar 
