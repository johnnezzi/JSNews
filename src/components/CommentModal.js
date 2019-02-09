import React, { Component } from 'react';
import  Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class CommentModal extends Component {
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
    event.preventDefault();
    const { body } = this.state
    const { updateComments, article_id, user } = this.props
    if (!body) {
      alert("Please complete Comment field before submiting")
    } else {
    updateComments(user, body, article_id)
    this.setState({ show: false })
  }
}
  render() {
    return (
      <>
        <Button className="myButton" variant="primary" onClick={this.handleShow}>
          Add Comment...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Comment...</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <form className="commentform" onSubmit={this.handleSubmit}  action="">
              Comment:   <textarea onChange={this.handleChange} rows = "15" cols = "60" name = "body">
              </textarea>
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="myButton" variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="myButton" variant="primary" type="submit" onClick={this.handleSubmit}>
              Post Comment..
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
 
export default CommentModal;