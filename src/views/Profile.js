import React from 'react';
import NavBar from './NavBar';
import { useAuth } from '../contexts/AuthContext';

// TODO:
// create UI
// handle fields not found
// handle updating profile

function Profile(props) {
  const { user } = useAuth();
  return (
    <div>
      <NavBar />
      <p>Welcome back {user.email}!</p>
      <p>Welcome back {user.displayName}!</p>
      <img alt={`avatar for ${user.email}`} src={user.photoURL} />
      <p> Welcome back {user.photoURL}!</p>
    </div>
  );
}

export default Profile;
