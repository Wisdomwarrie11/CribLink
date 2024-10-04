// src/components/StudentDashboard.js
import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3>Welcome, Student!</h3>
      <p>Here you can manage your saved listings and profile.</p>
      
      <section className="saved-listings">
        <h4>Saved Listings</h4>
        <ul>
          <li>Spacious Room in Downtown</li>
          <li>Furnished Apartment near Campus</li>
        </ul>
      </section>
      
      <section className="profile-update">
        <h4>Update Profile</h4>
        <button className="btn btn-primary">Update Profile</button>
      </section>
      
      <section className="premium-features">
        <h4>Premium Features</h4>
        <p>Access exclusive listings and discounts!</p>
        <button className="btn btn-secondary">View Premium Features</button>
      </section>
    </div>
  );
};

export default StudentDashboard;
