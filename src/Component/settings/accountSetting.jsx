import React from "react";
import Profile from  "../../assets/settings/image.svg"

const AccountSetting = () => {
    return (
        <div className="w-150 h-115 px-5 pt-3">
            <h2 className="text-2xl font-semibold font-poppins">Account Settings</h2>
            <p className="font-poppins text[10px] text-[#565656]">Profile Picture </p>

            {/* profile picture */}
            <div
            className={`
              flex
              my-5
            `}>
              <img src={Profile} className="size-17"/>

              <div
              className={`
                flex
                justify-center
                items-center
                gap-2
                ml-7
              `}>
                <button
                className={`
                  bg-[#161E36]
                  px-7
                  py-2
                  rounded-sm
                  text-white
                  text-[11px]
                `}>
                  Upload New
                </button>
    
                <button
                className={`
                bg-[#B1B1B1]
                  px-7
                  py-2
                  rounded-sm
                  text-[#565656]
                  text-[11px]
                `}>
                  Delete Avatar 
                </button>
              </div>
            </div>

            <form className="space-y-3 max-w-xl">
              {/* first and last name */}
              <div
              className={`
                flex
                justify-start
                items-center
                gap-5
                font-poppins
                font-semibold
                text-[12px]
              `}>
                <div
                className={`
                w-full`}>
                  <label 
                  className={`
                    block 
                    text-sm 
                    font-medium 
                    text-gray-700 
                    mb-1
                  `}>
                      First Name</label>

                  <input 
                  type="text" 
                  className={`
                    w-full 
                    px-4 
                    py-2   
                    rounded-sm
                    bg-[#DFDFDF]
                    focus:outline-none 
                    focus:ring-1 
                    focus:ring-[#c6c6c6]
                  `}/>
                </div>

                <div
                className={`
                  w-full
                `}>
                  <label 
                  className={`
                    block 
                    text-sm 
                    font-medium 
                    text-gray-700 
                    mb-1`}>
                      Last Name</label>

                  <input 
                  type="text" 
                  className={`
                    w-full 
                    px-4 
                    py-2   
                    rounded-sm
                    bg-[#DFDFDF]
                    focus:outline-none 
                    focus:ring-1 
                    focus:ring-[#c6c6c6]
                  `}/>
                </div>
              </div>

              <div>
                <label 
                className={`
                  block 
                  text-sm 
                  font-medium 
                  text-gray-700 
                  mb-1`}>
                    Username</label>

                <input 
                type="text" 
                className={`
                  w-full 
                  px-4 
                  py-2   
                  rounded-sm
                  bg-[#DFDFDF]
                  focus:outline-none 
                  focus:ring-1 
                  focus:ring-[#c6c6c6] 
                `}/>
              </div>

              <div>
                <label 
                className={`
                  block 
                  text-sm 
                  font-medium 
                  text-gray-700 
                  mb-1`}>
                    Email Address</label>

                <input 
                type="email"
                className={`
                    w-full 
                    px-4 
                    py-2   
                    rounded-sm
                    bg-[#DFDFDF]
                    focus:outline-none 
                    focus:ring-1 
                    focus:ring-[#c6c6c6] 
                  `}/>
              </div>

              <div 
              className={`
                flex 
                justify-start
                gap-3
                items-center 
                pt-2
              `}>

                <button 
                type="submit" 
                className={`
                  px-6
                  py-2 
                  bg-[#A0FEA9]
                  font-poppins
                  rounded-sm 
                  hover:bg-[#68f176]
                  transition
                  text-[10px]
                  font-semibold
                `}>
                  Save Changes</button>

                <button 
                type="button" 
                className={`
                  px-6
                  py-2.5 
                  text-[10px]
                  bg-[#FF5652]
                  font-semibold
                  font-poppins
                  rounded-sm
                  hover:bg-[#ff1f1c]
                  transition
                `}>
                  Delete Account</button>
              </div>
            </form>
          </div>
    );
}

export default AccountSetting