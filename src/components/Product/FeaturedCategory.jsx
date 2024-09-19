import categoryData from "../../data/categories.json";
import React, { useState } from "react";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState(categoryData.category);

  return (
    <div className="px-12">
      <div>
        <h1 className="font-semibold text-xl mt-14 mb-4">Featured Category</h1>
      </div>
      <div className="flex gap-16 flex-wrap ">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-row gap-3  pr-2">
            <img
              src={category.image}
              alt={category.name}
              className="w-44 h-52 object-cover object-top"
            />

            <div className="font-medium text-sm flex flex-col gap-2">
              <h1 className="font-bold text-lg">{category.name}</h1>
              {category.subcategories.map((sub) => (
                <div key={sub.id} className="flex flex-col gap-2">
                  {sub.name}
                  {sub.subcategories && sub.subcategories.length > 0 && (
                    <div>
                      {sub.subcategories.map((sub) => (
                        <div key={sub.id} className="mb-2">
                          {sub.name}{" "}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
