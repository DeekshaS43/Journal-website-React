import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header'; 
import Navbar from './components/Navbar';
import Dept from './components/Dept';
import Mainbody from './components/Mainbody';
import Navgray from './components/Navgray';
import Whybuy from './components/Whybuy';
import Products from './components/Products';
import Category from './components/Category';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import People from './components/People';
import Viewed from './components/Viewed';
import Footer from './components/Footer';
import Lastfooter from './components/Lastfooter';
import * as $ from "jquery"  



const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Dept />
      <Mainbody />
      <Navgray />
      <Whybuy />
      <Products />
      <Category />
      <Shop />
      <Gallery />
      <Blog />
      <People />
      <Viewed />
      <Footer />
      <Lastfooter />
    </div>
  );
};

export default App;

