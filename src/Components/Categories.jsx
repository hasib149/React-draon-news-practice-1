import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromice = fetch(`/categories.json`).then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromice);
  
  return (
    <div>
      <h2 className="font-bold">All categories</h2>
      <div className="grid grid-cols-1 mt-5 space-y-3">
        {categories.map((category) => (
          <NavLink
            className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"}
            key={category.id}
            to={`category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
