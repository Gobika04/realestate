// src/pages/OwnerLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would add authentication logic (e.g., API call or check credentials)
    if (email === 'owner@example.com' && password === 'ownerpassword') {
      navigate('/owner-dashboard'); // Navigate to owner dashboard after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Owner Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default OwnerLogin;
