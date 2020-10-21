import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const getProfile = () => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => console.log(res));
  };

  const handleLogout = () => {
    axios
      .get('http://localhost:4141/user/logout', { withCredentials: true })
      .then((res) => console.log(res));
  };

  return (
    <Router>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/profile">
        <Profile profile={profile} />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login setProfile={setProfile} />
      </Route>
    </Router>
  );
}

export default App;
