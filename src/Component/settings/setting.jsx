import { React } from 'react';

const Settings = ({Selected}) => {

  const renderContent = () => {
    switch (Selected) {
      case 'profile':
        return <div><h2 className="text-2xl font-semibold mb-4">Profile Settings</h2><p>Update your personal information.</p></div>;
      case 'appearance':
        return <div><h2 className="text-2xl font-semibold mb-4">Appearance</h2><p>Choose light or dark theme.</p></div>;
      case 'language':
        return <div><h2 className="text-2xl font-semibold mb-4">Language & Region</h2><p>Select language and region preferences.</p></div>;
      case 'password':
        return <div><h2 className="text-2xl font-semibold mb-4">Change Password</h2><p>Update your password.</p></div>;
      default:
        return null;
    }
  }

  return (
    <div className="w-3/4 p-6">
        {renderContent()}
    </div>
);
};

export default Settings

