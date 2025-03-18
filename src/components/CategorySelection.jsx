import { useState } from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {

    // Define your categories here, or fetch them from an API
    const categories = ["Startups", "Security", "AI", "Apps","Tech"];

    return (
        <div className="px-4 mb-8 lg:space-x-16 gap-12 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
            <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? '' : 'active-button'}`}>All</button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`mr-2 space-x-16  ${activeCategory === category ? 'active-button' : ''}`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
            
        </div>
    );
};


export default CategorySelection;