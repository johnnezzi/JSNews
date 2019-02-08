import React from 'react';
import AddArticle from './AddArticle';
import AddComment from './AddComment';
import AddTopic from './AddTopic';
import '../css/Modal.css';

 
class Modal extends React.Component {
 
  render( ) {
    const {article_id, updateComments, user, updateArticles, slug, updateTopics, comment, topic, article} = this.props
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div>
          { comment &&
          <AddComment article_id={article_id} updateComments={updateComments} user={user}/>
          }
          { article &&
          <AddArticle updateArticles={updateArticles} slug={slug} user={user}/>
          }
          { topic &&
          <AddTopic updateTopics={updateTopics}/>
          }
        </div>
      </div>
    )
  }
  
}
 
export default Modal;