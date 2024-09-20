import categoryData from "../../data/categories.json";
import React, { useState } from "react";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState(categoryData.category);

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div>
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl mt-10 md:mt-12 lg:mt-14 mb-4">
          Featured Category
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col md:flex-row gap-3 md:gap-4 p-2 md:pr-4 w-full md:w-auto"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 md:w-40 md:h-52 lg:w-44 lg:h-56 object-cover object-center"
            />
            <div className="font-medium text-sm flex flex-col gap-2">
              <h1 className="font-bold text-base md:text-lg lg:text-xl">
                {category.name}
              </h1>
              {category.subcategories.map((sub) => (
                <div key={sub.id} className="flex flex-col gap-1">
                  <span className="text-xs md:text-sm lg:text-base">
                    {sub.name}
                  </span>
                  {sub.subcategories && sub.subcategories.length > 0 && (
                    <div className="ml-2">
                      {sub.subcategories.map((sub) => (
                        <div
                          key={sub.id}
                          className="mb-1 text-xs md:text-sm lg:text-base"
                        >
                          {sub.name}
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
