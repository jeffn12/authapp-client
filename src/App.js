import React from 'react';
import { SignUp, Login, Profile, EditProfile } from './views';
import ProtectedRoute from './components/ProtectedRoute';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user, signout } = useAuth();

  return (
    <Router>
      {user && <button onClick={signout}>Logout</button>}
      <Switch>
        <Route exact path="/">
          {user ? (
            <Redirect to="/profile" />
          ) : (
            <Link to="/login">You have to login first</Link>
          )}
        </Route>
        <ProtectedRoute path="/profile/edit" component={EditProfile} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
