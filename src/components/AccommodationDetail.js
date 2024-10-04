// src/components/AccommodationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const AccommodationDetail = () => {
  const { id } = useParams(); // Get the accommodation ID from the URL
  // Dummy data for demonstration (replace this with actual data fetched from the backend)
  const accommodation = {
    title: 'Spacious Room in Downtown',
    description: 'A spacious room located in the heart of downtown, close to shops and public transport.',
    price: 500,
    location: 'Downtown',
    features: ['Free WiFi', 'Air Conditioning', 'Laundry Service'],
  };

  return (
    <div className="accommodation-detail">
      <h2>{accommodation.title}</h2>
      <p><strong>Location:</strong> {accommodation.location}</p>
      <p><strong>Price:</strong> ${accommodation.price} / month</p>
      <h4>Description</h4>
      <p>{accommodation.description}</p>
      <h4>Features</h4>
      <ul>
        {accommodation.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn btn-primary">Contact Agent</button>
    </div>
  );
};

export default AccommodationDetail;
