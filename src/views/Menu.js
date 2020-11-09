import React from 'react';
import Lock from '../components/icons/Lock';

function Menu() {
  return (
    <div>
      <MenuItem icon={Lock}>My Profile</MenuItem>
    </div>
  );
}

function MenuItem(props) {
  const { icon: Icon, children, className } = props;
  return (
    <div className="flex justify-center space-x-3">
      <Icon className="w-6 fill-current text-gray-600" />
      <span className={className}>{children}</span>
    </div>
  );
}

export default Menu;
