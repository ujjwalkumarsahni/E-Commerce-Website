import React from 'react'

const RatingBtn = ({rating,reviewlength}) => {
  return (
    <div className="product-rating">
          <span>{rating} ★</span> ({reviewlength} reviews)
    </div>
  )
}

export default RatingBtn