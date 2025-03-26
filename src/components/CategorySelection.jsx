import { useState } from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  // Define your categories here, or fetch them from an API
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="px-4 mb-8 lg:space-x-16 gap-12 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 px-5 py-2 rounded-xl transition-all duration-300 shadow-sm 
      ${
        activeCategory
          ? "bg-white text-gray-800 border border-amber-500"
          : "bg-amber-800 text-white"
      } 
      hover:bg-amber-700 hover:text-white hover:scale-105`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`mr-2 px-5 py-2 rounded-xl transition-all duration-300 shadow-sm 
                        ${
                          activeCategory === category
                            ? "bg-amber-800 text-white"
                            : "bg-white text-gray-800 border border-amber-0"
                        } 
                        hover:bg-amber-700 hover:text-white hover:scale-105`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
