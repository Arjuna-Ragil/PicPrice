import { React, useState } from 'react';
import LanguageAndRegion from './languageAndRegion';
import ChangePassword from './changePassword';
import AccountSetting from './accountSetting'
import Appearance from './appearance';

const Settings = ({Selected}) => {

  const renderContent = () => {
    switch (Selected) {
      case 'profile':
        return (
          <AccountSetting />
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

