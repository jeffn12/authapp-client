import React from 'react';
import { Lock, Envelope } from '../components/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value === '' || e.target.password.value === '') {
    } else {
      try {
        axios
          .post(
            'http://localhost:4141/user/login',
            {
              email: e.target.email.value,
              password: e.target.password.value,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            props.setProfile(res.data.user);
            history.push('/profile');
          })
          .catch((err) => console.log(err.response));
      } catch (err) {
        console.log('uh oh', err);
      }
    }
  };

  const handleGitHubAuth = () => {
    console.log('Logging in with GitHub');
    axios
      .get('http://localhost:4141/auth/github', {
        withCredentials: true,
        // headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
        <p className="text-center text-gray-600 text-xs">
          or continue with these social profiles
        </p>
        <div id="social-profiles" className="flex justify-center my-3">
          <a href="/" className="mx-3">
            <img src="/Google.svg" alt="google logo" />
          </a>
          <button className="mx-3" onClick={handleGitHubAuth}>
            <img src="/Github.svg" alt="github logo" />
          </button>
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
