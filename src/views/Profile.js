import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// TODO:
// create UI
// handle fields not found
// handle updating profile

function Profile(props) {
  useEffect(() => {
    console.log('profile:', props.profile);
  }, [props.profile]);
  return (
    <div>
      {props.profile ? (
        <>
          <p>Welcome back {props.profile.email}!</p>
          <p>Welcome back {props.profile.displayName}!</p>
          <img
            alt={`avatar for ${props.profile.email}`}
            src={props.profile.photoURL}
          />
          <p> Welcome back {props.profile.photoURL}!</p>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default Profile;
