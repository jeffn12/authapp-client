import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  useEffect(() => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <p>PROFILE:</p>
    </div>
  );
}

export default Profile;
