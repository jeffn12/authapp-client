import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

// custom context hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //TODO: move auth functions here

  // register with email

  // login with email
  function loginWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // manage user status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    loginWithEmail,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
