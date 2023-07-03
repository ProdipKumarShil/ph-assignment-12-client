import React, { useContext } from 'react';
import Top from '../../shared/Top/Top';
import { AuthContext } from '../../provider/AuthProvider';

const DashboardProfile = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <Top title="Profile"></Top>
      <div className="grid md:grid-cols-2 items-center pt-4">
        <div className="">
          <p className='text-3xl font-semibold '>{user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="">
          <img className='w-80 rounded object-cover h-80' src={user.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;