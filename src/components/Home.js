// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling
import Navbar from '../Navbar';
import Carousal from './carousel'
import Benefit
 from './Benefit';
const year = new Date

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div style ={{paddingTop: '100px'}}className="hero-content">
          <strong><h1 style={{filter: '100%'}}>Find Your Perfect Apartment and Essentials</h1></strong>
          <strong><h2>All In One Place!</h2></strong>
          {/* <a style ={{marginTop: '50px'}}href="/listings" className="btn btn-primary">Start Searching</a> */}
          <div class="search-bar">
    <form class="form-inline d-flex justify-content-center">
      <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search"/>
      <button style={{backgroundColor: 'blue', color: 'white', width: '100px'}} class="btn my-2 my-sm-0 search-btn" type="submit">Search</button>
    </form>
  </div>
        </div>
      </section>

 {/* Popular Listings Section */}
<Carousal/>
<Benefit/>

      

<div className="container-fluid" style={{ backgroundColor: 'rgb(31, 29, 29)', color: 'white', paddingTop: '20px', }}>
  <div className="row">
        <div style = {{marginTop: '45px'}}className="col-md-8">
        <ul>
            <img  src= 'x.png' alt="logo" />
                <p>Contact us if you have any question based <br />on partnership, sponsorship. Please contact us at <br /> @infoCribLink.com</p>
            </ul>
           <div className='socials' style={{paddingLeft: '50px'}}>
           <a href=""><img src= 'fb.png' alt="" /></a>
           <a href=""><img src= 'insta.png' lt="" /></a>
           <a href=""><img src='linkedin.png' alt="" /></a>
           <a href=""><img src='yt.png' alt="" /></a>
           <a href=""><img src='x.png' alt="" /></a>

           </div>
          
        </div>
        <div className='col-md-4 py-5 px-5'>
            <h3>Contact Information</h3>
            <p>Email info: info@CribLink.com</p>
            <p>Phone: 07041197027, 09029729621</p>
            <p>Address: No.7 Victory Way, Calabar, Nigeria. </p>
        </div>
       </div>
  </div>

      {/* Footer */}
      <div className="container-fluid" style={{paddingTop: '10px', backgroundColor: 'rgb(31, 29, 29)', color: 'white'}}>
        <div className="row">
       <div className='col text-center'>
            <p>copyright @{year.getFullYear()} CribLink All right Reserved. <span>Terms of Use. Privacy Policy</span></p>
        </div>
       </div>
        </div>
    </div>
  );
}

export default Home;
