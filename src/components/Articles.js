import React, { Component } from 'react';
import '../css/App.css'
import ArticleCard from './ArticleCard';
import * as api from '../api'
import FilterBar from './FilterBar';
import Grid from '@material-ui/core/Grid';
import Articlemodal from './ArticleModal';
import { navigate } from '@reach/router'


class Articles extends Component {
  state = { 
    articles :[],
    show: false,
    }

  async componentDidMount() {

    if (this.props.topic) {
      api.getArticlesByTopic(this.props.topic)
        .then((articles) => (this.setState({
        articles: articles
            })))
        .catch(err => navigate('/notfound'))
        } else {
      api.getArticles()
        .then((articles) => (this.setState({
          articles: articles
      }))).catch(err => navigate('/notfound'));
    }
      
}
  

  render() {

    const { topic, user } = this.props
    const { articles } = this.state
    return ( 
      
      <Grid container
        direction = "column"
        justify = "center"
        alignItems = "center" >
        <FilterBar applyFilters={this.applyFilters} />
        {this.props.topic && this.props.user &&
        <Articlemodal slug={topic} updateArticles={this.updateArticles} article="true" user={user}/>
        }
        { articles.length &&
          articles.map(article => {
          return <ArticleCard key={article.article_id} title={article.title} topic={article.topic} author={article.author} created_at={article.created_at} votes={article.votes} comment_count={article.comment_count} article_id={article.article_id} user={user} updateDelArticles={this.updateDelArticles}/> 
        })}
      </Grid>
    );
  
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

    updateArticles = (title, body, slug, user) => {
    api.postArticle(title, body, slug, user)
    .then((article) => {
      this.setState(prevState => ({
        articles: [...prevState.articles, {
          author: article.data.article.username,
          ...article.data.article
        }],
        show: false,
      }))
    })
  }

  updateDelArticles = (article_id) => {
      api.deleteArticle(article_id)
      .then((article) => {
        this.setState(prevState => ({
          articles: [...prevState.articles.filter(article => article.article_id !== article_id)]
        }))
      })
  }  

  applyFilters = (limit, sort_by, sort_order) => {
    console.log('limit, sort_by, sort_order:', limit, sort_by, sort_order)
    const query = `?limit=${limit}&sort_by=${sort_by}&sort_order=${sort_order}`
      if (this.props.topic) {
        api.getQueriedArticlesByTopic(this.props.topic, query)
        .then(articles => {
            this.setState({ articles: articles })
        })
      } else {
        api.getQueriedArticles(query)
        .then(articles => {
          this.setState({
            articles: articles
          })
        })
    
      }
  }
}

export default Articles;