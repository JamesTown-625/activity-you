import React from 'react';
import Carousel from '../../components/Carousel';
import HomeNav from './HomeNav.js';
import CategoryHeader from '../../components/CategoryHeader';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import './Home.css';

const Home = (props) => {

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


  return (
    <div>
    	<div>
      		<HomeNav/>
      	</div>
      	<br/>
      	<br/>
      	<br/>
      	<br/>
     <CategoryHeader/>
     <Carousel/>
     <br/>
    
     <Footer/>
    </div>
  );
};

export default Home;