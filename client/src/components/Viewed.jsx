import React from 'react';
import glassesImage from '../images/viewedj33.jpg';
import headphoneImage from '../images/headphone j1.jpg';
import heelsImage from '../images/heels j5.jpg';
import viewedImage from '../images/viewedj22.webp';
import './Allcss/Viewed.css';

const Viewed = () => {
    return (
      <div className="darkgreybg">
        <div className="wrapper">
          <div className="most-viewed">
            <h2 className="heading-with-border">Most Viewed</h2>
            <hr className="rule" />
            <div className="most-viewed-items-container">
  
              {/* Item 1 */}
              <div className="most-viewed-item">
                <div className="most-viewed-img">
                  <img src={glassesImage} alt="Glasses for men" />
                </div>
                <div className="most-viewed-item-details">
                  <h3>Glasses for men</h3>
                  <p>$397.0</p>
                  <div className="most-viewed-items-icons">
                    <a href=""><i className="fa fa-cart-plus"></i></a>
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-exchange"></i></a>
                  </div>
                </div>
              </div>
  
              {/* Item 2 */}
              <div className="most-viewed-item">
                <div className="most-viewed-img">
                  <img src={headphoneImage} alt="Headphones for men" />
                </div>
                <div className="most-viewed-item-details">
                  <h3>Headphones for men</h3>
                  <p>$397.0</p>
                  <div className="most-viewed-items-icons">
                    <a href=""><i className="fa fa-cart-plus"></i></a>
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-exchange"></i></a>
                  </div>
                </div>
              </div>
  
              {/* Item 3 */}
              <div className="most-viewed-item">
                <div className="most-viewed-img">
                  <img src={heelsImage} alt="Heels for women" />
                </div>
                <div className="most-viewed-item-details">
                  <h3>Heels for women</h3>
                  <p>$397.0</p>
                  <div className="most-viewed-items-icons">
                    <a href=""><i className="fa fa-cart-plus"></i></a>
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-exchange"></i></a>
                  </div>
                </div>
              </div>
  
              {/* Item 4 */}
              <div className="most-viewed-item">
                <div className="most-viewed-img">
                  <img src={viewedImage} alt="Glasses for men" />
                </div>
                <div className="most-viewed-item-details">
                  <h3>Glasses for men</h3>
                  <p>$397.0</p>
                  <div className="most-viewed-items-icons">
                    <a href=""><i className="fa fa-cart-plus"></i></a>
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-exchange"></i></a>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Viewed;
