import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    //Load all user reviews
    const loadReviews = async () => {
      const response = await fetch(
        `https://guarded-hamlet-19613.herokuapp.com/reviews`
      );
      const responseData = await response.json();
      setReviews(responseData);
    };
    loadReviews();
  }, []);
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="text-white review-title mb-5">
          Explore the customer experience
        </h2>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-lg-3 col-md-6 mb-4" key={review._id}>
              <div className="card">
                <div className="py-2">
                  <Rating
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                    className="active-star"
                    initialRating={review.rating}
                    readonly
                  />
                </div>
                <div className="testimonial">{review.description}</div>
                <div className="d-flex profile pt-4 mt-auto">
                  <img src={review.image} alt="user" className="img-fluid" />
                  <div className="pl-2">
                    <div className="author__name">{review.name}</div>
                    <p className="text-muted designation">{review.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
