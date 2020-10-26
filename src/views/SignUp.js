import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Envelope } from '../components/icons';
import { auth } from '../firebase/firebase';
import SocialProfileAuth from '../components/SocialProfileAuth';

function SignUp(props) {
  const onSubmit = async (e) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    );
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
        <p className="font-semibold my-3 mr-5 text-lg leading-snug">
          Join thousands of learners from around the world
        </p>
        <p className="my-3 mr-5 leading-tight">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <div id="login-form" className="my-6">
          <form onSubmit={onSubmit} className="m-0">
            <label htmlFor="email">
              <Envelope className="fill-current text-gray-500 h-4 m-3 absolute" />
              <input
                id="email"
                type="text"
                name="email"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="email"
              />
            </label>
            <label htmlFor="password">
              <Lock className="fill-current text-gray-500 h-4 m-3 absolute" />
              <input
                id="password"
                type="password"
                name="password"
                className="border-2 border-gray-400 rounded-lg w-full h-10 pl-8 focus:outline-none text-sm"
                placeholder="password"
              />
            </label>
            <button className="bg-blue-600 text-white rounded-lg w-full h-8 mt-3">
              Start coding now
            </button>
          </form>
        </div>
        <SocialProfileAuth />
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
