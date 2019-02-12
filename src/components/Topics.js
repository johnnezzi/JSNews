import React, { Component } from 'react';
import '../css/App.css'
import '../css/Topics.css'
import {Link} from '@reach/router'
import * as api from '../api'
import TopicModal from './TopicModal';
import {navigate} from '@reach/router';
import Grid from '@material-ui/core/Grid';

class Topics extends Component {
  state = { 
    topics:[],
    show:false
  }

  async componentDidMount() {
    api.getTopics()
    .then(topics => {
      this.setState({
        topics: topics
      })
    })
    .catch(err => navigate('/notfound'))
      
  }

  render() { 
    return ( 

      <div className="App-rightbody">
      <TopicModal topic="true" user={this.props.user} show={this.state.show} updateTopics={this.updateTopics}/>
        { this.state.topics.length && 
          this.state.topics.map(topic => {
          return <div key={topic.slug} className="topiccard">
                  <h2>{topic.slug}</h2> <br/>
                  <h3>{topic.description}</h3>
                  <Link to={`/topics/${topic.slug}/articles`}> <button className="myButton"> View Articles </button> </Link>
                </div>
        })}
      </div>
 
    );
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  updateTopics = (slug, description) => {
    api.postTopic(slug,description)
    .then((topic) => {
      console.log(topic)
      this.setState(prevState => ({
        topics: [...prevState.topics, topic.data.topic]
      }))
    })
  }



}

export default Topics;