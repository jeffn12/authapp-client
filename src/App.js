import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';
import axios from 'axios';

function App() {
  const [toggle, setToggle] = useState(true);

  const getProfile = () => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button onClick={getProfile}>ping server for profile</button>
      {toggle ? <Login /> : <SignUp />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default App;
