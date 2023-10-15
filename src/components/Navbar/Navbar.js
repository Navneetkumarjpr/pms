import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to simulate login/logout
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="navbar">
      <div className="company-name">Product Managment System</div>
      {isLoggedIn ? (
        <button className="profile-button">Profile</button>
      ) : (
        <button className="login-button" onClick={toggleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
