import React from "react";
import { useParams } from "react-router-dom";
import { formatReviewBody } from "../helpers/review-helper";
import { useQuery, gql } from "@apollo/client";
import CategoryList from "../components/CategoryList";

const REVIEW_QUERY = gql`
  query getReviewById($documentId: ID!) {
    review(documentId: $documentId) {
      title
      body
      rating
      documentId
      categories {
        name
        documentId
      }
    }
  }
`;

const ReviewDetails = () => {
  const { documentId } = useParams();
  const { loading, data, error } = useQuery(REVIEW_QUERY, {
    variables: { documentId: documentId },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;
  const review = data.review;

  return (
    <div key={review.documentId} className="review-card">
      <div className="rating">{review.rating}</div>
      <h2>{review.title}</h2>
      {review.categories && <CategoryList categories={review.categories} />}
      <pre>{formatReviewBody(review.body)}</pre>
    </div>
  );
};

export default ReviewDetails;
