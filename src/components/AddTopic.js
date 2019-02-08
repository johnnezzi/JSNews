import React, { Component } from 'react';
import '../css/Modal.css'
import '../css/App.css'

class AddTopic extends Component {
  
  state = { 
      slug: null,
      description: null,
   }

  render() { 
    return (
      <div className=".modal-topic">
        <form className="modal-topic" onSubmit={this.handleSubmit} action="">
          Title: <input onChange={this.handleChange} name="slug" type="text" size="30" /> <br/>
          description:   <input onChange={this.handleChange} name="description" type="text" size="100" /> <br/>
        <button  className={["myButton", "submitModal"].join(' ')} >Submit</button>
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
    const {slug, description} = this.state;
    const { updateTopics } = this.props;
    updateTopics(slug, description)
  }

}
 
export default AddTopic;