import React from 'react';
import './Allcss/Header.css';


const Header = () => {
  return (
    <div className="Navbar">
      <ul className="nav1">
        <li><i className="fa-solid fa-house"></i> Home</li>
        <li><i className="fa-regular fa-star"></i> About Us</li>
        <li><i className="fa-regular fa-envelope"></i> Contact</li>
        <li><i className="fa-solid fa-question"></i> FAQ <i className="fa-solid fa-caret-down"></i></li>
      </ul>

      <ul className="nav2">
        <li><i className="fa-solid fa-globe" style={{ color: '#fa1900' }}></i> English <i className="fa-solid fa-caret-down"></i></li>
        <li><i className="fa-solid fa-dollar-sign"></i> US Dollar <i className="fa-solid fa-caret-down"></i></li>
      </ul>

      <ul className="nav3">
        <li><i className="fa-solid fa-user"></i> <i className="fa-solid fa-bars fa-sm"></i> More Menus <i className="fa-solid fa-caret-down"></i></li>
        <li><i className="fa-solid fa-truck"></i> Delivery</li>
      </ul>

    
    </div>
  );
};

export default Header;
