
const Carousal = () =>{
    return(
    <>
   <section className="listings-section">
        <div className="container">
          <h2>RECENT LISTING</h2>
          <h3>Find the perfect accommodation here</h3>

          {/* Carousel for listings */}
          <div id="listingsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room1.jpg" alt="Room 1" className="listing-img" />
            <h3>Spacious Room in Downtown</h3>
            <p>₦20,000 per month</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room2.jpg" alt="Room 2" className="listing-img" />
            <h3>Apartment near Campus</h3>
            <p>₦50,000 per month</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="item1.jpg" alt="Item 1" className="listing-img" />
            <h3>Second-hand Study Desk</h3>
            <p>₦5,000</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room2.jpg" alt="Room 3" className="listing-img" />
            <h3>Single Room in Student Hostel</h3>
            <p>₦10,000 per month</p>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="gen.jpeg" alt="Item 2" className="listing-img" />
            <h3>Second-hand Generator</h3>
            <p>₦30,000</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="table.jpeg" alt="Room 4" className="listing-img" />
            <h3>Reading Table</h3>
            <p>₦7,000</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="bucket.jpeg" alt="Item 3" className="listing-img" />
            <h3>Bucket</h3>
            <p>₦1,500</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="table.jpeg" alt="Room 5" className="listing-img" />
            <h3>Reading desk</h3>
            <p>₦15,000 </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Carousel Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#listingsCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#listingsCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


          {/* Show More Button */}
          <div className="text-center mt-4">
            <a href="/listings" className="btn btn-secondary">Show More Listings</a>
          </div>
        </div>
      </section>

{/* LISTING SECTION FOR ITEMS */}
      <section className="listings-section">
        <div className="container">
          <h2>RECENT LISTING</h2>
          <h3>Find the right item here</h3>

          {/* Carousel for listings */}
          <div id="listingsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room1.jpg" alt="Room 1" className="listing-img" />
            <h3>Spacious Room in Downtown</h3>
            <p>₦20,000 per month</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room2.jpg" alt="Room 2" className="listing-img" />
            <h3>Furnished Apartment near Campus</h3>
            <p>₦50,000 per month</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="item1.jpg" alt="Item 1" className="listing-img" />
            <h3>Second-hand Study Desk</h3>
            <p>₦5,000</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="room2.jpg" alt="Room 3" className="listing-img" />
            <h3>Single Room in Student Hostel</h3>
            <p>₦10,000 per month</p>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="gen.jpeg" alt="Item 2" className="listing-img" />
            <h3>Second-hand Generator</h3>
            <p>₦30,000</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="table.jpeg" alt="Room 4" className="listing-img" />
            <h3>Reading Table</h3>
            <p>₦7,000</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="bucket.jpeg" alt="Item 3" className="listing-img" />
            <h3>Bucket</h3>
            <p>₦1,500</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="listing-card">
            <img src="table.jpeg" alt="Room 5" className="listing-img" />
            <h3>Reading desk</h3>
            <p>₦15,000 </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Carousel Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#listingsCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#listingsCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


          {/* Show More Button */}
          <div className="text-center mt-4">
            <a href="/listings" className="btn btn-secondary">Show More Listings</a>
          </div>
        </div>
      </section>
    </>
    )
};

export default Carousal