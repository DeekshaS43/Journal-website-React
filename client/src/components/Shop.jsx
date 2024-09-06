import React from 'react';
import { useEffect } from 'react';
import './Allcss/Shop.css'; 
import brand1 from '../images/brandj1.jpeg';
import brand2 from '../images/brandj2.jpeg';
import brand3 from '../images/brandj3.jpeg';
import brand4 from '../images/brandj4.jpeg';
import brand5 from '../images/brandj5.png';
import brand6 from '../images/brandj6.jpeg';
import brand7 from '../images/brandj7.jpeg';
import brand8 from '../images/brandj8.jpeg';
import brand9 from '../images/brandj9.jpeg';
import brand10 from '../images/brandj10.jpeg';
import brand11 from '../images/brandj11.jpeg';
import brand12 from '../images/brandj12.jpeg';
import brand14 from '../images/brandj14.jpeg';
import brand15 from '../images/brandj15.jpeg';

const Shop = () => {
    // useEffect(() => {
    //   const sliderTrack = document.querySelector('.slider-track');
    //   const slides = document.querySelectorAll('.slide');
  
    
    // }, []);
  
    return (
      <div className="wrapper">
        <div className="shop">
          <div className="shop-heading">
            <h3 className="heading-with-border">Shop by Brand</h3>
          </div>
          <div className="slider">
            <div className="slider-track">
              <div className="scrap">
                <img src={brand1} alt="Brand 1" />
              </div>
              <div className="scrap">
                <img src={brand2} alt="Brand 2" />
              </div>
              <div className="scrap">
                <img src={brand3} alt="Brand 3" />
              </div>
              <div className="scrap">
                <img src={brand4} alt="Brand 4" />
              </div>
              <div className="scrap">
                <img src={brand5} alt="Brand 5" />
              </div>
              <div className="scrap">
                <img src={brand6} alt="Brand 6" />
              </div>
              <div className="scrap">
                <img src={brand7} alt="Brand 7" />
              </div>
              <div className="scrap">
                <img src={brand8} alt="Brand 8" />
              </div>
              <div className="scrap">
                <img src={brand9} alt="Brand 9" />
              </div>
              <div className="scrap">
                <img src={brand10} alt="Brand 10" />
              </div>
              <div className="scrap">
                <img src={brand11} alt="Brand 11" />
              </div>
              <div className="scrap">
                <img src={brand12} alt="Brand 12" />
              </div>
              <div className="scrap">
                <img src={brand14} alt="Brand 14" />
              </div>
              <div className="scrap">
                <img src={brand15} alt="Brand 15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shop;
