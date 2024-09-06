import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import fashion  from '../images/journal c2.PNG';
import fashion1 from '../images/fashion j1.jpg';
import fashion2 from '../images/fashion j2.jpg';
import fashion3 from '../images/fashion j1.jpg';
import fashion4 from '../images/fashion j4.webp';
import './Allcss/Category.css';


const Category = () => {

    const options = {
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        1000: {
          items: 4,
        }
      },
      nav: false,
      dots: true
    }

    return (
        <div className="e-allabove">
          <div className="wrapper">
            <h2 className="heading-with-border">Featured Category</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iusto odit, omnis blanditiis itaque corrupti
              facilis vel id nihil a! Maiores est adipisci praesentium inventore. Facilis dolores impedit distinctio
              mollitia!
            </p>
    
            <div className="e-all">
              <div className="fashion">
                <h4>Fashion</h4>
                <img src={fashion} alt="Fashion" />
                <div className="c-body">
                  <h5 className="c-title">Accessories</h5>
                </div>
                <div className="g-item">Dresses</div>
                <div className="g-item">Pants</div>
                <div className="g-item">T-shirts</div>
    
                <div className="c-body">
                  <a href="#" className="card-link">See all in Fashion</a>
                </div>
              </div>
    
              <div className="fashion2">
                <div className="fashion2-heading">
                  <h4>New Fashion</h4>
                </div>
           
                <div className="fashion-3">
                <OwlCarousel className='owl-theme section row' loop margin={20} autoplay {...options} >
               
                <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion1} className="card-img-top"/>
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion2} className="card-img-top"  />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion3} className="card-img-top"  />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion4} className="card-img-top"  />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion1} className="card-img-top"  />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion2} className="card-img-top" />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion3} className="card-img-top"  />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card" style={{ width: "13rem" }}>
                      <img src={fashion4} className="card-img-top" />
                      <div className="c-body">
                        <h5 className="card-title">Bodycon Dress</h5>
                      </div>
                      <div className="g-items">$399.00</div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="ab">
                            <div className="a">
                              <button>Add to Cart</button>
                            </div>
                            <div className="b">
                              <i className="fa-regular fa-heart" style={{ color: "#959797" }}></i>
                              <i className="fa-regular fa-circle-left" style={{ color: "#959797" }}></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Category;









             