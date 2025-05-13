import { updatePassword } from 'firebase/auth';
import { React, useState } from 'react';
import { useAuth } from '../../hooks/authContext';

const ChangePassword = () => {

  const { user } = useAuth()
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleChangePassword(newPassword, confirmPassword) {
    if (newPassword !== confirmPassword) {
      return alert("Passwords is not the same")
    }
    updatePassword(user, newPassword).then(() => {
      console.log("password changed successfully")
    }).catch((error) => {
      console.log("failed to change password", error)
    })
  }

  return (
    <div 
    className={`
      space-y-4
      font-poppins
      w-full
      h-full
    `}>
      <h2 
      className={`
        text-2xl 
        font-semibold 
        pt-3
        dark:text-white
      `}>
        Change Password</h2>

        <div>
          <label 
          htmlFor="newPassword" 
          className={`
            text-sm 
            font-medium 
            text-[#565656]
          `}>
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className={`
              mt-1 
              p-2 
              w-full 
              bg-[#DFDFDF]
              rounded-md 
          `}/>
        </div>

        <div>
          <label 
          htmlFor="confirmPassword" 
          className={`
            text-sm 
            font-medium 
            text-[#565656]
          `}>
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={`
              mt-1 
              p-2 
              w-full 
              bg-[#DFDFDF]
              rounded-md 
          `}/>
        </div>

        <div className="mt-5">
          <button
            onClick={() => handleChangePassword(newPassword, confirmPassword)}
            className={`
              w-1/4
              text-[12px]
              bg-[#A0FEA9]
              py-2 
              rounded-md 
              font-semibold 
              hover:bg-[#68f176]
              transition
          `}>
            Save Changes
          </button>
        </div>
    </div>
  );
};

export default ChangePassword;
