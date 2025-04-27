import React from "react";

type IProps = {
  categories: Category[];
};
const CategoryList = ({ categories }: IProps) => {
  return (
    <div>
      {categories.map((c) => (
        <small key={c.documentId}>{c.name}</small>
      ))}
    </div>
  );
};
export default CategoryList;
