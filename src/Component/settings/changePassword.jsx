import { React, useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    // Simulate password change
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    // Here, add logic to handle password change (e.g., API call, etc.)
    setError('');
    alert('Password changed successfully');
  };

  return (
    <div 
    className={`
      space-y-4
      font-poppins
      w-150 
      h-115
      px-5
    `}>
      <h2 
      className={`
        text-2xl 
        font-semibold 
        pt-3
      `}>
        Change Password</h2>

      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      <form 
      onSubmit={handleSubmit} 
      className={`
        space-y-4
      `}>
        <div>
          <label 
          htmlFor="oldPassword" 
          className={`
            block 
            text-sm 
            font-medium 
            text-[#565656]
          `}>
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
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
          htmlFor="newPassword" 
          className={`
            block 
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
            block 
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
            type="submit"
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
      </form>
    </div>
  );
};

export default ChangePassword;
