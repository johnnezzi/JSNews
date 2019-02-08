import React , {Component} from 'react';
import '../css/App.css'
import '../css/Auth.css'

class Auth extends Component {
  state = { 
      userText: '',
      userLoading: false,
  }

  render() { 
    const { user, children } = this.props
      if (user) {
      return children
      } else {
        return (
          <div className="authForm">
            <h3> Please login....</h3>
            <form className="loginform" onSubmit={this.handleSubmit} >
                <select className="userselector" onChange={this.handleChange} name="Users" id="users">
                  <option> .............. </option>
                  <option value="tickle122">Tom Tickle</option>
                  <option value="grumpy19">Paul Grump</option>
                  <option value ="happyamy2016">Amy happy</option>
                  <option value ="cooljmessy">Peter Messy</option>
                  <option value = "weegembump">Gemma Bump</option>
                  <option value = "jessjelly">Jess Kelly</option>
                </select>
                < button className= "myButton" type="submit" >Log in.....</button>
            </form>
            {this.state.userLoading && <p>loading</p> }
          </div>
        )}
  }

  handleChange = event => {
    const userInput = event.target[event.target.selectedIndex].value
    this.setState({
      userText: userInput,
      userErr: null,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const { setUser } = this.props
    const { userText } = this.state
    setUser(userText)
    this.setState({
      userText:'',
    })
  }
}
 
export default Auth;