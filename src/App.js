import React, { Component } from 'react';
import './css/App.css';
import { Router } from '@reach/router'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Topics from './components/Topics'
import Home from './components/Home';
import Users from './components/Users';
import Article from './components/Article';
import Articles from './components/Articles'
import Notfound from './components/Notfound';
import Grid from '@material-ui/core/Grid';

class App extends Component {

  state = {
    user: null
  }
  render() {
    
    return (
      <div className="App">
        <Header removeUser={this.removeUser} setUser={this.setUser}/>
        <div className="App-body">
          <Sidebar />
          
          <div className = "App-rightbody" >
            <Router >
              <Home user={this.state.user} path="/" />
              {/* <Auth user={this.state.user} setUser={this.setUser} default> */}
              <Topics path="/topics" />
              <Users path = "/users" />
              <Article user={this.state.user} path="/articles/:article_id"/>
              <Articles user={this.state.user} path ="/articles"/>
              <Articles user={this.state.user} path ="/topics/:topic/articles"/>
              {/* </Auth> */}
          </Router>
          </div>
          
        </div>
      </div>
    );
  }

  setUser = (user) => {
    window.localStorage.setItem('user', user)
        this.setState({
          user: window.localStorage.getItem('user')
        })
  }

  removeUser = () => {
    window.localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

};

export default App;