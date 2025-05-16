import React, { useState } from "react";
import Profile from  "../../assets/settings/image.svg"
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../services/firebase";
import { useAuth } from "../../hooks/authContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { deleteUser, updateEmail } from "firebase/auth";
import { Navigate } from "react-router-dom";

const AccountSetting = ({userInfo, setLoading}) => {

  const { user } = useAuth()
  const [username, setUsername] = useState(userInfo?.username || "")
  const [email, setEmail] = useState(userInfo?.email || "")
  const [firstName, setFirstName] = useState(userInfo?.firstName || "")
  const [lastName, setLastName] = useState(userInfo?.lastName || "")
  const [profilePicture, setProfilePicture] = useState(userInfo?.profilePictureURL || "")
  const [signOut, setSignOut] = useState(false)

  async function handleSubmit(username, email, firstName, lastName) {
      updateEmail(user, email).then(async ()=> {
      const accountRef = doc(db, "users", user.uid) 
      const updateData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email
      }
      await updateDoc(accountRef, updateData)
      setLoading(true)
      }).catch ((error) => {
        alert("failed to update", error)
    })
  }

  async function handleProfilePicture(event) {
    try{
      const image = event.target.files[0]

      const timeStamp = Date.now()
      const imageRef = ref(storage, `${user.uid}/profilePicture/${timeStamp}`)
      await uploadBytes(imageRef, image)
      const profilePictureURL = await getDownloadURL(imageRef)

      const accountRef = doc(db, "users", user.uid)
      const updateImage = {
        profilePictureURL: profilePictureURL
      }

      await updateDoc(accountRef, updateImage)
      setProfilePicture(profilePictureURL)
      alert("profile picture updated")
    } catch (error) {
      alert("failed to change profile picture", error)
    }
  }

  async function handleDeleteProfilePicture() {
    try {
      const accountRef = doc(db, "users", user.uid)
      const updateImage = {
        profilePictureURL: ""
      }
      await updateDoc(accountRef, updateImage)
      setProfilePicture("")
    } catch (error) {
      alert("failed to delete profile picture", error)
    }
  }

  async function handleDeleteAccount() {
    deleteUser(user).then( async () => {
      const accountRef = doc(db, "users", user.uid)
      await deleteDoc(accountRef)
      setSignOut(true)
      alert("account deleted")
    }).catch((error) => {
      alert("failed to delete account", error)
    })
  }

  if (signOut) {
    return <Navigate to={"/landingpage"} replace/>
  }

    return (
        <div className="flex flex-col w-full h-full px-5 pt-3 gap-5 ">
            <div>
              <h2 className="text-2xl font-semibold font-poppins dark:text-white">Account Settings</h2>
              <p className="font-poppins text[10px] text-[#565656] dark:text-white">Profile Picture </p>
            </div>

            {/* profile picture */}
            <div
            className={`
              flex
              sm:flex-row
              flex-col
              justify-center
              gap-5
            `}>
              <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full">
                <img src={profilePicture || Profile} className="size-17 rounded-full"/>
              </div>

              <div
              className={`
                flex
                flex-row
                items-center
                gap-2
              `}>
                <label className="
                  bg-[#161E36]
                    px-7
                    py-2
                    rounded-sm
                    text-white
                    text-center
                    max-sm:text-xs">
                  <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicture}
                  className={`hidden`}>
                  </input>
                  upload new Avatar
                </label>
    
                <button
                onClick={handleDeleteProfilePicture}
                className={`
                  bg-red-500
                  px-7
                  py-2
                  rounded-sm
                  text-white
                  max-sm:text-xs
                `}>
                  Delete Avatar 
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* first and last name */}
              <div
              className={`
                flex
                max-sm:flex-col
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={() => handleSubmit(username, email, firstName, lastName)}
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
                onClick={handleDeleteAccount}
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
            </div>
          </div>
    );
}

export default AccountSetting