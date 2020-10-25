import React, { useState, useEffect } from 'react';
import { SignUp, Login, Profile } from './views';
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
    auth.onAuthStateChanged((user) => {
      setProfile(user);
      setLoading(false);
    });
  }, []);

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
        <Login />
      </Route>
    </Router>
  );
}

export default App;
