// src/components/Register.js
import React, { useState } from 'react';
import './Register.css'; // Import CSS for styling

const Register = () => {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., send data to backend)
    console.log('Registered:', { ...formData, userType });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">Register as:</label>
          <select id="userType" onChange={(e) => setUserType(e.target.value)} value={userType}>
            <option value="student">Student</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
