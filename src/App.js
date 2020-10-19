import React, { useState } from 'react';
import { SignUp, Login, Profile } from './views';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle ? <Login /> : <SignUp />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default App;
