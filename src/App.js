import React, { useState, useEffect } from 'react';
import { SignUp, Login, Profile } from './views';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { auth } from './firebase/firebase';

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    //TODO:
    // call the api to find out if the session is still active
    auth.onAuthStateChanged((user) => {
      setProfile(user);
      setLoading(false);
    });
  }, []);

  const getProfile = () => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => console.log(res));
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setProfile(null);
    });
  };

  return (
    <Router>
      {profile && <button onClick={handleLogout}>Logout</button>}
      <Route exact path="/">
        {!loading ? (
          profile ? (
            <Redirect to="/profile" />
          ) : (
            <Link to="/login">You have to login first</Link>
          )
        ) : (
          <p>Loading...</p>
        )}
      </Route>
      <Route path="/profile">
        {!loading ? <Profile profile={profile} /> : <p>Loading...</p>}
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
