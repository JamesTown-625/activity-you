import React from "react";
import Slider from 'react-slick';
import EventCard from '../EventCard';
// import CategoryHeader from '../CategoryHeader'

class Carousel extends React.Component {
constructor(props) {
    super(props);
    this.state={
      events: []
    }
    }
    componentWillMount(){
      const testData=[
      {
        category: "Music",
        title: "Rock Concert",
        date: "Mar 21",
        imgURL: "../../../public/img/rockconcert.png"
      },
       {
        category: "Outdoor",
        title: "Rock Concert2",
        date: "Mar 22",
        imgURL: ""
      },
       {
        category: "Art",
        title: "Rock Concert3",
        date: "Mar 23",
        imgURL: ""
      },
       {
        category: "Family",
        title: "Rock Concert4",
        date: "Mar 24",
        imgURL: ""
      },
       {
        category: "Culture",
        title: "Rock Concert5",
        date: "Mar 25",
        imgURL: ""
      },
      ]
      this.setState({events:testData})
    }

  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const eventCards=[]
    this.state.events.map((singleEvent)=>{
      console.log(singleEvent);
      const event=(<div><EventCard title={singleEvent.title} date={singleEvent.date} imageURL={singleEvent.imgURL}/></div>)
      eventCards.push(event);
    })
    // console.log(this.props);
// Eventcard will populate between the h3 div.
    return (
      <div>
      
      <Slider {...settings}>
        {eventCards}
      </Slider></div>
    );
  }
}
export default Carousel;