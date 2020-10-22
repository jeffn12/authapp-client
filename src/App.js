import React, { useState, useEffect } from 'react';
import { SignUp, Login, Profile } from './views';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  useHistory,
} from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    //TODO:
    // call the api to find out if the session is still active
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => {
        if (res.data.user) setProfile(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    // if it is, set the profile info to the user returned
    // if it isn't, leave profile as null
  }, []);

  const getProfile = () => {
    axios
      .get('http://localhost:4141/user/profile', { withCredentials: true })
      .then((res) => console.log(res));
  };

  const handleLogout = () => {
    axios
      .get('http://localhost:4141/user/logout', { withCredentials: true })
      .then((res) => {
        console.log(res);
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
