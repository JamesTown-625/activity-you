import React, { Component } from "react";

class AddEvent extends Component {
  state = {
    book: {}
  };

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
                <a className="nav-link js-scroll-trigger" href="/addevent">Add Event</a>
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
            <form action="/action_page.php" id="addEvent">
              <div className="form-group">
                <label htmlFor="title">Event Title:</label>
                <input type="title" placeholder="Event Title" className="form-control" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="list">Category:</label>
                <select className="form-control" id="category">
                  <option value="placeholder" />
                  <option value="outDoor">Outdoor</option>
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
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; 2018</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          	<div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      </div>  
    );
  }
}
export default AddEvent;