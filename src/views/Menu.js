import React from 'react';
import Lock from '../components/icons/Lock';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Menu() {
  const { signout } = useAuth();
  const history = useHistory();

  return (
    <div className="border rounded-xl p-2 text-xs space-y-3 bg-white w-48">
      <MenuItem
        icon={Lock}
        onClick={() => {
          history.push('/profile');
        }}
      >
        My Profile
      </MenuItem>
      <hr />
      <MenuItem icon={Lock} className="text-red-600" onClick={signout}>
        Logout
      </MenuItem>
    </div>
  );
}

function MenuItem(props) {
  const { icon: Icon, className, onClick, children } = props;
  return (
    <button
      className={`${className} flex justify-center hover:bg-gray-300 p-3 rounded-lg w-full`}
      onClick={onClick}
    >
      <Icon className="w-4 fill-current" />
      <span className="flex-1 ml-5 text-left">{children}</span>
    </button>
  );
}

export default Menu;
