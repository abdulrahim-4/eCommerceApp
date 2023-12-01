import React from 'react';
import { FaFilter } from "react-icons/fa";

const FilterOptions = () => {
  return (
    <div>
      <h2 className="flex items-center"><FaFilter className="mr-2" />Sort By</h2>
      <div>
        <h3>By Category</h3>
        {/* Add buttons or checkboxes for different dress categories */}
        <label>
          <input type="checkbox" /> Casual
        </label>
        <label>
          <input type="checkbox" /> Formal
        </label>
        <label>
          <input type="checkbox" /> Party
        </label>
        {/* Add more categories as needed */}
      </div>
      <div>
        <h3>By Color</h3>
        {/* Add buttons or checkboxes for different dress colors */}
        <label>
          <input type="checkbox" /> Red
        </label>
        <label>
          <input type="checkbox" /> Blue
        </label>
        <label>
          <input type="checkbox" /> Black
        </label>
        {/* Add more colors as needed */}
      </div>
      <div>
        <h3>By Size</h3>
        {/* Add buttons or checkboxes for different dress sizes */}
        <label>
          <input type="checkbox" /> Small
        </label>
        <label>
          <input type="checkbox" /> Medium
        </label>
        <label>
          <input type="checkbox" /> Large
        </label>
        {/* Add more sizes as needed */}
      </div>
      {/* Add more filter options as needed */}
    </div>
  );
};

export default FilterOptions;
