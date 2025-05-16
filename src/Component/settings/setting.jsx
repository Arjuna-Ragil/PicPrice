import { React, useState } from 'react';
import LanguageAndRegion from './languageAndRegion';
import ChangePassword from './changePassword';
import AccountSetting from './accountSetting'
import Appearance from './appearance';

const Settings = ({Selected, userInfo, setLoading}) => {

  const renderContent = () => {
    switch (Selected) {
      case 'profile':
        return (
          <AccountSetting userInfo={userInfo} setLoading={setLoading}/>
        );

      case 'appearance':
        return (
          <Appearance />
        );
      
        case 'language':
        return (
            <LanguageAndRegion />
        );
      
        case 'password':
        return <ChangePassword />
      
      default:
        return null;
    }
  }

  return (
    <div
    className={` 
      w-full
      h-full
      bg-[#F9F9F9]
      dark:bg-container-dark
      justify-center
      items-center
      p-6
      border-x-1  
      border-b-2 
      border-gray-300
      rounded-2xl
    `}>
        {renderContent()}
    </div>
);
};

export default Settings

