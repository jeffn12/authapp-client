import React, { useState } from 'react';
import Menu from './Menu';
import { useAuth } from '../contexts/AuthContext';
import { ArrowUp, ArrowDown } from '../components/icons';
import { Link } from 'react-router-dom';

function NavBar() {
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex justify-between w-100 m-2 relative">
      <Link to="/" className="flex items-center">
        <img src="/devchallenges.svg" alt="devchallenges logo" className="" />
      </Link>
      <div className="flex-grow flex justify-end items-center space-x-2">
        <img
          src={user.photoURL || '/missing_photo.svg'}
          alt="avatar for user"
          className="rounded-lg h-8 w-8"
        />
        <p className="text-xs">{user.displayName}</p>
        <button
          onClick={toggleMenu}
          className="text-gray-900 flex justify-center items-center"
        >
          {showMenu ? (
            <ArrowUp className="fill-current text-gray-700 w-4" />
          ) : (
            <ArrowDown className="fill-current text-gray-700 w-4" />
          )}
        </button>
      </div>
      {showMenu && (
        <div className="absolute right-0 mt-10">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default NavBar;
