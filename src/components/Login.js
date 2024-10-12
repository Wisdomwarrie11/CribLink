import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      setLoading(false);
      // On successful login, save the token and redirect based on role
      localStorage.setItem('token', response.data.token);

      const userRole = response.data.user.role; // Get the user role from the response
      if (userRole === 'student') {
        navigate('/StudentDashboard'); // Redirect to the student dashboard
      } else if (userRole === 'agent') {
        navigate('/AgentDashboard'); // Redirect to the agent dashboard
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'We are so sorry. It seems you are yet to Sign up.');
      setLoading(false);
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
      <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-password-btn"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {loading ? (
           <div className="spinner">
           <div className="double-bounce1"></div>
           <div className="double-bounce2"></div>
         </div>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
      <p>Don't have an account? <a style={{ textDecoration: 'none' }} href="/register">Sign up now!</a></p>
      <p>Forgotten Password? <a style={{ textDecoration: 'none' }} href="">Click here</a></p>
    </div>
  );
};

export default LoginPage;
