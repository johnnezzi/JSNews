import React, {Component} from 'react';
import '../css/App.css'
import '../css/Filterbar.css'

class FilterBar extends Component  {

  state = {
    limit: null,
    sort_by: null,
    sort_order: null,
  }

  render() {
  return ( 
    <div  >
      
      <form className = "filterbar" onSubmit={this.handleSubmit}>

        <span>Limit: </span>
          <select name="limit" onChange={this.handleChange}>
          <option value="5">select..</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
        <span>Sort by: </span>
        <select name="sort_by" onChange={this.handleChange}>
          <option> select.. </option>
          <option value="created_at">Created</option>
          <option value="votes">Votes</option>
          <option value = "topic"> Topic</option>
          <option value="created_at">Created</option>
          <option value="title">Title</option>
          <option value = "article_id"> Article ID</option>
        </select>
        <span>Sort: </span>
        <select name="sort_order" onChange={this.handleChange}>
          <option> select.. </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button className= {["myButton" , "filter"].join(' ')} type="submit">Apply..</button>
      </form>  
    
    </div>
   );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target[event.target.selectedIndex].value
     
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {limit, sort_by, sort_order} = this.state
    this.props.applyFilters(Number(limit), sort_by, sort_order)
  }
}


export default FilterBar;