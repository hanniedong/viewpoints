import React, { Component } from 'react';
import { TOKEN } from './key';
import axios from 'axios';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      city: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.clearEvents()

    axios.get('https://www.eventbriteapi.com/v3/events/search/', {

      params: {
        token: TOKEN,
        categories: '102',
        'location.address': this.state.city,
        'location.within': '1mi',
        'sort_by': 'date',
        'q': 'tech',
        'start_date.keyword': 'this_month'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div > 
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input
            className = "form-control"
            name = "city"
            type = "search"
            placeholder = "Search by City"
            onChange = {this.handleInputChange.bind(this)}
          />
          <button 
            className = "btn" 
            type= "submit"> Submit
          </button>
        </form>
      </div>
      )
  }
}