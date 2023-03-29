import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Restaurant.css';

function Restaurant() {
  const handleLinkClick = () => {
    setTimeout(() => window.location.reload(), 100); // set a delay of 100ms before reloading the page
  };

  return (
    <div className="restaurant-container">
      <h1>Restaurants</h1>
      <div className="restaurant-card">
        <Link to="/menu1" onClick={handleLinkClick}> 
          <img src="restaurant1.jpg" alt="Restaurant 1" />
          <h3>Restaurant 1</h3>
        </Link>
      </div>
      <div className="restaurant-card">
        <Link to="/menu2" onClick={handleLinkClick}>
          <img src="restaurant2.jpg" alt="Restaurant 2" />
          <h3>Restaurant 2</h3>
        </Link>
      </div>
      <div className="restaurant-card">
        <Link to="/menu3" onClick={handleLinkClick}>
          <img src="restaurant3.jpg" alt="Restaurant 3" />
          <h3>Restaurant 3</h3>
        </Link>
      </div>
    </div>
  );
}

export default Restaurant;
