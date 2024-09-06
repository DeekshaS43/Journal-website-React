import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import blog1 from '../images/blogj1.png';
import blog2 from '../images/blogj2.png';
import blog3 from '../images/blogj3.png';
import './Allcss/Blog.css';


const Blog = () => {

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
          <div className="blog">
            <div className="wrapper">
              <div className="blog-heading">
                <h3 className="heading-with-border">From Our Blog</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi libero alias perferendis. Soluta eos qui
                alias? Modi voluptatum dolorum, inventore adipisci odit officiis, iste debitis, aliquam in illum harum.
              </p>
              <div>
                <ul className="blog-option">
                  <li>Latest Post</li>
                  <li>Most Read</li>
                </ul>
              </div>
      
            
                   
                    <div className="robin">
                    <OwlCarousel className='owl-theme section row' loop margin={20} autoplay {...options} >
        
        
                      <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog1} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                              Some quick example text to build on the card title and make up the bulk of the card's.Some quick example text to build on the card title and make up the bulk of the card's.Some quick example text to build on the card title and make up the bulk of the card's
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog2} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                            Some quick example text to build on the card title and make up the bulk of the card's Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog3} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                            Some quick example text to build on the card title and make up the bulk of the card's Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      </div>
                    
                    <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog1} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                            Some quick example text to build on the card title and make up the bulk of the card's Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog2} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                            Some quick example text to build on the card title and make up the bulk of the card's Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="hello">
                        <div className="card" style={{ width: '18rem' }}>
                          <img src={blog3} className="card-top" alt="..." />
                          <div className="card-b">
                            <h5 className="card-title">
                              <i className="fa-solid fa-user"></i> admin
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-comment-dots"></i> 38
                            </h5>
                            <h5 className="card-title">
                              <i className="fa-solid fa-eye"></i> 19340
                            </h5>
                          </div>
                          <div className="head">
                            <h2>Journal Blog is Here</h2>
                          </div>
                          <div className="para">
                            <p>
                            Some quick example text to build on the card title and make up the bulk of the card's Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                          </div>
                          <div className="body-c">
                            <a href="#" className="card-link">
                              read more-&gt;
                            </a>
                          </div>
                        </div>
                      
                    </div>
                  </OwlCarousel>
                </div>
      
            </div>
              </div>
            
         
        );
      };
      
      export default Blog;