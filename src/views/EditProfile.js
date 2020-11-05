import React, { useRef } from 'react';
import NavBar from './NavBar';
import { useAuth } from '../contexts/AuthContext';
import { db, store, storeURLStem } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';

/**USER PROFILE:
 * photoURL (user)
 * email (user)
 * displayName (user)
 * bio (firestore)
 * phone (firestore)
 */

function EditProfile() {
  const { user, getProfile } = useAuth();
  const history = useHistory();
  const name = useRef(null);
  const bio = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const photo = useRef(null);

  function openFileSelector() {
    photo.current.click();
  }

  function onSubmit(e) {
    e.preventDefault();
    let updates = [];
    let userUpdates = {};
    let firestoreUpdates = {};

    // photo (user/storage)
    if (photo.current.value !== '') {
      const fullPath = photo.current.value.split('\\');
      const fileName = `images/${fullPath[fullPath.length - 1]}`;
      const file = e.target.file.files[0];
      const fileImageRef = store.child(fileName);
      let url = storeURLStem + `${urlify(fileName)}?alt=media`;
      userUpdates.photoURL = url;
      fileImageRef.put(file).catch((err) => console.error(err));
    }

    // displayName (user)
    if (name.current.value !== '') {
      userUpdates.displayName = name.current.value;
    }

    Object.keys(userUpdates).length > 0 &&
      updates.push(user.updateProfile(userUpdates));

    // email (user)
    if (email.current.value !== '') {
      updates.push(user.updateEmail(email.current.value));
    }

    // password (user)
    if (password.current.value !== '') {
      updates.push(user.updatePassword(password.current.value));
    }

    // phone number (firestore)
    if (phone.current.value !== '') {
      firestoreUpdates.phoneNumber = phone.current.value;
    }

    // bio (firestore)
    if (bio.current.value !== '') {
      firestoreUpdates.bio = bio.current.value;
    }

    Object.keys(firestoreUpdates).length > 0 &&
      updates.push(
        db
          .collection('users')
          .doc(user.uid)
          .set(firestoreUpdates, { merge: true })
      );

    // send updates, refresh user/profile
    Promise.all(updates).then((results) => {
      getProfile(user);
      history.push('/profile');
    });
  }

  function urlify(fileName) {
    // replace '/' with '%2F'
    // replace ' ' with '%20'
    let urlFormatted = fileName.replace('/', '%2F').replace(' ', '%20');
    console.log(urlFormatted);
    return urlFormatted;
  }

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center  my-10 w-100">
        <div className="flex flex-col w-3/4 space-y-4">
          <button
            className="self-start text-indigo-500 text-xl"
            onClick={() => history.push('/profile')}
          >
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
                  src={user.photoURL || '/missing_photo.svg'}
                  alt={`avatar for ${user.displayName || 'user'}`}
                  className="w-12 h-12 mr-4 cursor-pointer"
                  onClick={openFileSelector}
                />
                <button
                  className="text-xs text-gray-600"
                  onClick={openFileSelector}
                >
                  CHANGE PHOTO
                </button>
                <input type="file" ref={photo} name="file" className="hidden" />
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                  ref={email}
                  className="rounded-lg w-100 border border-gray-800 p-2 text-sm"
                  disabled={user.providerData[0].providerId !== 'password'}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={password}
                  placeholder="Enter new password..."
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
