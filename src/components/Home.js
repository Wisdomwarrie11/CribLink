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
<section style={{backgroundColor:'white' }} id="benefits" className="py-5">
  <div className="container">
   
    <div className="row align-items-center mb-5">
      <div className="col-md-6 Heropage px-lg-2">
      <strong><h1>LEAVE HOME TO FIND HOME</h1></strong>
      <h2>Your accomodations and essentials all in one place!</h2>
      
      </div>
      <div className="col-md-6">
        <img style={{borderRadius:'70px'}} src="happyguy.jpeg" alt="Students Benefits" className="img-fluid" />
      </div>
    </div>
  </div>
</section>


 {/* Popular Listings Section */}

<section style={{backgroundColor: 'rgb(240, 243, 245)'}}>
<Carousal/>
<Benefit/>
</section>

      

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
