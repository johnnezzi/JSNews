import React,{ Component } from 'react';
import '../css/home.css'
import NewArticles from './NewArticles';
import MostPopArticles from './MostPopArticles';

class Home extends Component {
  render () {
  return ( 
    <div className="homecontainer">
      <div className="welcome">
      
      </div>
      <div className="feeds">
        <div className="newestfeed">
          <h2 className="whats" >What's New......</h2>
          <NewArticles user={this.props.user} />
        </div>
        <div className="mostpopular">
          <h2 className = "whats" > What 's Hot......</h2>
          <MostPopArticles user={this.props.user} />
        </div>
      </div>

    </div>

   );
  }
}
 
export default Home;