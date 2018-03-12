import React from "react";
import Slider from 'react-slick';
import EventCard from '../EventCard';
// import CategoryHeader from '../CategoryHeader'

class Carousel extends React.Component {
constructor(props) {
    super(props);
    }

  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    // console.log(this.props);
// Eventcard will populate between the h3 div.
    return (
      <div>
      
      <Slider {...settings}>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
        <div><h3><EventCard/></h3></div>
      </Slider></div>
    );
  }
}
export default Carousel;