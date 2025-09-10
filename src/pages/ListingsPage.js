// src/pages/ListingsPage.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListingsPage.css";

const servicesData = [
  // Lagos
  { id: 1, category: "Cleaning", title: "SparkleClean", city: "Ikeja", state: "Lagos", description: "Home and office cleaning.", image: "/images/cleaning1.jpg" },
  { id: 2, category: "Catering", title: "Delish Catering", city: "Lekki", state: "Lagos", description: "Event catering for parties and weddings.", image: "/images/catering1.jpg" },
  { id: 3, category: "Education", title: "TopClass Tutorials", city: "Yaba", state: "Lagos", description: "Exam prep and after-school support.", image: "/images/education1.jpg" },
  { id: 4, category: "Beauty", title: "Lush Beauty Bar", city: "Surulere", state: "Lagos", description: "Makeup and spa services.", image: "/images/beauty1.jpg" },

  // Abuja
  { id: 5, category: "Cleaning", title: "Elite Cleaning Hub", city: "Wuse", state: "Abuja", description: "Premium deep cleaning.", image: "/images/cleaning2.jpg" },
  { id: 6, category: "Catering", title: "Abuja Fine Dining", city: "Maitama", state: "Abuja", description: "Professional chefs for high-end dining.", image: "/images/catering2.jpg" },
  { id: 7, category: "Education", title: "Abuja Scholars", city: "Gwarinpa", state: "Abuja", description: "Private tutors for WAEC, JAMB, IELTS.", image: "/images/education2.jpg" },
  { id: 8, category: "Beauty", title: "Glamour Touch Salon", city: "Asokoro", state: "Abuja", description: "Hair, nails, and spa treatments.", image: "/images/beauty2.jpg" },

  // Rivers
  { id: 9, category: "Cleaning", title: "PHC Clean Team", city: "Port Harcourt", state: "Rivers", description: "Affordable cleaning services.", image: "/images/cleaning3.jpg" },
  { id: 10, category: "Catering", title: "Naija Tastes", city: "Bonny", state: "Rivers", description: "Local and continental dishes.", image: "/images/catering3.jpg" },
  { id: 11, category: "Education", title: "Bright Minds Tutors", city: "Obio-Akpor", state: "Rivers", description: "Private tutors for all subjects.", image: "/images/education3.jpg" },
  { id: 12, category: "Beauty", title: "Port Harcourt Glam", city: "Port Harcourt", state: "Rivers", description: "Affordable beauty treatments.", image: "/images/beauty3.jpg" },

  // Cross River
  { id: 13, category: "Cleaning", title: "Calabar Shine", city: "Calabar", state: "Cross River", description: "Reliable house cleaning.", image: "/images/cleaning4.jpg" },
  { id: 14, category: "Catering", title: "Cross River Kitchen", city: "Ogoja", state: "Cross River", description: "Traditional and modern dishes.", image: "/images/catering4.jpg" },
  { id: 15, category: "Beauty", title: "Obudu Glam", city: "Obudu", state: "Cross River", description: "Makeup and beauty services.", image: "/images/beauty4.jpg" },

  // Akwa Ibom
  { id: 16, category: "Cleaning", title: "Uyo Sparkle", city: "Uyo", state: "Akwa Ibom", description: "Residential and office cleaning.", image: "/images/cleaning5.jpg" },
  { id: 17, category: "Catering", title: "Akwa Ibom Delights", city: "Eket", state: "Akwa Ibom", description: "Event catering and pastries.", image: "/images/catering5.jpg" },
  { id: 18, category: "Education", title: "SmartKids Tutors", city: "Ikot Ekpene", state: "Akwa Ibom", description: "Private home lessons.", image: "/images/education4.jpg" },

  // Delta
  { id: 19, category: "Cleaning", title: "Asaba Sparkle", city: "Asaba", state: "Delta", description: "Quick home cleaning services.", image: "/images/cleaning6.jpg" },
  { id: 20, category: "Catering", title: "Warri Kitchen", city: "Warri", state: "Delta", description: "Finger foods and traditional meals.", image: "/images/catering6.jpg" },
  { id: 21, category: "Beauty", title: "Delta Glam", city: "Sapele", state: "Delta", description: "Salon and spa services.", image: "/images/beauty5.jpg" },

  // Enugu
  { id: 22, category: "Cleaning", title: "Enugu Sparkle", city: "Enugu", state: "Enugu", description: "Trusted cleaning services.", image: "/images/cleaning7.jpg" },
  { id: 23, category: "Education", title: "Nsukka Scholars", city: "Nsukka", state: "Enugu", description: "University prep tutors.", image: "/images/education5.jpg" },
  { id: 24, category: "Beauty", title: "Enugu Glam Bar", city: "Agbani", state: "Enugu", description: "Hair and nails services.", image: "/images/beauty6.jpg" },

  // Kano
  { id: 25, category: "Cleaning", title: "Kano Cleaners", city: "Kano", state: "Kano", description: "Household and office cleaning.", image: "/images/cleaning8.jpg" },
  { id: 26, category: "Catering", title: "Kano Feast", city: "Gwale", state: "Kano", description: "Catering for weddings and parties.", image: "/images/catering7.jpg" },
  { id: 27, category: "Education", title: "Tarauni Tutors", city: "Tarauni", state: "Kano", description: "Private academic support.", image: "/images/education6.jpg" },
  { id: 28, category: "Beauty", title: "Kano Beauty Hub", city: "Nasarawa", state: "Kano", description: "Beauty and spa services.", image: "/images/beauty7.jpg" },
];


const ListingsPage = () => {
  const { state, city } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const filteredServices = servicesData.filter(
    (service) =>
      (!state || service.state.toLowerCase() === state.toLowerCase()) &&
      (!city || service.city.toLowerCase() === city.toLowerCase()) &&
      (!category || service.category === category)
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Services in {city}, {state}</h2>
        <p className="text-muted">Browse categories and providers in your area.</p>
      </div>

      {/* Category Filter */}
      <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
        <select className="form-select w-auto" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Catering">Catering</option>
          <option value="Education">Education</option>
          <option value="Beauty">Beauty</option>
        </select>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
Change Location
</button>
      </div>

      <div className="row">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div className="col-md-6 col-lg-4 mb-4" key={service.id}>
              <div className="card h-100 shadow-sm service-card" onClick={() => navigate(`/services/${service.id}`)}>
                <img src={service.image} className="card-img-top" alt={service.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <button className="btn btn-secondary mt-auto" onClick={() => navigate(`/services/${service.id}`)}>See More</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No services found in {city}, {state}.</p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
