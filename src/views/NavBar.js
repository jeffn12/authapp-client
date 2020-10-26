import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function NavBar() {
  const { user } = useAuth();

  return (
    <div className="flex justify-between w-100 mx-1">
      <img src="/devchallenges.svg" alt="devchallenges logo" className="" />
      <div className="flex-grow flex justify-end items-center space-x-2">
        <img
          src={user.photoURL}
          alt="avatar for user"
          className="rounded-lg h-8 w-8"
        />
        <p className="text-xs">{user.displayName}</p>
        <button>V</button>
      </div>
    </div>
  );
}

export default NavBar;
