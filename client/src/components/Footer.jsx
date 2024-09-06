import React from 'react';
import './Allcss/Footer.css';
 // Import Font Awesome CSS

const Footer = () => {
  return (
    <div className="footer">
      
      {/* Footer Logos Section */}
      <div className="footer-logo">
        <i className="fa-brands fa-facebook" style={{ color: '#2a74f4' }}></i>
        <i className="fa-brands fa-square-twitter" style={{ color: '#2f75ee' }}></i>
        <i className="fa-brands fa-square-instagram" style={{ color: '#3276ec' }}></i>
        <i className="fa-brands fa-linkedin" style={{ color: '#357df8' }}></i>
        <i className="fa-brands fa-square-youtube" style={{ color: '#2f77f4' }}></i>
        <i className="fa-brands fa-skype" style={{ color: '#3079f8' }}></i>
        <i className="fa-brands fa-google-plus" style={{ color: '#2469e0' }}></i>
      </div>

      {/* Footer Body Section */}
      <div className="footer-body">
        {/* About Us Section */}
        <div className="footer-1">
          <h3>About US</h3>
          <h4>About Us</h4>
          <h4>Delivery</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms & Condition</h4>
          <h4>Customer Links</h4>
        </div>

        {/* Customer Service Section */}
        <div className="footer-1">
          <h3>Customer Service</h3>
          <h4>Contact</h4>
          <h4>Returns</h4>
          <h4>Site Map</h4>
          <h4>Brands</h4>
          <h4>Unlimited Links</h4>
        </div>

        {/* My Account Section */}
        <div className="footer-1">
          <h3>My Account</h3>
          <h4>My Account</h4>
          <h4>Order History</h4>
          <h4>Affiliates</h4>
          <h4>Newsletter</h4>
          <h4>Gift Certificates</h4>
        </div>

        {/* Newsletter Section */}
        <div className="footer-1">
          <h3>Newsletter</h3>
          <p>Stay up to date with news and promotions by signing up for our newsletter</p>
          <div className="footer-email">
            <div className="email">
              <input
                type="email"
                placeholder="your email"
                name="email"
                id="email"
              />
            </div>
            <div className="footer-button">
              <button> 
                <i className="fa-solid fa-envelope"></i> Send
              </button>
            </div>
          </div>
          <br />
          <div className="check-footer">
            <label htmlFor="subscribe">
              <input type="checkbox" id="subscribe" name="subscribe" />
              I have read and agree to the <a href="#">Privacy Policy</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
