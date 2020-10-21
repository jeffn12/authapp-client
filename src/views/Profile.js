import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(props) {
  /* useEffect(() => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => {
        console.log(res);
        //setProfile(res.user);
      })
      .catch((err) => console.log(err.response));
  }, []); */
  return (
    <div>
      {props.profile ? (
        <p>Welcome back {props.profile.email}!</p>
      ) : (
        <p>Go sign in!</p>
      )}
    </div>
  );
}

export default Profile;
