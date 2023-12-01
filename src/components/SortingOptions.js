import React from 'react';

import { FcGenericSortingDesc } from "react-icons/fc";

const SortingOptions = () => {
  
  return (
    <div>
      <h3 className="flex items-center"><FcGenericSortingDesc className="mr-2" />Sort By</h3>
      <select >
        <option value="default">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="popularity">Popularity</option>
        <option value="new-arrivals">New Arrivals</option>
      </select>
    </div>
  );
};

export default SortingOptions;
