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
  const [bio, setBio] = useState('');
  const [profile, setProfile] = useState(null);
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

  // set the user bio from firestore
  function getBio(uid) {
    return db
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setBio(doc.data().bio);
        }
      });
  }

  function getProfile(user) {
    return db
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        // get a profile if it exists, if it doesn't, we need to create one
        if (doc.exists) {
          setProfile(doc.data());
        } else {
          //createProfile(user);
        }
      });
  }

  // manage user status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // when we get the user, we also need their profile
      if (user) getBio(user.uid);
      else setBio('');
      setUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    bio,
    getBio,
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
