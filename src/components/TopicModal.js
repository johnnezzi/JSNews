import React, { Component } from 'react';
import Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class TopicModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
    if (!slug || !description) {
      alert("Please complete both Title and Description before submiting")
    } else {
    updateTopics(slug, description)
    this.setState({ show: false })
  }
}

  render() {
    return (
      <>
        <Button className="myButton" variant="primary" onClick={this.handleShow}>
          Add Topic...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Topic...</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <form className="modal-topic" onSubmit={this.handleSubmit} action="">
            Title: <input onChange={this.handleChange} name="slug" type="text" size="30" required/> <br/>
            description:   <input onChange={this.handleChange} name="description" type="text" size="100" required /> <br/>
            <Button className="myButton" variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="myButton" variant="primary" type="submit" onClick={this.handleSubmit}>
              Post Topic..
            </Button>
        </form>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
 
export default TopicModal;