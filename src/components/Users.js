import React, {Component} from 'react';
import '../css/Users.css'
import * as api from '../api'

class Users extends Component {
  state = { 
    users : []
  }

  async componentDidMount() {
    const users = await api.getUsers()
        this.setState({
          users: users
        })
  }

  render() { 
    return ( 
      <div className="App-rightbody">
        { this.state.users[0] && 
          this.state.users.map(user => {
          return <div key={user.username} className="usercard">
                  <img className="img" src={user.avatar_url} alt="User"></img> 
                  <p>Name:     {user.name}</p> <br/>
                  <p>Username: {user.username}</p>
                </div>
        })}
      </div>
    );
  }

}
 
export default Users;