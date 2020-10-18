import React, { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState('');
  useEffect(() => {
    fetch('http://localhost:4141/profile')
      .then((res) => res.json())
      .then((json) => setProfile(JSON.stringify(json)))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <p>PROFILE:</p>
      {profile && <p>{profile}</p>}
    </div>
  );
}

export default Profile;
