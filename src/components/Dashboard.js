import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate.push('/login'); // Redirect to login if not authenticated
    }

    // Fetch user details with the token
    axios
      .get('/api/auth/me', {
        headers: {
          'x-auth-token': token,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem('token'); // If the token is invalid, clear it
        navigate.push('/login');
      });
  }, [navigate]);

  return (
    <div className="dashboard">
      {user ? (
        <h2>Welcome, {user.name}!</h2>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
