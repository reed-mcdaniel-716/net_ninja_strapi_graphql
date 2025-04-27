import React from "react";
import { useParams } from "react-router-dom";
import { useFetchOne } from "../hooks/useFetch";
import { formatReviewBody } from "../helpers/review-helper";

const ReviewDetails = () => {
  const { documentId } = useParams();
  const { data, error, loading } = useFetchOne<Review>(
    `${process.env.REACT_APP_STRAPI_BASE_URL}/api/reviews/${documentId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;
  const review = data.data;

  return (
    <div key={review.documentId} className="review-card">
      <div className="rating">{review.rating}</div>
      <h2>{review.title}</h2>
      <small>console list</small>
      <pre>{formatReviewBody(review.body)}</pre>
    </div>
  );
};

export default ReviewDetails;
