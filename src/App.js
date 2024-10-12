// src/App.js
import React , {useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AccommodationDetail from './components/AccommodationDetail';
import ItemDetail from './components/ItemDetail';
import Navbar from './Navbar';
import Verify from './components/Verify';
import ProfileSetup from './components/ProfileSetup';
import StudentDashboard from './components/StudentDashboard'; // StudentDashboard component
import AgentDashboard from './components/AgentDashboard'; // AgentDashboard component

function App() {
  const [studentDetails, setStudentDetails] = useState({
    nickname: '',
    image: '',
    university: '',
    country: '',
    state: '',
    phoneNumber: '',
  });

  const handleProfileUpdate = (profileData) => {
    setStudentDetails(profileData);
  };

  return (

    
    <Router>
      <div>
      <Navbar/>
      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/AgentDashboard" element={<AgentDashboard />} />
        <Route path="/setupprofile" element={<ProfileSetup onProfileUpdate={handleProfileUpdate} />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
