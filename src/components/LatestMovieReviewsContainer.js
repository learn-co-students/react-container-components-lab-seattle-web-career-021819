import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      reviews: data
    }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <h2>Latest Reviews:</h2>
        <div className="review-list">
          {this.state.reviews.map((review, index) => {
            return <MovieReviews
                     review={review}
                     key={index}
                   />
          })}
        </div>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
