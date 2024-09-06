import React from 'react';
import './Allcss/Mainbody.css';
import image2 from '../images/journal b2.PNG';
import image1 from '../images/journal h3.png';
import image3 from '../images/journalb3.PNG';
const Mainbody = () => {
  return (
    <div className="wrapper">
      <div className="b-1">
        <div className="b-b-1">
          <div id="carouselExampleCaptions" className="carousel-slide" style={{ width: '100%' }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="slide 3"></button>
            </div>

            <div className="carousel-inner" style={{ borderRadius: '0.4rem' }}>
              <div className="carousel-item active" data-bs-interval="10000" style={{ height: '53vh' }}>
                <img src={image1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block" style={{ textAlign: 'left' }}>
                  <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
                  <p style={{ fontSize: '2.5rem', color: 'black' }}>Best mobile options <br /> at any resolution</p>
                  <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="10000" style={{ height: '53vh' }}>
                <img src={image1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block" style={{ textAlign: 'left' }}>
                  <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
                  <p style={{ fontSize: '2.5rem', color: 'black' }}>Best mobile options <br /> at any resolution</p>
                  <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="10000" style={{ height: '53vh' }}>
                <img src={image1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block" style={{ textAlign: 'left' }}>
                  <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
                  <p style={{ fontSize: '2.5rem', color: 'black' }}>Best mobile options <br /> at any resolution</p>
                  <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="b-b-2">
          <div className="bb-21">
            <img src={image2} alt="phone" />
          </div>
          <div className="bb-21">
            <img src={image3} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
