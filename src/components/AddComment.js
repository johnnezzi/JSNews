import React, { Component } from 'react';
import '../css/AddComment.css'
import '../css/App.css'

class AddComment extends Component {
  
  state = { 
    body: null,
  }

  render() { 
    return (
      
      <div className="addcomment">
        <form className="commentform" onSubmit={this.handleSubmit}  action="">
          Comment:   <textarea onChange={this.handleChange} rows = "15" cols = "60" name = "body">
        </textarea>
        <button className="myButton" type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
    [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { body } = this.state
    const { updateComments, article_id, user } = this.props
    updateComments(user, body, article_id)
  }
}
 
export default AddComment;