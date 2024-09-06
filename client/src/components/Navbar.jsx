import React from 'react';
import './Allcss/Navbar.css';
import logo from '../images/logo.png'; 


const Navbar = () => {
  return (
    <div className="Navbar-a">
      <div className="nav-heading">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-search">
        <button className="All">All <i className="fa-solid fa-caret-down"></i></button>
        <input className="search" type="text" placeholder="search here..." />
        <button className="glass"><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>

      <div className="nav-icon">
        <div>
          <i className="fa-solid fa-circle-user"></i>
          <label>Login</label>
        </div>
        <div>
          <i className="fa-solid fa-pen"></i>
          <label>Register</label>
        </div>
        <div>
          <i className="fa-regular fa-heart"></i>
          <label>Wishlist</label>
        </div>
        <div>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <label>Compare</label>
        </div>
      </div>

      <div className="nav-items">
        <a className="p-0">0 item(s)- $0.00
          <button className="ham"><i className="fa fa-cart-plus"></i></button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;