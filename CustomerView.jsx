import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PropertyList.css';

const CustomerView = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  // Check if customer is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('customerLoggedIn');
    if (!isLoggedIn) {
      navigate('/customer-login'); // Redirect to login if not logged in
    }
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    setProperties(storedProperties);
  }, [navigate]);

  return (
    <div className="property-list-container">
      <h2>Available Properties</h2>
      <div className="property-list">
        {properties.length > 0 ? (
          properties.map((property, index) => !property.soldOut && (
            <div className="property-card" key={index}>
              <div className="property-image">
                <img src={property.image} alt="Property" />
              </div>
              <div className="property-details">
                <h3>{property.title}</h3>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Total Price:</strong> ₹{property.totalPrice}</p>
                <p><strong>Rent Price:</strong> ₹{property.rentPrice}</p>
                {property.rentToOwn && (
                  <>
                    <p><strong>Rent to Own:</strong> Yes</p>
                    <p><strong>Down Payment Percentage:</strong> {property.downPaymentPercent}%</p>
                    <p><strong>Final Price After Down Payment:</strong> ₹{property.finalPrice}</p>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No available properties.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerView;
