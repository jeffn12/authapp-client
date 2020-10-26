import React from 'react';
import SocialProfileAuth from '../components/SocialProfileAuth';
import { Lock, Envelope } from '../components/icons';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

function Login(props) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.email.value === '' || e.target.password.value === '') {
    } else {
      try {
        await auth.signInWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value
        );
        history.push('/profile');
      } catch (err) {
        console.log('uh oh', err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="login-container"
        className="border-2 border-gray-400 rounded-lg max-w-sm p-8"
      >
        <img
          src="/devchallenges.svg"
          alt="devchallenges logo with text"
          className="my-3"
        />
        <p className="font-semibold my-3 mr-5 text-lg leading-snug">Login</p>
        <div id="login-form" className="my-6">
          <form className="m-0" onSubmit={handleSubmit}>
            <label htmlFor="email">
              <Envelope className="fill-current text-gray-500 h-4 m-3 absolute" />
              <input
                id="email"
                type="text"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="email"
                required
              />
            </label>
            <label htmlFor="password">
              <Lock className="fill-current text-gray-500 h-4 m-3 absolute" />
              <input
                id="password"
                type="password"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="password"
                required
              />
            </label>
            <button className="bg-blue-600 text-white rounded-lg w-full h-8 mt-3">
              Login
            </button>
          </form>
        </div>
        <SocialProfileAuth />
        <p className="text-center text-sm">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
