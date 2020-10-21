import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
        {loggedIn ? (
          <Redirect to="/profile" />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
    </Router>
  );
}

export default App;
