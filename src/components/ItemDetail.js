// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams(); // Get the item ID from the URL
  // Dummy data for demonstration (replace this with actual data fetched from the backend)
  const item = {
    title: 'Furnished Sofa',
    description: 'A comfortable and stylish sofa in great condition.',
    price: 150,
    seller: 'John Doe',
    contact: 'john.doe@example.com',
  };

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <p><strong>Price:</strong> ${item.price}</p>
      <h4>Description</h4>
      <p>{item.description}</p>
      <h4>Seller Information</h4>
      <p><strong>Name:</strong> {item.seller}</p>
      <p><strong>Contact:</strong> {item.contact}</p>
      <button className="btn btn-primary">Contact Seller</button>
    </div>
  );
};

export default ItemDetail;

