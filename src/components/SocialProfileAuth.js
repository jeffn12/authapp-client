import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SocialProfileSignIn() {
  const history = useHistory();
  const { loginWithGitHub, loginWithGoogle } = useAuth();

  const handleGitHubAuth = async () => {
    console.log('Logging in with GitHub');
    await loginWithGitHub();
    history.push('/profile');
  };

  const handleGoogleAuth = async () => {
    console.log('Logging in with Google');
    await loginWithGoogle();
    history.push('/profile');
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
