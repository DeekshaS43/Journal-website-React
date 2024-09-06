import React from 'react';
import './Allcss/Navgray.css'; // Optional: import a CSS file for styling

const Navgray = () => {
  return (
    <div className="navgray">
      <div className="gray1">
        <div className="grayicon">
          <i className="fa-solid fa-truck-fast fa-2x" style={{ color: '#f99201' }}></i>
        </div>
        <div className="graytext">
          <p className="main">Free Shipping</p>
          <p className="sub">Free delivery over $100</p>
        </div>
      </div>
      <div className="gray1">
        <div className="grayicon">
          <i className="fa-solid fa-reply fa-2x" style={{ color: '#fc9403' }}></i>
        </div>
        <div className="graytext">
          <p className="main">Easy Returns</p>
          <p className="sub">Free returns within 30 days</p>
        </div>
      </div>
      <div className="gray1">
        <div className="grayicon">
          <i className="fa-solid fa-shield fa-2x" style={{ color: '#ff7605' }}></i>
        </div>
        <div className="graytext">
          <p className="main">Secure Payment</p>
          <p className="sub">Safe and secure checkout</p>
        </div>
      </div>
      <div className="gray1">
        <div className="grayicon">
          <i className="fa-solid fa-cube fa-2x" style={{ color: '#fc8803' }}></i>
        </div>
        <div className="graytext">
          <p className="main">Wide Selection</p>
          <p className="sub">Choose from a large range of products</p>
        </div>
      </div>
    </div>
  );
};

export default Navgray;