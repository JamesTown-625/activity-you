import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import axios from 'axios';
import './App.css';

class App extends Component {
 state = {
    user: {
      loggedIn: false,
      isAdmin: false
    }
  }
  componentDidMount() {
    this.checkLogin()
    console.log(this.state)
  }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
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

  userLogOut = () => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
    })
  }
  
  render() {
    return (
       <Router>
        <div>
          <Nav userInfo={this.state.user} logout={this.userLogOut}/>
          <Switch>  
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" render={() => (
               <Login handleLogin={this.userDidLogin} /> 
              )} />
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/user/Profile" render={(props) => {
              console.log(this.state.user.LoggedIn, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Profile {...props}/> 
              ) : (
                  <Redirect to="/login"/>
                )
            }} />
            <Route exact path="/admin" render={(props) => {
              console.log(props, "this is match")
              console.log(this.state.user.isAdmin, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Admin {...props}/>
              ) : (
                  <Redirect to="/login" />
                )
            }} />
          </Switch>
        </div>
       </Router>
    );
  }
}

export default App;
