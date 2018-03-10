import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import AddEvent from "./Pages/AddEvent";
import Admin from "./Pages/Admin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import axios from 'axios';
import './App.css';

// _____________________________________test data for populating page_________________________________
const events = [{
  title: "Rock Concert at Red Cliffs",
  date: "Mar 21",
  info: "Come enjoy the awesome rock Concert at Red Cliffs",
  category: "Tech",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
},
{
  title: "Rock Concert at The Depot",
  date: "Mar 29",
  info: "Come enjoy the awesome rock Concert at The Depot",
  category: "Tech",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
},
{
  title: "Rock Concert at Salt Palace",
  date: "Apr 14",
  info: "Come enjoy the awesome rock Concert at Salt Palace",
  category: "Tech",
  image: "http://projectrevolver.org/wp-content/uploads/2013/04/80sconcert1.jpg"
}]
// _____________________________________end test data for populating page_________________________________


class App extends Component {
 state = {
    user: {
      loggedIn: false,
      isAdmin: false,
      currentUser: {
        id: null,
        name: '',
        username: '',
        email: '',
        profilePic: null
      }
    }
  }
  
  componentDidMount() {
    this.checkLogin()
    console.log(this.state)
  }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checklogin state")
      console.log(res)
      this.setState({ user: res.data});
      console.log(this.state)
    })
  }
  
  userDidLogin = (userData) => {
    console.log(userData)
    axios.post("/api/login", userData).then((res) => {
      console.log(res)
      this.checkLogin()
    })
  }
  userDidSignup = (userData) => {
    console.log(userData)
    axios.post("/api/signUp", userData).then((res) => {
      console.log(res)
      this.checkLogin()
    })
  }

  userLogOut = () => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
    })
  }
  // <Nav userInfo={this.state.user} logout={this.userLogOut}/>
  render() {
    return (
       <Router>
        <div>
          
          <Switch>  
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/addevent" component={AddEvent}/>
            <Route exact path="/profile" component={Profile}/>
            <Route path="/user/:username" render={(props) => {
               return <Profile {...props} />
            }} />

            {/* 
            if you want to lock down user profile route to only show if they are logged in
            comment out the route above and uncomment the code below on lines 71
             */}
            {/* <Route path="/user/:username" render={(props) => {
              console.log(this.state.user.LoggedIn, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Profile {...props}/> 
              ) : (
                  <Redirect to="/login"/>
                )
            }} /> */}
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/login" render={() => (
              <Login handleLogin={this.userDidLogin} />
            )} />
            <Route exact path="/signup" render={() => (
              <Signup handleSignup={this.userDidSignup} />
            )} />
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/admin" render={(props) => {
              console.log(props, "this is match")
              console.log(this.state.user.isAdmin, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Admin {...props}/>
              ) : (
                  <Redirect to="/" />
                )
            }} />
          </Switch>
        </div>
       </Router>
    );
  }
}

export default App;
