import React from 'react';
import { SignUp, Login, Profile } from './views';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user, signout } = useAuth();

  return (
    <Router>
      {user && <button onClick={signout}>Logout</button>}
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
