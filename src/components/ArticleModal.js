import React, { Component } from 'react';
import  Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../css/Modals.css'

class ArticleModal extends Component {
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
    const {title, body,} = this.state
    const { updateArticles, user, slug } = this.props
    if (!body || !title || !slug) {
      alert("Please complete both Title and Article before submiting")
     } else {
    updateArticles(title, body, slug, user)
    this.setState({ show: false })
  }
  }
  render() {
    return (
      <>
        <Button className="myButton" variant="primary" onClick={this.handleShow}>
          Add Article...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Article...</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <form  className="Modalform" onSubmit={this.handleSubmit} action="">
              <input  placeholder= "Enter Article title here.."onChange={this.handleChange}  name="title" type="text" size="30" /> <br/>
              <textarea placeholder="Enter Article Text here..."onChange={this.handleChange}  rows = "15" cols = "45" name = "body">
              </textarea>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="myButton" variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className="myButton" variant="primary" type="submit" onClick={this.handleSubmit}>
              Post Article..
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
 
export default ArticleModal;