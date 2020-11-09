import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  const { signout } = useAuth();
  const history = useHistory();

  return (
    <div className="border rounded-xl p-2 space-y-3 bg-white w-48">
      <MenuItem
        icon={faUser}
        onClick={() => {
          history.push('/profile');
        }}
      >
        My Profile
      </MenuItem>
      <hr />
      <MenuItem icon={faSignOutAlt} className="text-red-600" onClick={signout}>
        Logout
      </MenuItem>
    </div>
  );
}

function MenuItem(props) {
  const { icon, className, onClick, children } = props;
  return (
    <button
      className={`${className} flex items-center hover:bg-gray-300 p-3 rounded-lg w-full`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
      <span className="flex-1 ml-5 text-left text-xs">{children}</span>
    </button>
  );
}

export default Menu;
