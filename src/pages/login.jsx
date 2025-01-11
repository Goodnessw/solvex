// src/pages/Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Add login logic here (e.g., call an API or perform authentication)
    alert('Logged in successfully!');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
