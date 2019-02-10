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
import Auth from './components/Auth';
import Notfound from './components/Notfound';
import Grid from '@material-ui/core/Grid';

class App extends Component {

  state = {
    user:null
  }
  render() {
    const user = window.localStorage.getItem('user')
    
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Sidebar />
          
          <div className = "App-rightbody" >
            <Router >
              <Home user={user} path="/" />
              <Auth user={user} setUser={this.setUser} default>
              <Topics path="/topics" />
              <Users path = "/users" />
              <Article user={user} path="/articles/:article_id"/>
              <Articles user={user} path ="/articles"/>
              <Articles user={user} path ="/topics/:topic/articles"/>
              </Auth>
          </Router>
          </div>
          
        </div>
      </div>
    );
  }

  setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
  }

};

export default App;