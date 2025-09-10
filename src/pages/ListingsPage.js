// src/pages/ListingsPage.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListingsPage.css";

const servicesData = [
  // Cleaning
  { id: 1, category: "Cleaning", title: "SparkleClean", city: "Ikeja", state: "Lagos", description: "Home and office cleaning.", image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0d4" },
  { id: 2, category: "Cleaning", title: "FreshStart Cleaners", city: "Lekki", state: "Lagos", description: "Affordable cleaning.", image: "https://images.unsplash.com/photo-1600585154340-9f6c94b1a43a" },
  { id: 3, category: "Cleaning", title: "Elite Cleaning Hub", city: "Wuse", state: "Abuja", description: "Premium deep cleaning.", image: "https://images.unsplash.com/photo-1597093720334-c0c1e9f46c62" },

  // Catering
  { id: 4, category: "Catering", title: "Delish Catering", city: "Lekki", state: "Lagos", description: "Event catering.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088" },
  { id: 5, category: "Catering", title: "Naija Tastes", city: "Port Harcourt", state: "Rivers", description: "Local and continental dishes.", image: "https://images.unsplash.com/photo-1516685018646-549d6c64c1f6" },
  { id: 6, category: "Catering", title: "Abuja Fine Dining", city: "Maitama", state: "Abuja", description: "Professional chefs.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },

  // Education
  { id: 7, category: "Education", title: "Bright Minds Tutors", city: "Port Harcourt", state: "Rivers", description: "Private tutors for all subjects.", image: "https://images.unsplash.com/photo-1584697964154-27e5d9c19f3c" },
  { id: 8, category: "Education", title: "TopClass Tutorials", city: "Ikeja", state: "Lagos", description: "Exam prep and after-school support.", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0" },
  { id: 9, category: "Education", title: "Abuja Scholars", city: "Wuse", state: "Abuja", description: "Experienced teachers for WAEC, JAMB, IELTS.", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" },

  // Beauty
  { id: 10, category: "Beauty", title: "Glamour Touch Salon", city: "Wuse", state: "Abuja", description: "Hair, nails, and spa treatments.", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30" },
  { id: 11, category: "Beauty", title: "Lush Beauty Bar", city: "Lekki", state: "Lagos", description: "Makeup and beauty services.", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { id: 12, category: "Beauty", title: "Port Harcourt Glam", city: "Port Harcourt", state: "Rivers", description: "Affordable beauty treatments.", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
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
                  <button  style={{backgroundColor: 'rgb(3, 44, 80)'}} className="btn btn-primary mt-auto" onClick={() => navigate(`/services/${service.id}`)}>See More</button>
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
