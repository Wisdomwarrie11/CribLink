
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroPage.css"; 

const statesData = {
  Lagos: ["Ikeja", "Lekki", "Yaba", "Surulere"],
  Abuja: ["Garki", "Wuse", "Maitama"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Bonny"],
};

const HeroPage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate(`/listings/${selectedState}/${selectedCity}`);
    } else {
      alert("Please select both state and city.");
    }
  };

  return (
   <section
   style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "60px 20px",
    backgroundImage: `linear-gradient(rgba(12, 45, 60, 0.6), rgba(0, 0, 0, 0.6)), url('livinghome.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
  }}>
     <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center text-white">

<div style={{marginBottom: '30px', padding: '20px 10px'}} className="hero-content">
  <h1 className="display-4 fw-bold mb-3">Find Trusted Home Delivery Services Near You</h1>
  <p className="lead mb-4">Cleaning | Catering | Education | Beauty | And more!</p>

  <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
    <select
      className="form-select w-auto"
      value={selectedState}
      onChange={(e) => {
        setSelectedState(e.target.value);
        setSelectedCity(""); // reset city when state changes
      }}
    >
      <option value="">Select Your State</option>
      {Object.keys(statesData).map((state) => (
        <option key={state} value={state}>{state}</option>
      ))}
    </select>

    <select
      className="form-select w-auto"
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      disabled={!selectedState}
    >
      <option value="">Select Your City</option>
      {selectedState &&
        statesData[selectedState].map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
    </select>

    <button style={{backgroundColor: 'rgb(3, 44, 80)'}} className="btn btn-primary px-4" onClick={handleSearch}>
      Search
    </button>
  </div>
</div>
</div>
   </section>
  );
};

export default HeroPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./HeroPage.css"; // custom styling

// const statesData = {
//   Lagos: ["Ikeja", "Lekki", "Yaba", "Surulere"],
//   Abuja: ["Garki", "Wuse", "Maitama"],
//   Rivers: ["Port Harcourt", "Obio-Akpor", "Bonny"],
// };

// const HeroPage = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     if (selectedState && selectedCity) {
//       navigate(`/listings/${selectedState}/${selectedCity}`);
//     }
//   };

//   return (
//     <div className="hero-container">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="/">
//             HomeServices
//           </a>
//           <div className="collapse navbar-collapse justify-content-end">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="hero-content d-flex flex-column justify-content-center align-items-center text-center">
//         <h1 className="display-4 fw-bold text-white mb-3 animate__animated animate__fadeInDown">
//           Find Trusted Home Services Near You
//         </h1>
//         <p className="lead text-light mb-4 animate__animated animate__fadeInUp">
//           Connect with reliable service providers in your city.
//         </p>

//         {/* State Dropdown */}
//         <div className="d-flex flex-column flex-md-row gap-3 w-75 justify-content-center">
//           <select
//             className="form-select form-select-lg"
//             value={selectedState}
//             onChange={(e) => {
//               setSelectedState(e.target.value);
//               setSelectedCity("");
//             }}
//           >
//             <option value="">Select State</option>
//             {Object.keys(statesData).map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>

//           {/* City Dropdown */}
//           {selectedState && (
//             <select
//               className="form-select form-select-lg"
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               <option value="">Select City</option>
//               {statesData[selectedState].map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           )}

//           <button
//             className="btn btn-lg btn-primary px-4"
//             onClick={handleRedirect}
//             disabled={!selectedCity}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroPage;
