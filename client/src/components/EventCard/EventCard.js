import React from 'react';
import "./EventCard.css";
// import EventModal from "../EventModal";



const EventCard = (props) => (

            <div className="view view-first" >
                    
                <div className="main">
                  <img alt=" " src="../../../public/img/rockconcert.png"/>
                    <div className="mask">
                        <h2>Date</h2>
                        <p>Title</p>
                        <a  className="info">More Info</a>
                    </div>
                </div> 
            </div> 
)           
export default EventCard;