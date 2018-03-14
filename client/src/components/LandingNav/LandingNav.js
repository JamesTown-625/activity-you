import React from 'react';
import "./navStyle.css";
// import { Link, NavLink } from "react-router-dom";
// import "../../../public/index.css";

const LandingNav = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">Socialight</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#loginModal" id="navLogin">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#signUpModal" id="navSignUp">Sign Up</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  
    
  );
};

export default LandingNav;