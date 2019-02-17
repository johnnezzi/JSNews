import React, { Component } from 'react';
import '../css/App.css'
import ArticleCard from './ArticleCard';
import * as api from '../api'
import Grid from '@material-ui/core/Grid';
import { navigate } from '@reach/router'
import Loading from './Loading';


class NewArticles extends Component {
  state = { 
    articles :[],
    show: false,
    isLoading:true
    }

  async componentDidMount() {
    const query = '?limit=20&sort_by=created_at'
    api.getQueriedArticles(query)
      .then((articles) => (this.setState({
          articles: articles,
          isLoading: false,
        })))
        .catch(err => navigate('/notfound'));

    }
        
    render() {

    const { user } = this.props
    const { articles, isLoading } = this.state
    return ( 
      
      
      <Grid container
        direction = "column"
        justify = "center"
        alignItems = "center" >
        {isLoading &&
        <Loading/>
        }
        {articles[0] &&
          articles.map(article => {
          return <ArticleCard key={article.article_id} title={article.title} topic={article.topic} author={article.author} created_at={article.created_at} votes={article.votes} comment_count={article.comment_count} article_id={article.article_id} user={user} updateDelArticles={this.updateDelArticles}/> 
        })}
      </Grid>
    );
  
  }



}

export default NewArticles;