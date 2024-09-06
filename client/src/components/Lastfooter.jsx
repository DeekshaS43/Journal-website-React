import React from 'react';
import './Allcss/Lastfooter.css'; // Import Font Awesome CSS

const FooterLast = () => {
  return (
    <div className="footer-last">
      {/* Copyright Section */}
      <div className="footer-last-1">
        <h5>Copyright @ 2014 Your Store All Rights Reserved</h5>
      </div>

      {/* Payment Methods Section */}
      <div className="footer-last-2">
        <i className="fa fa-brands fa-cc-visa"></i>
        <i className="fa-solid fa-credit-card"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-paypal"></i>
        <i className="fa-brands fa-cc-stripe"></i>
        <i className="fa-brands fa-cc-discover"></i>
      </div>
    </div>
  );
};

export default FooterLast;
