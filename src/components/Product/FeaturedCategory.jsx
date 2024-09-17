import categoryData from "../../data/categories.json";
import React, { useState } from "react";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState(categoryData.category);

  return (
    <div className="flex gap-12">
      {" "}
      {/* Use flex and gap for spacing */}
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col">
          {/* Flex column to ensure subcategories are listed vertically */}
          <h1 className="font-semibold">{category.name}</h1>
          {category.subcategories.map((sub) => (
            <div key={sub.id} className="ml-4">
              {/* Use margin-left (ml-4) for indentation */}
              <input type="text" />
              <label className="ml-2">{sub.name}</label>
              {sub.subcategories && sub.subcategories.length > 0 && (
                <div className="ml-8">
                  {/* Nested subcategories indented further */}
                  {sub.subcategories.map((sub) => (
                    <div key={sub.id} className="ml-4">
                      <input type="text" />
                      <label className="ml-2">{sub.name}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeaturedCategory;
