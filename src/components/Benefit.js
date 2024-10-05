const Benefit = () =>{
return(

    <>
    {/* <!-- Benefits Section --> */}
<section id="benefits" className="py-5">
  <div className="container">
   
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <h2>Benefits for Students</h2>
        <p>
          By using this platform, students gain easy access to affordable accommodations and
          second-hand household items near their university. No more hassle of going from place to
          place searching. With our tailored search filters, you can find a room or item that suits
          your needs within minutes. You can now focus on your studies!
        
        </p>
      </div>
      <div className="col-md-6">
        <img src="girl.jpeg" alt="Students Benefits" className="img-fluid" />
      </div>
    </div>


    <div className="row align-items-center">
      <div className="col-md-6 order-md-2">
        <h2>Benefits for Agents</h2>
        <p>
          Agents can reach a large number of students who are actively seeking accommodation or
          household items. By listing on our platform, agents can sell or rent out their properties
          faster and easier. The seamless user experience will help agents manage their listings and
          communicate with potential tenants more efficiently.
        </p>
      </div>
      <div className="col-md-6 order-md-1">
        <img style={{height: '400px', width: '500px'}} src="man.jpeg" alt="Agents Benefits" className="img-fluid" />
      </div>
    </div>
  </div>
</section>

    
    </>
)

};

export default Benefit