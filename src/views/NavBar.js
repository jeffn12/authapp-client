import React from 'react';
import Menu from './Menu';
import { useAuth } from '../contexts/AuthContext';

function NavBar() {
  const { user } = useAuth();

  return (
    <div className="flex justify-between w-100 mx-1 relative">
      <img src="/devchallenges.svg" alt="devchallenges logo" className="" />
      <div className="flex-grow flex justify-end items-center space-x-2">
        <img
          src={user.photoURL || '/missing_photo.svg'}
          alt="avatar for user"
          className="rounded-lg h-8 w-8"
        />
        <p className="text-xs">{user.displayName}</p>
        <button>V</button>
      </div>
      <div className="absolute right-0 mx-5 mt-10">
        <Menu />
      </div>
    </div>
  );
}

export default NavBar;
