
'use client';

import React, { useState } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './sign-in.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    const userCredentials = { email, password };
    console.log('Signing in with:', userCredentials);

    if (email === 'user@example.com' && password === 'password') {
      alert('Sign in successful!');
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
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
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
