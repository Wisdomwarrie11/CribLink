
const Carousal = () =>{
    return(
    <>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    <div class="carousel-item active ">
    <div className="col-md-4">
              <div className="listing-card">
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
                <h3>Second-hand Study Desk</h3>
                <p>₦5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>
            </div>
    </div>

    <div class="carousel-item">
    <div className="listing-card">
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
                <h3>Second-hand Study Desk</h3>
                <p>₦5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>
    </div>

    <div class="carousel-item">
    <div className="listing-card">
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
                <h3>Second-hand Study Desk</h3>
                <p>₦5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>
    </div>
 

    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </>
    )
};

export default Carousal