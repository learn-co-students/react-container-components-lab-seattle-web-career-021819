import React from 'react'

const MovieReviews = (props) => {
  return(
    <div className='review-list'>
      {props.reviews.map(review =>
        <div className='review'>
        </div>
      )}
    </div>
  )
}

export default MovieReviews
