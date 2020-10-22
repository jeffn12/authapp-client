import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  return (
    <div>
      {props.profile ? (
        <p>Welcome back {props.profile.email}!</p>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Profile;
