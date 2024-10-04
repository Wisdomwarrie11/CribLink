// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling
import Navbar from '../Navbar';

const year = new Date

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div style ={{paddingTop: '100px'}}className="hero-content">
          <h1 style={{filter: '100%'}}>Find Your Perfect Apartment and Essentials</h1>
          <h2>All In One Place!</h2>
          <a href="/listings" className="btn btn-primary">Start Searching</a>
        </div>
      </section>

      {/* Popular Listings Section */}
      <section className="listings-section">
        <div className="container">
          <h2>Find an accomodation</h2>
          <div className="row">
            {/* Replace these with dynamic data later */}
            <div className="col-md-4">
              <div className="listing-card">
                <img src="room1.jpg" alt="Room 1" className="listing-img"/>
                <h3>Spacious single room</h3>
                <p>₦70,000 for a year</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="listing-card">
                <img src="room2.jpg" alt="Room 2" className="listing-img"/>
                <h3>Furnished Self-contain</h3>
                <p>₦250,000 for a year</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="listing-card">
                <img src="room2.jpg" alt="Item 1" className="listing-img"/>
                <h3>One bedroom flat </h3>
                <p>₦400,000 for a year</p>
              </div>
            </div>
            <button style={{width:'100px', height: '50px', marginLeft: '500px', borderRadius: '40px'}}>see more</button>
          </div>
        </div>
      </section>

      {/* Popular Item Listing Section */}
      <section className="listings-section">
        <div className="container">
          <h2>Find your item here</h2>
          <div className="row">
            {/* Replace these with dynamic data later */}
            <div className="col-md-4">
              <div className="listing-card">
                <img src="gen.jpeg" alt="Room 1" className="listing-img"/>
                <h3>Horsepower generator</h3>
                <p>₦200,000 per month</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="listing-card">
                <img style={{height: '350px'}}src="bucket.jpeg" alt="Room 2" className="listing-img"/>
                <h3>Clean bucket</h3>
                <p>₦1,500</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="listing-card">
                <img style={{height: '350px'}} src="table.jpeg" alt="Item 1" className="listing-img"/>
                <h3>Study Desk</h3>
                <p>₦5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Interesting Facts Section
        <section className="facts-section">
        <div className="container">
          <h2>Interesting Facts to Know</h2>
          <ul className="facts-list">
            <li>Did you know? Students who live off-campus save an average of 15% on living expenses!</li>
            <li>Most students find second-hand items to be 50% cheaper than new ones!</li>
            <li>Living with roommates can help reduce your monthly rent by up to 30%!</li>
            <li>Networking with other students can lead to great housing opportunities!</li>
          </ul>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
        <p>copyright @{year.getFullYear()} CribLink All right Reserved. <span style={{paddingLeft: '500px'}}>Terms of Use. Privacy Policy</span></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
