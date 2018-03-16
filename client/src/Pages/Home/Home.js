import React from 'react';
import Carousel from '../../components/Carousel';
import HomeNav from './HomeNav.js';
import CategoryHeader from '../../components/CategoryHeader';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import './Home.css';
import EventCard from '../../components/EventCard';

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
     <div className = "CategoryHeader">
    <h3>Art</h3>
    </div>
     <Carousel/>
     <br/>
     <div className = "CategoryHeader">
      <h3>Music</h3>
     </div>
     <Carousel><EventCard/></Carousel>
    <div className = "CategoryHeader">
    <h3>Outdoor</h3>
    </div>
    <Carousel><EventCard/></Carousel>
    <div className = "CategoryHeader">
    <h3>Social</h3>
    </div>
    <Carousel><EventCard/></Carousel>
    <div className = "CategoryHeader">
    <h3>Fitness</h3>
    </div>
    <Carousel><EventCard/></Carousel>
    <div className = "CategoryHeader">
    <h3>Culture</h3>
    </div>
    <Carousel><EventCard/></Carousel>
     <Footer/>
    </div>
  );
};

export default Home;