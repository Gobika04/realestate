import React, { useState } from 'react';

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    totalPrice: '',
    rentPrice: '',
    year: '',
    rentToOwn: false, // Rent-to-own option
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  // Handle checkbox change for rent-to-own option
  const handleRentToOwnChange = () => {
    setPropertyData({
      ...propertyData,
      rentToOwn: !propertyData.rentToOwn,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(propertyData);
    // Add your form submission logic here, like sending data to a backend or saving it to state
  };

  return (
    <div className="container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <label htmlFor="title">Property Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={propertyData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={propertyData.location}
            onChange={handleChange}
            required
          />

          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={propertyData.totalPrice}
            onChange={handleChange}
            required
          />

          <label htmlFor="rentPrice">Monthly Rent Price</label>
          <input
            type="number"
            id="rentPrice"
            name="rentPrice"
            value={propertyData.rentPrice}
            onChange={handleChange}
            required
          />

          <label htmlFor="year">Number of Years</label>
          <input
            type="number"
            id="year"
            name="year"
            value={propertyData.year}
            onChange={handleChange}
            required
          />

          <div>
            <input
              type="checkbox"
              id="rentToOwn"
              name="rentToOwn"
              checked={propertyData.rentToOwn}
              onChange={handleRentToOwnChange}
            />
            <label htmlFor="rentToOwn">Rent to Own</label>
          </div>

          <button type="submit">Add Property</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
