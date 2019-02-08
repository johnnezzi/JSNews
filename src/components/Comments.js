import React, { Component } from 'react';
import * as api from '../api'
import Comment from '../components/Comment.js'
import FilterBar from './FilterBar';
import Modal from './modal';
import '../css/App.css'

class Comments extends Component {
  state = { 
    comments: [],
    show:false
  }

  async componentDidMount() {
    const comments = await api.getComments(this.props.article_id)
    this.setState({
      comments: comments
    })
  }

  render() { 
    const {user, article_id, comments_id} = this.props
    return ( 
      <div className ="comments">
      <Modal comment="true" user={user} show={this.state.show} article_id={article_id} updateComments={this.updateComments}>
        </Modal >
        <input className="myButton" type="button" value="create comment" onClick = {this.showModal}/>
        {this.state.comments.map(comment => (
          <Comment updateDelComments={this.updateDelComments} key={comments_id} article_id={article_id} comment= {comment} user={user}/>
        ))}
      </div>
        )
      
    }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  updateComments = (username, body, article_id) => {
    api.postComment(username, body, article_id)
    .then((comment) => {
      this.setState(prevState => ({
        comments: [...prevState.comments, {
          author: comment.data.comment.username,
          ...comment.data.comment
        }],
        show: false
      }))
    })
}
  updateDelComments = (article_id, comments_id) => {
    api.deleteComment(article_id, comments_id)
      .then(() => {
        this.setState(prevState => ({
          comments: [...prevState.comments.filter(comment => comment.comments_id !== comments_id)]
          
        }))
      })
  }
} 
export default Comments;