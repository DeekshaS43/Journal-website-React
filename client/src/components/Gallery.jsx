
import React from 'react';
import './Allcss/Gallery.css'; 
import gallery1 from '../images/gallery j1.jpeg';
import gallery2 from '../images/gallery j2.png';
import gallery3 from '../images/gallery j3.jpeg';
import gallery4 from '../images/gallery j4.jpeg';
import gallery5 from '../images/gallery j5.jpeg';
import gallery6 from '../images/gallery j6.jpeg';
import gallery7 from '../images/gallery j7.jpeg';
import gallery8 from '../images/gallery j8.jpeg';
import gallery9 from '../images/gallery j9.jpeg';


const Gallery = () => {
  return (
    <div className="cont">
      <div className="wrapper">
        <div className="content">
          <h2 className="heading-with-border">Improved Gallery Module</h2>
          <p>
            The Gallery module supports images, videos, and can also act as banners that can point to any other page or
            open other Popup modules. Create different modules with images, videos, banners or a combination of all. Add
            your modules on any page in any grid format.
          </p>
          <div className="gallery">
            <div className="gallery-item">
              <img src={gallery1} alt="Image 1" />
            </div>
            <div className="gallery-item">
              <img src={gallery2} alt="Image 2" />
            </div>
            <div className="gallery-item">
              <img src={gallery3} alt="Image 3" />
            </div>
            <div className="gallery-item">
              <img src={gallery4} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={gallery5} alt="Image 5" />
            </div>
            <div className="gallery-item">
              <img src={gallery6} alt="Image 6" />
            </div>
            <div className="gallery-item">
              <img src={gallery7} alt="Image 7" />
            </div>
            <div className="gallery-item">
              <img src={gallery8} alt="Image 8" />
            </div>
            <div className="gallery-item">
              <img src={gallery9} alt="Image 9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
