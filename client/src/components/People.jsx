import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';

import './Allcss/People.css';


const People = () => {

    const options = {
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      },
      nav: false,
      dots: true
    }



return (
    <div className="peoples">
      <div className="wrapper">
        <div className="peoples-heading">
          <h3 className="heading-with-border">People Saying About US</h3>
        </div>
        <div className="people-as">
         
        <OwlCarousel className='owl-theme section row' loop margin={20} autoplay {...options} >
            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- charlibaltimore</h5>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- chromebandit</h5>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- kellyhorne</h5>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- charlibaltimore</h5>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- chromebandit</h5>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="people-lum">
                <div className="logo-people">
                  <i className="fa-solid fa-quote-left fa-lg" style={{ color: '#ff2b0a' }}></i>
                </div>
                <div className="para-people">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="link-people">
                  <h5>- kellyhorne</h5>
                </div>
              </div>
            </div>

            {/* Add more carousel items as needed */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default People;