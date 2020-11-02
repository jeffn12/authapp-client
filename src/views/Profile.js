import React from 'react';
import NavBar from './NavBar';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

/**USER PROFILE:
 * photoURL (user)
 * email (user)
 * displayName (user)
 * bio (firestore)
 * phone (firestore)
 */

function Profile() {
  const { profile, user } = useAuth();
  const history = useHistory();

  return (
    <>
      <NavBar />
      {!profile ? null : (
        <div className="flex flex-col items-center justify-center space-y-10 my-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-medium">Personal info</h1>
            <p className="text-l">Basic info, like your name and photo</p>
          </div>

          <div className="mx-2 w-3/4 min-w-sm">
            <div className="flex justify-between items-center border border-gray-400 rounded-t-xl px-12 py-6">
              <div className="flex flex-col">
                <h2 className="text-2xl font-medium">Profile</h2>
                <p className="text-sm text-gray-700">
                  Some info may be visible to other people
                </p>
              </div>
              <button
                className="rounded-lg border border-gray-600 w-24 h-10 text-gray-600 hover:bg-gray-400"
                onClick={() => history.push('/profile/edit')}
              >
                Edit
              </button>
            </div>
            <div className="flex justify-start items-center border border-t-0 border-gray-400 px-12 py-3">
              <h4 className="w-1/3 text-xs text-gray-400">PHOTO</h4>
              <img
                src={user.photoURL}
                alt={`avatar of username`}
                className="rounded-lg w-16 h-16"
              />
            </div>
            <div className="flex justify-start items-center border border-t-0 border-gray-400 px-12 py-3 h-16">
              <h4 className="w-1/3 text-xs text-gray-400">NAME</h4>
              <p className="text-sm font-semibold">{user.displayName}</p>
            </div>
            <div className="flex justify-start items-center border border-t-0 border-gray-400 px-12 py-3 h-16">
              <h4 className="w-1/3 text-xs text-gray-400">BIO</h4>
              <p className="text-sm font-semibold">{profile.bio}</p>
            </div>
            <div className="flex justify-start items-center border border-t-0 border-gray-400 px-12 py-3 h-16">
              <h4 className="w-1/3 text-xs text-gray-400">PHONE</h4>
              <p className="text-sm font-semibold">{profile.phoneNumber}</p>
            </div>
            <div className="flex justify-start items-center border border-t-0 rounded-b-xl border-gray-400 px-12 py-3 h-16">
              <h4 className="w-1/3 text-xs text-gray-400">EMAIL</h4>
              <p className="text-sm font-semibold">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
