import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES_QUERY = gql`
  query getAllCategories {
    categories {
      name
      documentId
    }
  }
`;

const SiteHeader = () => {
  const { loading, data, error } = useQuery(CATEGORIES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error Occured</p>;
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Book Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.categories.map((category: Category) => {
          return (
            <Link
              key={category.documentId}
              to={`/category/${category.documentId}`}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SiteHeader;
