import { React, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'
import photoProfile from "../../assets/settings/image.svg"

const Navbar = ({selected,setSelected}) => {

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
            bg-[#F9F9F9]
            p-6 
            border-b-2
            border-x-1 
            border-gray-300
            rounded-2xl
        `}>
            {/* untuk foto profile */}
            <div
            className={`
                text-center
            `}>
                <img src={photoProfile}/>
                <p
                className="font-medium text-[15px]">username</p>
                <p className="text-[12px] mb-10">username@gmail.com</p>
            </div>

            <ul className="space-y-1">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelected(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-full font-semibold transition font-poppins ${
                      selected === item.id
                        ? 'bg-[#C4C4C4]'
                        : 'hover:bg-[#dfdfdf]'
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
                hover:bg-[#dfdfdf]
            `}>
                Logout
            </button>
          </div>
    );
}

export default Navbar 
