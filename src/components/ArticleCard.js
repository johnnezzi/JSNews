import React, { Component } from 'react';
import '../css/ArticleCard.css'
import { Link } from '@reach/router'

class ArticleCard extends Component {

  render() {

    const {title, topic, author, comment_count, votes, article_id, user, created_at} = this.props
    return ( 
      <div className="ArticleCard">
        <div className="ArticleCard-MetaColumn">
          <h1>{title}</h1>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Created at: {created_at}</p>
          <p>Comments({comment_count})</p>
          <p>votes ({votes})</p> 

          <Link to={`/articles/${article_id}`}><button className="myButton">Read Article....</button> </Link>
          {user === author &&
            <button className="myButton" onClick={this.handleClick}>Delete</button> }
        </div>
      </div>
    );
  } 
  handleClick = () => {
    const { updateDelArticles, article_id } = this.props
    updateDelArticles(article_id)
  }

}

export default ArticleCard;