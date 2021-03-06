import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialProfileAuth from '../components/SocialProfileAuth';
import AlertBanner from '../components/AlertBanner';
import { useAuth } from '../contexts/AuthContext';

function SignUp() {
  const { registerWithEmail } = useAuth();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmail(e.target.email.value, e.target.password.value);
      history.push('/profile');
    } catch (err) {
      setErrors([err]);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="login-container"
        className="border-2 border-gray-400 rounded-lg max-w-sm w-10/12 p-8"
      >
        <img
          src="/devchallenges.svg"
          alt="devchallenges logo with text"
          className="my-3"
        />
        <p className="font-semibold my-3 mr-5 text-lg leading-snug">
          Join thousands of learners from around the world
        </p>
        <p className="my-3 mr-5 leading-tight">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <AlertBanner
              key={i}
              className="bg-red-300"
              message={error.message}
              close={() => {
                setErrors(errors.filter((err) => err.code !== error.code));
              }}
            />
          ))}
        <div id="login-form" className="my-6">
          <form onSubmit={onSubmit} className="m-0">
            <div className="relative">
              <label htmlFor="email">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fill-current text-gray-500 h-4 m-3 absolute"
                />
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="email"
                aria-label="email"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password">
                <FontAwesomeIcon
                  icon={faLock}
                  className="fill-current text-gray-500 h-4 m-3 absolute left-0 bottom-0"
                />
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="password"
                aria-label="password"
                required
              />
            </div>
            <button className="bg-blue-600 text-white rounded-lg w-full h-8 mt-3">
              Start coding now
            </button>
          </form>
        </div>
        <SocialProfileAuth setErrors={setErrors} />
        <p className="text-center text-sm">
          Already a member?{' '}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
