import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './student.css'



const StudentDashboard = () => {
  const [studentDetails, setStudentDetails] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('/api/profile');
      setStudentDetails(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const isProfileComplete = Object.values(studentDetails).every((detail) => detail !== '');

  return (
    <div className="dashboard-container">
      <h3>Welcome, Student!</h3>

      {isProfileComplete ? (
        <div className="profile-info">
          <h4>Your Profile</h4>
          <p><strong>Nickname:</strong> {studentDetails.nickname}</p>
          <img src={studentDetails.image} alt="No Profile Image" className="profile-image" />
          <p><strong>University:</strong> {studentDetails.university}</p>
          <p><strong>Country:</strong> {studentDetails.country}</p>
          <p><strong>State:</strong> {studentDetails.state}</p>
          <p><strong>Phone Number:</strong> {studentDetails.phoneNumber}</p>
          <Link to="/setup-profile" className="btn btn-secondary">Edit Profile</Link>
        </div>
      ) : (
        <section className="profile-update">
          <h4>Setup Your Profile</h4>
          <Link to="/setupprofile" className="btn btn-primary">Go to Profile Setup</Link>
        </section>
      )}

      <section className="progress-bar">
        <h4>Your Progress</h4>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${isProfileComplete ? 100 : 50}%` }}>
            {isProfileComplete ? 100 : 50}%
          </div>
        </div>
      </section>

      <section className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="btn-search">Search</button>
        </form>
      </section>

      <section className="saved-listings">
        <h4>Saved Listings</h4>
        <ul>
          <li>Spacious Room in Downtown</li>
          <li>Furnished Apartment near Campus</li>
        </ul>
      </section>

      <section className="messages">
        <h4>Messages</h4>
        <p>No new messages.</p>
      </section>

      <section className="feeds">
        <h4>Feeds</h4>
        <div className="feed-card">
          <p>Recommended Listing based on your searches.</p>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
