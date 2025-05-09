import React, { useState } from 'react';
import MiniNavbar from '../Component/settings/mininavbar'
import Setting  from '../Component/settings/setting'
import MainLayout from '../layout/mainLayout';

const Settings = () => {
  const [selected, setSelected] = useState('profile');

  return (
    <>
    <MainLayout />

    <div
    className={`
      flex
      justify-center
      w-auto
      h-lvh
      items-center
    `}>
      <div>
        <MiniNavbar selected={selected} setSelected={setSelected}/>
      </div>

      <div>
        <Setting Selected={selected}/>
      </div>
    </div>
    </>
  );
};

export default Settings