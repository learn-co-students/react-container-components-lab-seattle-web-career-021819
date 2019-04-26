import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInput = (ev) => {
    this.setState({
      searchTerm: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(reviews => this.setState({
        reviews: reviews.results
      }))
  }



  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleInput}></input>
          <button type='submit'>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
