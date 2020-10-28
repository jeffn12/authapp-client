import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import { useAuth } from '../contexts/AuthContext';

function EditProfile() {
  const { user } = useAuth();
  const name = useRef(null);
  const bio = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    let updates = [];

    if (name.current.value !== '') {
      updates.push(user.updateProfile({ displayName: name.current.value }));
    }
    if (phone.current.value !== '') updates.phone = phone.current.value;
    if (bio.current.value !== '') updates.bio = bio.current.value;
    if (email.current.value !== '') {
      updates.push(user.updateEmail(email.current.value));
    }
    console.log(updates);
    Promise.all(updates).then((results) => {
      console.log(results);
    });
  }

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center  my-10 w-100">
        <div className="flex flex-col w-3/4 space-y-4">
          <button className="self-start text-indigo-500 text-xl">
            {'<  Back'}
          </button>
          <div className="p-8 border border-gray-400 rounded-lg shadow-xl">
            <div className="my-3">
              <h1 className="text-xl font-medium">Change Info</h1>
              <p className="text-xs text-gray-600">
                Changes will be relfected across all services
              </p>
            </div>
            <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
              <div className="flex items-center">
                <img
                  src={user.photoURL}
                  alt={`avatar for ${user.displayName || 'user'}`}
                  className="w-12 h-12 mr-4"
                />
                <p className="text-xs text-gray-600">CHANGE PHOTO</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  ref={name}
                  className="rounded-lg w-100 border border-gray-800 p-2 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  rows="3"
                  name="bio"
                  placeholder="Enter your bio..."
                  ref={bio}
                  className="rounded-lg w-100 border border-gray-800 p-2 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number..."
                  ref={phone}
                  className="rounded-lg w-100 border border-gray-800 p-2 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  ref={email}
                  className="rounded-lg w-100 border border-gray-800 p-2 text-sm"
                  disabled={user.providerData[0].providerId !== 'password'}
                />
              </div>
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-xs">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
