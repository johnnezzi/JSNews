import React, { Component } from 'react';
import '../css/AddArticle.css'
import '../css/App.css'

class AddArticle extends Component {
  state = { 
      title: null,
      body: null,
    }
  render() { 
    return (
      <div className="addarticle">
        <form  className="articleform"vonSubmit={this.handleSubmit} action="">
          Title: <input  onChange={this.handleChange}  name="title" type="text" size="30" /> <br/>
          Body:   <textarea onChange={this.handleChange}  rows = "15" cols = "100" name = "body">
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
    const {title, body,} = this.state
    const { updateArticles, user, slug } = this.props
    updateArticles(title, body, slug, user)
  }
}
 
export default AddArticle;