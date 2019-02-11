import React, {Component} from 'react';
import * as api from '../api'
import '../css/Comment.css'
import Moment from 'react-moment'

class Comment extends Component {
  state = { 
      comment : {},
      voteMod: 0
   }

   componentDidMount() {
    this.setState( {
      comment : this.props.comment
    })
  }

   
  render() { 
    const { body, author, created_at, votes, comments_id } = this.state.comment
    return ( 
      <>
      <div className="comment">
            <p>{this.props.body}</p> <br/>
            <p>{body}</p>
            <p>Author: {author}</p> <br/>
            <p>Posted: <Moment fromNow >{created_at}</Moment></p> <br/>
            <p>Votes: {votes + this.state.voteMod}</p>
            
            <button className="far fa-thumbs-up" type="button" name='1 'onClick ={() => this.vote(1,"articles",this.props.article_id, "/comments/", comments_id)} disabled = {this.state.voteMod > 0}  ></button> <button className="far fa-thumbs-down" type="button" name='-1' onClick ={() => this.vote(-1,"articles",this.props.article_id, "/comments/", comments_id)} disabled = {this.state.voteMod < 0} ></button> <br/>
            {this.props.user === author &&
          <button className="myButton" onClick={this.handleClick}>Delete</button>}

      </div>
      </>
    );
  }

  vote = (voteChange, endpoint, id, endPoint2, id2) => {
    api.voteComment(voteChange, endpoint, id, endPoint2, id2)
      .then(() => {
        this.setState(prevState => ({
          comment: {
            ...prevState.comment,
            votes: prevState.comment.votes
            },
            voteMod: prevState.voteMod + voteChange
        }))
      })
  };

  handleClick = () => {
    const { updateDelComments, article_id } = this.props
    const { comments_id } = this.state.comment
    updateDelComments(article_id, comments_id)
}
}
 
export default Comment;