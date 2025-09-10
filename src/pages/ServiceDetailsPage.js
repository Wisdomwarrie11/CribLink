// src/pages/ServiceDetailsPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const servicesData = [
  // Keep the same services data from ListingsPage
  { id: 1, category: "Cleaning", title: "SparkleClean", city: "Ikeja", state: "Lagos", description: "Home and office cleaning.", image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0d4", contact: "https://wa.me/2348012345678" },
  { id: 2, category: "Cleaning", title: "FreshStart Cleaners", city: "Lekki", state: "Lagos", description: "Affordable cleaning.", image: "https://images.unsplash.com/photo-1600585154340-9f6c94b1a43a", contact: "https://wa.me/2348012345679" },
  { id: 3, category: "Cleaning", title: "Elite Cleaning Hub", city: "Wuse", state: "Abuja", description: "Premium deep cleaning.", image: "https://images.unsplash.com/photo-1597093720334-c0c1e9f46c62", contact: "https://wa.me/2348012345680" },
  // Add all other services similarly...
];

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h3>Service not found</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card mb-4 shadow-sm">
        <img src={service.image} className="card-img-top" alt={service.title} style={{ height: "300px", objectFit: "cover" }} />
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <p className="text-muted mb-2"><strong>Category:</strong> {service.category}</p>
          <p className="text-muted mb-2"><strong>Location:</strong> {service.city}, {service.state}</p>
          <p className="card-text">{service.description}</p>
          <div className="d-flex gap-3 mt-3 flex-wrap">
            <a href={service.contact} target="_blank" rel="noreferrer" className="btn btn-success">Contact via WhatsApp</a>
            {/* You can add social media or website links here */}
          </div>
          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
