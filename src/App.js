import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      {!user && <SignUp setUser={setUser} />}
      {user && <Profile />}
    </div>
  );
}

export default App;
