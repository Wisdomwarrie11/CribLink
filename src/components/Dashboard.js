// src/components/Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import AgentDashboard from './AgentDashboard';

const Dashboard = () => {
  const location = useLocation();
  const userType = location.state?.userType; // Get userType from location state

  return (
    <div>
      <h2>User Dashboard</h2>
      {userType === 'student' ? <StudentDashboard /> : <AgentDashboard />}
    </div>
  );
};

export default Dashboard;
