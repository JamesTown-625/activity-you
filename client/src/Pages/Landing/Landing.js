import React, { Component } from "react";
import Nav from '../../components/Nav';
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
class Landing extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
  render() {
    return (
        <div>
        <Nav/>
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome to Socialite!</div>
              <div className="intro-heading text-uppercase">Where your next activity finds you!</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>
        {/* Services */}
        <section id="services">
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
                <a className="btn btn-success btn-xl text-uppercase js-scroll-trigger">Sign Me Up!</a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright © 2018</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
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
                    <label htmlFor="name">Name:</label>
                    <input type="name" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="email" />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-warning">Log In</button>
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
                    <input type="name" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="email" />
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
                  <br />
                  <button type="submit" className="btn btn-warning">Submit</button>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div> 
          </div> 
        </div>
        {/* Bootstrap core JavaScript */}
        {/* Plugin JavaScript */}
        {/* Contact form JavaScript */}
        {/* Custom scripts for this template */}
      </div>
    );
  }
}
export default Landing;