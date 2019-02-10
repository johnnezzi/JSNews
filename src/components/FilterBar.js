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

        <select name="limit" onChange={this.handleChange}>
          <option disabled selected> No. </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
        
        <select name="sort_by" onChange={this.handleChange}>
          <option disabled selected > Sort </option>
          <option value="created_at">New</option>
          <option value="votes">Popular</option>
          <option value="title">Title</option>
        </select>
  
        <select name="sort_order" onChange={this.handleChange}>
          <option disabled selected> Order </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        { this.state.sort_by && this.state.sort_order &&
        <button className= {["myButton" , "filter"].join(' ')} type="submit">Apply..</button> }
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