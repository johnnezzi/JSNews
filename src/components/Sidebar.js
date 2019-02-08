import React from 'react';
import '../css/Sidebar.css'
import {Link} from '@reach/router'

const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <p> <Link to="/">Home</Link></p>
      <p> <Link to="/topics">Topics</Link></p>
      <p> <Link to="/users">Users</Link></p>
      <p> <Link to="/articles">Articles</Link></p>
  </div>
   );
}
 
export default Sidebar;