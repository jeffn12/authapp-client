import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SocialProfileSignIn({ setErrors }) {
  const history = useHistory();
  const { loginWithGitHub, loginWithGoogle } = useAuth();

  const handleGitHubAuth = async () => {
    try {
      await loginWithGitHub();
      history.push('/profile');
    } catch (err) {
      setErrors([err]);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await loginWithGoogle();
      history.push('/profile');
    } catch (err) {
      setErrors([err]);
    }
  };

  return (
    <>
      <p className="text-center text-gray-600 text-xs">
        or continue with these social profiles
      </p>
      <div id="social-profiles" className="flex justify-center my-3">
        <button className="mx-3" onClick={handleGoogleAuth}>
          <img src="/Google.svg" alt="google logo" />
        </button>
        <button className="mx-3" onClick={handleGitHubAuth}>
          <img src="/Github.svg" alt="github logo" />
        </button>
      </div>
    </>
  );
}

export default SocialProfileSignIn;
