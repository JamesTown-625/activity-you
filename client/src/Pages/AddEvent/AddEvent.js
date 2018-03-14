import React, { Component } from "react";
import Footer from '../../components/Footer';
// import { Link } from "react-router-dom";

class AddEvent extends Component {
  state = {
    interests: {
      id: "",
      outdoor: "",
      art: "",
      music: "",
      fitness: "",
      gameSciFi: "",
      education: "",
      pet: "",
      culture: "",
      business: "",
      family: "",
      social: "",
      foodDrink: "",
    }
  };


  render() {
    return (
        <div className="container">
          <div className="jumbotron" id="jumbo">
            <h1>Add an Event</h1>
            <form action="/action_page.php" id="addEvent">
              <div className="form-group">
                <label htmlFor="title">Event Title:</label>
                <input type="title" placeholder="Event Title" className="form-control" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="list">Category:</label>
                <select className="form-control" id="category">
                  <option value="placeholder" />
                  <option value="outdoor">Outdoor</option>
                  <option value="art">Art</option>
                  <option value="music">Music</option>
                  <option value="family">Family</option>
                  <option value="foodDrink">Food/Drink</option>
                  <option value="gameSciFi">Game/SciFi</option>
                  <option value="education">Education</option>
                  <option value="fitness">Fitness</option>
                  <option value="pets">Pets</option>
                  <option value="culture">Culture</option>
                  <option value="social">Social</option>
                  <option value="business">Business</option>                  
                </select>             
              </div>
              <div className="form-group">
                {/* Button to access locals picture files */} 
                <label className="file-upload-container" htmlFor="file-upload">
                  <img alt=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/2000px-Picture_icon_BLACK.svg.png" id="img-preview" style={{hight: 20, width: 20}} />
                  <input id="file-upload" type="file" style={{display: 'none'}} />
                  Upload an Image
                </label>
                {/* ===============================*/}
                <input placeholder="Upload a Picture of your Event" type="text" className="form-control" id="picture" />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="month">Month:</label>
                    <input placeholder="March" className="form-control" id="month" style={{margin: 10}} />
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="day">Day:</label>
                    <input type="day" placeholder={21} className="form-control" id="day" style={{margin: 10}} />
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="year">Year:</label>
                    <input type="year" placeholder={2018} className="form-control" id="year" style={{margin: 10}} />
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="time">Time:</label>
                    <input type="time" placeholder="12:30PM" className="form-control" id="time" style={{margin: 10}} />
                  </div>
                </div>    
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="address" placeholder=" 300 N 500 W" className="form-control" id="address" />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="city">City:</label>
                    <input type="city" placeholder="SaltLake City" className="form-control" id="city" />
                  </div>  
                  <div className="col-sm-4">
                    <label htmlFor="state">State:</label>
                    <input type="state" placeholder="UT" className="form-control" id="state" />
                  </div>  
                  <div className="col-sm-4">
                    <label htmlFor="zip">Zip Code:</label>
                    <input type="zip" placeholder={84115} className="form-control" id="zip" />
                  </div>
                </div>
              </div>                                
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea type="description" placeholder="description" className="form-control" id="description" defaultValue={"\t\t\t    "} />
              </div>          
              <button type="submit" className="btn btn-warning">Submit Event</button>
            </form>
          </div>
        </div>
      <Footer />
    );
  }
}
export default AddEvent;