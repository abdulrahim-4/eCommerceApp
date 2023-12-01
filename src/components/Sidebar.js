import React from 'react';
import FilterOptions from './FilterOptions';
import SortingOptions from './SortingOptions'; 

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r bg-black">
      <FilterOptions />
      <SortingOptions/>
    </div>
  );
};

export default Sidebar;
