import React, { Component } from 'react';
import '../css/Article.css'
import '../css/App.css'
import Comments from './Comments';
import * as api from '../api'
import { navigate } from "@reach/router"
import Moment from 'react-moment'

class Article extends Component {
  state = { 
    Article_id: null,
    Author: null,
    Created: null,
    Votes:null,
    Body:null,
    isLoading:true,
    voteMod: 0
  }

  async componentDidMount() {
    const article = await api.getArticle(this.props.article_id)
    this.setState({
      Article_id: article.article_id,
      Author: article.author,
      Created: article.created_at,
      Votes: article.votes,
      Body: article.body,
      isLoading: false,
      isDeleted: false,
      
    })
  }

  render() { 
    const { Article_id, Author, Created, Votes, Body } = this.state
    if (this.state.isLoading) {
      return <p>Loading.......</p>
    } else {
      return ( 
        <div className="articleview">
          <div className="body">
            <p>{Body}</p> 
          </div> <br/>
          <div className="meta">
            <p>Article id: {Article_id}</p> <br/>
            <p>Author: {Author}</p> <br/>
            <p>Created: <Moment fromNow >{Created}</Moment></p> <br/>
            <p>Votes: {Votes}</p> <br/>
          </div>
          <div className="buttons" >
            <button className="far fa-thumbs-up" type="button" name='1 'onClick ={() => this.vote(1,"articles", Article_id)}disabled = {this.state.voteMod > 0}></button> <button className="far fa-thumbs-down" type="button" name='-1' onClick ={() => this.vote(-1,"articles", Article_id)}disabled = {this.state.voteMod < 0} ></button> <br/>
            {this.props.user === Author &&
            <button className="myButton" onClick={this.handleClick}>Delete</button>}
            <Comments  user={this.props.user} article_id={this.props.article_id}/> 
          </div>
        </div>
      );
    }
  }

  vote = (voteChange, endpoint, id) => {
    api.voteArticle(voteChange, endpoint, id)
    .then(() => {
      this.setState(prevState => ({ 
        Votes: prevState.Votes + voteChange,
        voteMod: prevState.voteMod + voteChange
       }))
    })
  };

  handleClick = () => {
    const {Article_id} = this.state
    api.deleteArticle(Article_id)
      .then(() => {
        navigate('/articles')
      })
  }
}

export default Article;