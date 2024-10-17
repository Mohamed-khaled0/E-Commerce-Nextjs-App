// Add this line to mark this component as a Client Component
'use client';

import React, { useState } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './register.css';

export const metadata = {
  title: "Login Page",
  description: 'Login Page',
};

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setError(''); 

    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    const userCredentials = { username, password }; 

    console.log('Logging in with:', userCredentials);

    if (username === 'user' && password === 'password') {
      alert('Login successful!'); 
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}>
      <Header />
      <main className="px-3">
        <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-4">
            <label htmlFor="username" className="form-label">
              Username or Email
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="usernameHelp"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
