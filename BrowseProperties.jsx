import React from 'react';

const BrowseProperties = ({ properties = [] }) => {
  // Check if properties are available
  if (!properties.length) {
    return <div>No properties available.</div>;
  }

  return (
    <div>
      <h1>Browse Properties</h1>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img 
              src={property.image || 'default_image_url'} 
              alt={property.title} 
              className="property-image" 
            />
            <h2>{property.title}</h2>
            <p>{property.location}</p>
            <p>{`Price: $${property.price}`}</p>
            <p>{`Owner Contact: ${property.contact.name}`}</p>
            <p>{`Owner Email: ${property.contact.email}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProperties;
