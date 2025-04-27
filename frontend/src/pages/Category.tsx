import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { clipString, formatReviewBody } from "../helpers/review-helper";
import CategoryList from "../components/CategoryList";

const REVIEWS_BY_CATEGORY_QUERY = gql`
  query getReviewsForCategory($documentId: ID!) {
    category(documentId: $documentId) {
      name
      documentId
      reviews {
        title
        body
        documentId
        rating
        categories {
          name
          documentId
        }
      }
    }
  }
`;

const Category = () => {
  const { documentId } = useParams();
  const { loading, data, error } = useQuery(REVIEWS_BY_CATEGORY_QUERY, {
    variables: { documentId: documentId },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;

  const hasNoReviews = data.category.reviews.length === 0;

  return (
    <div>
      <h2>{data.category.name}</h2>
      {hasNoReviews ? (
        <h3>This category has no book reviews.</h3>
      ) : (
        data.category.reviews.map((review: Review) => {
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
        })
      )}
    </div>
  );
};

export default Category;
