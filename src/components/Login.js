import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });

      // On successful login, save the token and redirect
      localStorage.setItem('token', response.data.token);
      navigate.push('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      setError(err.response?.data?.msg || 'Invalid credentials. Please register.');
    }
  };

  return (
    <div className="form-container">
  <h2>Login</h2>
  {error && <p className="error">{error}</p>}
  <form onSubmit={handleLogin}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a style={{textDecoration: 'none'}} href="/register">Sign up now!</a></p>
  <p>Forgotten Password? <a style={{textDecoration: 'none'}} href="">Click here</a></p>
</div>

  );
};

export default LoginPage;
