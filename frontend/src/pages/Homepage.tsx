import React from "react";
import { useFetchAll } from "../hooks/useFetch";
import { clipString, formatReviewBody } from "../helpers/review-helper";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { data, error, loading } = useFetchAll<Review>(
    `${process.env.REACT_APP_STRAPI_BASE_URL}/api/reviews`
  );

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;
  return (
    <div>
      {data.data.map((review) => {
        return (
          <div key={review.documentId} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            <small>console list</small>
            <pre>{clipString(formatReviewBody(review.body), 200)}</pre>
            <Link to={`/details/${review.documentId}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
