import React from "react";
import Slider from 'react-slick';
import EventCard from '../../components/EventCard';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Carousel extends React.Component {
constructor(props) {
    super(props);
    }

  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    console.log(this.props);
// Eventcard will populate between the h3 div.
    return (
      <div>
      <Nav/>
      <Slider {...settings}>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
      </Slider>
      <Footer/>
      </div>
    );
  }
}
export default Carousel;