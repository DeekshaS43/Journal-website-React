import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import headphone from '../images/headphone j1.jpg';
import heels from '../images/heels j5.jpg';
import Image from '../images/camera j4.jpg';
import tv from '../images/tv j3.jpg';
import './Allcss/Products.css';


const Products = () => {

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
 

     <div className="da-1">
      <div className="wrapper">
        <div className="heading-d">
          <h2 className="heading-with-border">Featured Products</h2>
        </div>
        <div className="para-d">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti quis laboriosam? Veniam, quo doloribus dolorem ad enim debitis error, sed beatae maiores rem voluptate velit quidem magni numquam reprehenderit.</p>
        </div>
       
          <ul className="Options-d">
            <li>FEATURED</li>
            <li>LATEST</li>
            <li>BEST SELLERS</li>
            <li>SPECIAL</li>
          </ul>
        

        <div className="card-d ">
   
        
    <OwlCarousel className='owl-theme section row' loop margin={20} autoplay {...options} >
        
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={headphone} className="card-img-top" alt="Headphone" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={heels} className="card-img-top" alt="Heels" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Heels</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={Image} className="card-img-top" alt="camera" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={tv} className="card-img-top" alt="tv" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
           
            {/* <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={headphone} className="card-img-top" alt="Headphone" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={heels} className="card-img-top" alt="Heels" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Heels</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={Image} className="card-img-top" alt="camera" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="card" style={{ width: '18rem' }}>
                <img src={tv} className="card-img-top" alt="tv" />
                <div className="card-body">
                  <h5 className="card-title">Eriksson</h5>
                  <h5 className="card-title">Model 519</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Headphones</li>
                  <li className="list-group-item">$999.00</li>
                  <li className="list-group-item">
                    <div className="xy">
                      <div className="x">
                        <input type="number" value="1" min="0" max="100" step="1" />
                        <button>Add to Cart</button>
                      </div>
                      <div className="y">
                        <i className="fa-regular fa-heart" style={{ color: '#959797' }}></i>
                        <i className="fa-regular fa-circle-left" style={{ color: '#959797' }}></i>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link"><i className="fa-solid fa-comment-dollar" style={{ color: '#6ed728' }}></i>Buy Now</a>
                  <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#d72323' }}></i>Question</a>
                </div>
              </div>
            </div>
            */}
          

    </OwlCarousel>

    

      </div>
      <button className="btn-d ">SEE ALL PRODUCTS- </button>

      </div>
    </div>
     
   
  );
};

export default Products;
