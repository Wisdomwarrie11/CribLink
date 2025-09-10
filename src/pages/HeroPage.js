import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroPage.css"; 

// Expanded states and cities
const statesData = {
  Lagos: ["Ikeja", "Lekki", "Yaba", "Surulere", "Victoria Island", "Ajah", "Ikorodu"],
  Abuja: ["Garki", "Wuse", "Maitama", "Gwarinpa", "Asokoro", "Kubwa"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Bonny", "Okrika", "Eleme"],
  "Cross River": ["Calabar", "Ogoja", "Ikom", "Obudu", "Akpabuyo"],
  "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Abak"],
  Delta: ["Asaba", "Warri", "Sapele", "Ughelli", "Agbor", "Oleh"],
  Enugu: ["Enugu", "Nsukka", "Awgu", "Udi", "Agbani"],
  Kano: ["Kano", "Gwale", "Tarauni", "Nasarawa", "Dala"],
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
      }}
    >
      <div className="hero-container d-flex flex-column align-items-center justify-content-center text-center text-white">
        <div style={{ marginBottom: "30px", padding: "20px 10px" }} className="hero-content">
          <h1 className="display-4 fw-bold mb-3">Find Trusted Home Delivery Services Near You</h1>
          <p className="lead mb-4">Cleaning | Catering | Education | Beauty | And more!</p>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            {/* State dropdown */}
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
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/* City dropdown */}
            <select
              className="form-select w-auto"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
            >
              <option value="">Select Your City</option>
              {selectedState &&
                statesData[selectedState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>

            {/* Search button */}
            <button
              style={{ backgroundColor: "rgb(3, 44, 80)" }}
              className="btn btn-primary px-4"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
