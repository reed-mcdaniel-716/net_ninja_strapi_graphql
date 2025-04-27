import React from "react";
import { clipString, formatReviewBody } from "../helpers/review-helper";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import CategoryList from "../components/CategoryList";

const REVIEWS_QUERY = gql`
  query getAllReviews {
    reviews {
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

const Homepage = () => {
  const { loading, error, data } = useQuery(REVIEWS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;

  return (
    <div>
      {data.reviews.map((review: Review) => {
        return (
          <div key={review.documentId} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            {review.categories && (
              <CategoryList categories={review.categories} />
            )}
            <pre>{clipString(formatReviewBody(review.body), 200)}</pre>
            <Link to={`/details/${review.documentId}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
