import React, { Component } from "react";
import backgroundimg from "../../img/02-profile.jpg";
import Footer from '../../components/Footer';

var imgStyle = {
  width: "250px",
  height: "250px"
}

class Profile extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    picture: "",
  };

handleChange = (event) => {
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
          <header className="profile">
            <div className="container">
              <div className="jumbotron jumbo">
                <div className="row">
                <img className="backgroundimg" src={backgroundimg} alt=" " style={{height: 300, width: 1030, }} />
                  <div className="username">
                    <img src={this.props.user.currentUser.picture} style={imgStyle}className="rounded-circle img-fluid userpicture" alt="Cinque Terre" />
                    <div>
                    <h4>{this.props.user.currentUser.fullName}</h4>
                    <h4>{this.props.user.currentUser.email}</h4>
                      <button data-toggle="modal" data-target=".myModal" title="Edit">Update Profile</button>
                    </div> 
                    {/* The Modal */}
                    <div className="modal fade myModal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h4 className="modal-title">Edit User Info</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                          </div>
                          {/* Modal body */}
                          <div className="modal-body">
                            <form action="/action_page.php">
                              <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="name" className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                              </div>
                              <div className="form-group">
                                {/* Button to access locals picture files */} 
                                <label className="file-upload-container" htmlFor="file-upload">
                                  <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/2000px-Picture_icon_BLACK.svg.png" className="img-preview" style={{hight: 20, width: 20}} />
                                  <input className="file-upload" type="file" style={{display: 'none'}} />
                                  Upload an Image
                                </label>
                                {/* ===============================*/}
                                <input placeholder="Upload a Picture of your Event" type="text" className="form-control" name="picture" value={this.state.picture} onChange={this.handleChange} />
                              </div>
                              <br />
                              <button type="button" onClick={()=> {this.props.handleUpdate(this.state)}} className="btn btn-warning">Submit</button>
                            </form>
                          </div>
                          {/* Modal footer */}
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>   
                  </div>        
                </div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>
                <div className="row"><p /></div>            
              </div>
            </div>
          </header>    
          <div className="interests">
            <div className="container">
              <div className="jumbotron jumbo">
                <h1>What Type of Events are you Interested in?</h1>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-6 options">
                    <div className="radio">
                      <label><input type="radio" name="outdoors" defaultValue="outdoor" /> Outdoors</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="art" defaultValue="art" /> Art</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="music" defaultValue="music" /> Music</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="fitness" defaultValue="fitness" /> Fitness</label>
                    </div>    
                    <div className="radio">
                      <label><input type="radio" name="game" defaultValue="gameScifi" /> Game/SciFi</label>
                    </div>                    
                    <div className="radio">
                      <label><input type="radio" name="education" defaultValue="education" /> Education</label>
                    </div>
                  </div>
                  <div className="col-md-6 options">     
                    <div className="radio">
                      <label><input type="radio" name="pets" defaultValue="pet" /> Pets</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="culture" defaultValue="culture" /> Culture</label>
                    </div>                    
                    <div className="radio">
                      <label><input type="radio" name="business" defaultValue="business" /> Business</label>
                    </div>     
                    <div className="radio">
                      <label><input type="radio" name="family" defaultValue="family" /> Family</label>
                    </div>                                    
                    <div className="radio">
                      <label><input type="radio" name="social" defaultValue="social" /> Social</label>
                    </div> 
                    <div className="radio">
                      <label><input type="radio" name="food" defaultValue="foodDrink" /> Food/Drink</label>
                    </div>                     
                  </div>
                </div>
                <br />                   
                <div className="row" style={{paddingTop: 20}}>
                  <div className="col-md-5" />
                  <div className="col-md-2">
                    <button type="button" className="btn btn-warning">Save your Interests</button> 
                  </div>
                  <div className="col-md-5" />                
                </div>
              </div>
            </div>
          </div>
          <Footer />

        </div>
    );
  }
}
export default Profile;