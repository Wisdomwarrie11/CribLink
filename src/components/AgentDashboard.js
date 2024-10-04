// src/components/AgentDashboard.js
import React from 'react';

const AgentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3>Welcome, Agent!</h3>
      <p>Here you can manage your listings and view inquiries.</p>
      
      <section className="manage-listings">
        <h4>Your Listings</h4>
        <ul>
          <li>Luxury Apartment in Downtown</li>
          <li>Studio Room near Campus</li>
        </ul>
        <button className="btn btn-primary">Add New Listing</button>
      </section>
      
      <section className="profile-update">
        <h4>Update Profile</h4>
        <button className="btn btn-primary">Update Profile</button>
      </section>
      
      <section className="inquiries">
        <h4>Inquiries</h4>
        <p>No new inquiries at the moment.</p>
      </section>
    </div>
  );
};

export default AgentDashboard;
