import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './Allcss/Whybuy.css'; 
import bag from '../images/journal d1.PNG';
import fashion from '../images/journal c2.PNG';
import beauty from '../images/journal d4.PNG';
import home from '../images/journal d3.PNG';
import foot from '../images/journal d5.PNG';



const Whybuy = () => {
  return (
    <div className="wrapper">
      <div className="c-1">
        <div className="heading-c">
          <h2 className="heading-with-border">Why Buy From Us?</h2>
        </div>
        <div className="para-c">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti quis laboriosam? Veniam, quo doloribus dolorem ad enim debitis error, sed beatae maiores rem voluptate velit quidem magni numquam reprehenderit.
            <a href="#">Learn More</a>
          </p>
        </div>
        <div>
          <ul className="Options">
            <li>FEATURED</li>
            <li>ELECTRONICS</li>
            <li>BEAUTY</li>
            <li>FASHION</li>
          </ul>
        </div>
        <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <img src={fashion} className="d-block w-100" alt="Fashion" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>FASHION</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={bag} className="d-block w-100" alt="Bags" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>BAGS</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={beauty} className="d-block w-100" alt="Health & Beauty" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>HEALTH & BEAUTY</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={home} className="d-block w-100" alt="Home Decor" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>HOME DECOR</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <img src={bag} className="d-block w-100" alt="Bags" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>BAGS</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={beauty} className="d-block w-100" alt="Health & Beauty" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>HEALTH & BEAUTY</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={foot} className="d-block w-100" alt="Footwear" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>FOOTWEAR</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src={home} className="d-block w-100" alt="Home Decor" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>HOME DECOR</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whybuy;
