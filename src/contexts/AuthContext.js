import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth, db, store } from '../firebase/firebase';

const AuthContext = createContext();

// custom context hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
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
    console.log('clearing profile...');
    setProfile(null);
    return auth.signOut();
  }

  // get the profile from firestore and set it to state
  function getProfile(user) {
    console.log('getting profile');
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        // get a profile if it exists, if it doesn't, we need to create one
        if (doc.exists) {
          const userProfile = doc.data();
          console.log('Got profile: ', userProfile);
          setProfile(userProfile);
        } else {
          let newProfile = {};
          newProfile.displayName =
            user.displayName !== '' ? user.displayName : user.email;
          newProfile.bio = '';
          newProfile.phoneNumber = user.phoneNumber;
          newProfile.email = user.email;
          console.log('Setting new profile: ', newProfile);
          setProfile(newProfile);
          db.collection('users').doc(user.uid).set(newProfile);
        }
      });
  }

  // manage user status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // when we get the user, we also need their profile
      setUser(user);
      user && getProfile(user);
      console.log(store);
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    profile,
    getProfile,
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
