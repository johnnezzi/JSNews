import React, { Component } from 'react';

class Login extends Component {

  state = { 
    loggedIn: false
   }

  render() { 
    return ( 
      <div>
        {!this.state.loggedIn &&
          <div className="loginbox">
            <form className="loginform" onSubmit={this.handleSubmit}>
              <select className="userselector" onChange={this.handleChange} name="Users" id="users">
                <option> .............. </option>
                <option value="tickle122">Tom Tickle</option>
                <option value="grumpy19">Paul Grump</option>
                <option value ="happyamy2016">Amy happy</option>
                <option value ="cooljmessy">Peter Messy</option>
                <option value = "weegembump">Gemma Bump</option>
                <option value = "jessjelly">Jess Kelly</option>
              </select>
              <button className= "myButton" type="submit" >Log in.....</button>
            </form>
          </div>}
          {this.state.loggedIn &&
            <div>
            <div>Welcome back{window.localStorage.getItem('user')}</div>
            <form onSubmit={this.logout} action="">
            <button type='submit' onClick={this.logout} className= "myButton">Logout</button>
            </form>
          </div>}
        </div>
     );
  }
   handleChange = event => {
    const userInput = event.target[event.target.selectedIndex].value
    this.setState({
      userText: userInput,
      userErr: null,
    });
  }

  handleSubmit = event => {
    const { setUser } = this.props
    const { userText } = this.state
    setUser(userText)
    window.localStorage.setItem('user', userText )
    this.setState({
      userText:'',
      loggedIn:true
    })
  }

  logout = () => {
    this.props.removeUser()
    this.setState({
      loggedIn: false
    })
  }
}
 
export default Login;