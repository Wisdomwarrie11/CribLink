// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Inside Login.js handleSubmit
const handleSubmit = (e) => {
    e.preventDefault();
    // Example login logic (replace with actual logic)
    const userType = 'student'; // Assume we get this from backend
    console.log('Logged in:', formData);
  
    // Redirect to dashboard with userType
    window.location.href = '/dashboard';
    // Note: In a real application, you'd want to use useNavigate from react-router-dom
  };
  

  return (
    <div className="container md-6">
        <div className='row'>
            <div className='col-md-6'>
            <h2>Login</h2>
            
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>   
      {/* <img src= 'welcome.jpeg' alt="" /> */}
            </div>
       
        </div>
   
    </div>
  );
};

export default Login;
