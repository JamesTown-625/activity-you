import React from 'react';
import "./EventCard.css";
// import EventModal from "../EventModal";



const EventCard = (props) => (

            <div className="view view-first" >
                    
                <div className="main">
                  <img alt=" " src="../../../public/img/rockconcert.png"/>
                    <div className="mask">
                        <h2>{props.date}</h2>
                        <p>{props.title}</p>
                        <a  className="info">More Info</a>
                    </div>
                </div> 
            </div> 
)           
export default EventCard;