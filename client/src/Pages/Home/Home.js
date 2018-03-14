import React from 'react';
import Carousel from '../../components/Carousel';
import HomeNav from './HomeNav.js';
import CategoryHeader from '../../components/CategoryHeader';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import './Home.css';

const Home = (props) => {

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
          <div className="addProfileNav">    
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Socialight</a>
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
          <h1>Check out the Events</h1>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <h2>Interests number 1</h2>
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner" data-toggle="modal" data-target="#myModal">
                    <div className="carousel-item active">
                      <div className="card">
                        <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div>  
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <h2>Interests number 2</h2>
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner" data-toggle="modal" data-target="#myModal">
                    <div className="carousel-item active">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <h2>Interests number 3</h2>
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner" data-toggle="modal" data-target="#myModal">
                    <div className="carousel-item active">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                    <div className="carousel-item" data-toggle="modal" data-target="#myModal">
                      <div className="card">
                      <div className="card-body"><h4> Event Title 1</h4>March <br /> 18 <br /> 3:00PM </div> 
                      </div>
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
            <br />
            <br />
            <br />
            {/* Calendar */}
            <div className="container-fluid">
              <header>
                <h4 className="display-4 mb-4 text-center">March 2018</h4>
                <div className="row d-none d-sm-flex p-1 bg-dark text-white">
                  <h5 className="col-sm p-1 text-center">Sunday</h5>
                  <h5 className="col-sm p-1 text-center">Monday</h5>
                  <h5 className="col-sm p-1 text-center">Tuesday</h5>
                  <h5 className="col-sm p-1 text-center">Wednesday</h5>
                  <h5 className="col-sm p-1 text-center">Thursday</h5>
                  <h5 className="col-sm p-1 text-center">Friday</h5>
                  <h5 className="col-sm p-1 text-center">Saturday</h5>
                </div>
              </header>
              <div className="row border border-right-0 border-bottom-0">
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">25</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">26</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">27</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">28</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">1</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">2</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" title="Test Event 1">Test Event 1</a>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">3</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="w-100" />
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">4</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">5</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">6</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">7</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Test Event 2" data-toggle="modal" data-target="#myModal">Test Event 2</a>
                  <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-danger text-white" title="Test Event 3" data-toggle="modal" data-target="#myModal">Test Event 3</a>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">8</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">9</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">10</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="w-100" />
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">11</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">12</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">13</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">14</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">15</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">16</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">17</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="w-100" />
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">18</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">19</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-primary text-white" title="Test Event with Super Duper Really Long Title">Test Event with Super Duper Really Long Title</a>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">20</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">21</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">22</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">23</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">24</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="w-100" />
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">25</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">26</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">27</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">28</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                  <h5 className="row align-items-center">
                    <span className="date col-1">29</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate">
                  <h5 className="row align-items-center">
                    <span className="date col-1">30</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate">
                  <h5 className="row align-items-center">
                    <span className="date col-1">31</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="w-100" />
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">1</span>
                    <small className="col d-sm-none text-center text-muted">Sunday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">2</span>
                    <small className="col d-sm-none text-center text-muted">Monday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">3</span>
                    <small className="col d-sm-none text-center text-muted">Tuesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">4</span>
                    <small className="col d-sm-none text-center text-muted">Wednesday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">5</span>
                    <small className="col d-sm-none text-center text-muted">Thursday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">6</span>
                    <small className="col d-sm-none text-center text-muted">Friday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
                <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                  <h5 className="row align-items-center">
                    <span className="date col-1">7</span>
                    <small className="col d-sm-none text-center text-muted">Saturday</small>
                    <span className="col-1" />
                  </h5>
                  <p className="d-sm-none">No events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright © 2018</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Event Title</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <p>Day, Month, Time, Year</p>
                <p>Desciption could be super long and long and long and long</p>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">Save Event</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar */}
      </div>
    );
  }

export default Home;