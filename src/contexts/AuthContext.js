import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth, db } from '../firebase/firebase';

const AuthContext = createContext();

// custom context hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /** Registration/Login helpers */

  // register with email
  function registerWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // login with email
  function loginWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // authenticate with GitHub
  function loginWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    return handlePopupAuth(provider);
  }

  // authenticate with Google
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return handlePopupAuth(provider);
  }

  // authenticate with popup
  function handlePopupAuth(provider) {
    return auth.signInWithPopup(provider);
  }

  // logout
  function signout() {
    return auth.signOut();
  }

  // manage user status
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const bioDoc = await db.collection('users').doc(user.uid).get();
        if (bioDoc.exists) {
          const bio = await bioDoc.data().bio;
          console.log(bio);
          user.bio = bio || '';
        }
      }
      setUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    registerWithEmail,
    loginWithEmail,
    loginWithGitHub,
    loginWithGoogle,
    signout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
