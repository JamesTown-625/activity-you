import React, { Component } from "react";
import LandingNav from '../../components/LandingNav';
import Footer from '../../components/Footer';
// import { Link } from "react-router-dom";


class Landing extends Component {
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

  // The book id for this route can be accessed using this.props.match.params.id
  render() {
    return (
        <div>
        <LandingNav/>
        
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome to Socialight!</div>
              <div className="intro-heading text-uppercase">Where your next activity finds you!</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header> 
        {/* Services */}
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">How it works</h2>
                <h3 className="section-subheading text-muted">Browse a list of activities in your area, and if you know something cool is about to go down, add the event for others to find.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-id-badge fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Sign Up</h4>
                <p className="text-muted">You gotta have a profile so we know what you like! Don't stress about it, we promise we won't sell your info or anything. </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-dot-circle-o fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Pick your interests</h4>
                <p className="text-muted">Only see the stuff you like, forget the rest of that boring crap. It's all about what you want to see, what you want to do.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-bell fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Get Notified!</h4>
                <p className="text-muted">You want to be notified when your favorite band is coming to town? Rock on! We've got you covered. Feel like a quick positive nudge to get outside for some yoga in the park? Well, Namaste. We are totally one with that zen stuff too. </p>
              </div>
              <div className="col-md-12 text-center" data-toggle="modal" data-target="#signUpModal" id="navSignUp">
                <button className="btn btn-success btn-xl text-uppercase js-scroll-trigger">Sign Me Up!</button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
          
        {/* Modals */}
        {/* Modal Login */}
        <div className="modal fade" id="loginModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit User Info</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form action="/action_page.php">
                  <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input className="form-control" type= "password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>
                  <br />
                  <button type="button" onClick={()=> {this.props.handleLogin(this.state)}} className="btn btn-warning">Log In</button>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Sign Up Modal */}
        <div className="modal fade" id="signUpModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit User Info</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form action="/action_page.php">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input className="form-control" type ="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    {/* Button to access locals picture files */} 
                    <label className="file-upload-container" htmlFor="file-upload">
                      <img alt=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/2000px-Picture_icon_BLACK.svg.png" id="img-preview" style={{hight: 20, width: 20}} />
                      <input id="file-upload" type="file" style={{display: 'none'}} />
                      Upload an Image
                    </label>
                    {/* ===============================*/}
                    <input placeholder="Upload a Picture of your Event" type="text" className="form-control" name="picture" value={this.state.picture} onChange={this.handleChange}/>
                  </div>
                  <br />
                  <button type="button" onClick={()=> {this.props.handleSignup(this.state)}} className="btn btn-warning">Submit</button>
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
    );
  }
}
export default Landing;