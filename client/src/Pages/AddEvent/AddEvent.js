import React, { Component } from "react";
import Footer from '../../components/Footer';
// import { Link } from "react-router-dom";

class AddEvent extends Component {
  state = {
    title: "",
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
    },
    picture: "",
    date: "",
    time: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    description: "",
  };

  handleChange = (event) => {
    event.pervent.default;
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
      <div className="addProfileNav">    
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top mainNav">
        <div className="container">

          <a className="navbar-brand js-scroll-trigger" href="/">Socialight</a>
          <div className="collapse navbar-collapse navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/addEvent">Add Event</a>
              </li> 
              <br /> 
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/home">Home</a>
              </li>
              <br />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        <div className="container">
          <div className="jumbotron jumbo">
            <h1>Add an Event</h1>
            <form action="/home">
              <div className="form-group">
                <label htmlFor="title">Event Title:</label>
                <input type="title" placeholder="Event Title" className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="list">Category:</label>
                <select className="form-control" name="interests" value={this.state.category} onChange={this.handleChange}>
                  <option value="placeholder" />
                  <option value="1">Outdoor</option>
                  <option value="2">Art</option>
                  <option value="3">Music</option>
                  <option value="4">Fitness</option>
                  <option value="5">Games/SciFi</option>
                  <option value="6">Education</option>
                  <option value="7">Pets</option>
                  <option value="8">Culture</option>
                  <option value="9">Business</option>
                  <option value="10">Family</option>
                  <option value="11">Social</option>
                  <option value="12">Food/Drink</option>                  
                </select>             
              </div>
              <div className="form-group">
                {/* Button to access locals picture files */} 
                <label className="file-upload-container" htmlFor="file-upload">
                  <img alt=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/2000px-Picture_icon_BLACK.svg.png" name="img-preview" style={{hight: 20, width: 20}} />
                  <input name="file-upload" type="file" style={{display: 'none'}} />
                  Upload an Image
                </label>
                {/* ===============================*/}
                <input placeholder="Upload a Picture of your Event" type="text" className="form-control" name="picture" value={this.state.picture} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3">
                    <label htmlFor="date">Day:</label>
                    <input type="date" placeholder={21} className="form-control" name="date" style={{margin: 10}}  value={this.state.date} onChange={this.handleChange}/>
                  </div>
                  <div className="col-sm-3">
                    <label htmlFor="time">Time:</label>
                    <input type="time" placeholder="12:30PM" className="form-control" name="time" style={{margin: 10}} value={this.state.time} onChange={this.handleChange} />
                  </div>
                  <div className="col-sm-3"></div>
                </div>    
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="address" placeholder=" 300 N 500 W" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="city">City:</label>
                    <input type="city" placeholder="SaltLake City" className="form-control" name="city" value={this.state.city} onChange={this.handleChange} />
                  </div>  
                  <div className="col-sm-4">
                    <label htmlFor="state">State:</label>
                    <input type="state" placeholder="UT" className="form-control" name="state" value={this.state.state} onChange={this.handleChange} />
                  </div>  
                  <div className="col-sm-4">
                    <label htmlFor="zip">Zip Code:</label>
                    <input type="zip" placeholder={84115} className="form-control" name="zip" value={this.state.zip} onChange={this.handleChange} />
                  </div>
                </div>
              </div>                                
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea type="description" placeholder="description" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} defaultValue={"\t\t\t    "} />
              </div>          
              <button type="submit" onClick={()=> {this.props.handleAddEvent(this.state)}} className="btn btn-warning">Submit Event</button>
            </form>
          </div>
          </div>
          <Footer />
        </div>
    );
  }
}
export default AddEvent;