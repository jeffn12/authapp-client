import React from 'react';
import { Lock, Envelope } from '../components/icons';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4141/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.error(err));
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
              />
            </label>
            <label htmlFor="password">
              <Lock className="fill-current text-gray-500 h-4 m-3 absolute" />
              <input
                id="password"
                type="password"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="password"
              />
            </label>
            <button className="bg-blue-600 text-white rounded-lg w-full h-8 mt-3">
              Login
            </button>
          </form>
        </div>
        <p className="text-center text-gray-600 text-xs">
          or continue with these social profiles
        </p>
        <div id="social-profiles" className="flex justify-center my-3">
          <a href="/" className="mx-3">
            <img src="/Google.svg" alt="google logo" />
          </a>
          <a href="/" className="mx-3">
            <img src="/Github.svg" alt="github logo" />
          </a>
        </div>
        <p className="text-center text-sm">
          Don't have an account yet?{' '}
          <a href="/" className="text-blue-600">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
