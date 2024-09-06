import React from 'react';
import './Allcss/Dept.css'; 

const Dept = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="dept">
          <div className="department">
            <ul>
              <li className="dept-w">
                <a href="#"><i className="fa fa-bars"></i> ALL DEPARTMENTS</a>
              </li>
              <li><a href="#">MULTILEVEL</a></li>
              <li><a href="#">MEGA MENU</a></li>
              <li><a href="#">FULLWIDTH</a></li>
            </ul>
          </div>
          <div className="department">
            <ul>
              <li>
                <a href="#"><i className="fa fa-phone"></i> 1.800.555.6789</a>
              </li>
              <li className="dept-w"><a href="#">BLOG</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Dept;
