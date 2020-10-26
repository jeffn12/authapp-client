import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { auth } from './firebase/firebase';
import { useAuth } from './contexts/AuthContext';

function App() {
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  const handleLogout = () => {
    auth.signOut().then(() => {
      setProfile(null);
    });
  };

  return (
    <Router>
      {user && <button onClick={handleLogout}>Logout</button>}
      <Route exact path="/">
        {user ? (
          <Redirect to="/profile" />
        ) : (
          <Link to="/login">You have to login first</Link>
        )}
      </Route>
      <Route path="/profile">
        <Profile profile={user} />
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
