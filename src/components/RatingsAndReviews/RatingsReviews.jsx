import React from "react";
import RatingBtn from "../Button/RatingBtn";
import "./RatingsReviews.css";
import reviewavatar from '../../assets/reviewAvtar/reviewAvtar.png'
import { useOutletContext } from "react-router-dom";
const RatingsReviews = ({ rating, reviewlength ,reviews}) => {
  const {isDarkMode } = useOutletContext();
  return (
    <>
      <div id="reviews-rating" className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="rating-header">
          <h3>Ratings & Reviews</h3>
          <RatingBtn rating={rating} reviewlength={reviewlength} />
        </div>
        <div id="rating-box" className="rating-box">
          {reviews.map((review, index) => (
            <div key={index} className="review-box">
              <div className="avatar">
                <img
                  className="avatar-img"
                  src={reviewavatar}
                  alt={review.reviewerName}
                />
              </div>
              <div className="details">
                <p className="name">{review.reviewerName} {' '}<span>{review.rating} ★</span></p>
                <p className="email">{review.reviewerEmail}</p>
                <p className="message">Comment: {review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingsReviews;
