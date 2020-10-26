import React from 'react';

function NavBar() {
  return (
    <div className="flex justify-between w-100 mx-1">
      <img src="/devchallenges.svg" alt="devchallenges logo" className="" />
      <div className="flex-grow flex justify-end items-center space-x-2">
        <img
          src="/logo512.png"
          alt="avatar for user"
          className="rounded-sm h-8 w-8"
        />
        <p className="text-sm">John Smith</p>
        <button>V</button>
      </div>
    </div>
  );
}

export default NavBar;
