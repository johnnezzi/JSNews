import React, { Component } from 'react';
import '../css/Header.css'
import Login from './Login';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App-Header picture">
        
        <div className="headerText">
          <h1 className="mySite"><span className="yellow">JSN</span><span className="orange">ews</span></h1>
          <h3 className="tagline">your news...your views.</h3>
        </div>
        
        {/* <div className="overlay"> </div> */}
        <Login removeUser={this.props.removeUser} setUser={this.props.setUser}/>
      </div>
     );
  }
}
 
export default Header;