import React from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import SortingOptions from './SortingOptions';

const HomePage = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar>
        <SortingOptions />
      </Sidebar>

      {/* Main Content */}
      <div className="flex-grow p-4  bg-green-100">
        {/* Header */}
        <div className="flex justify-center items-center bg-black p-4 mb-4">
          <h1 className="text-4xl font-bold">DRESS APP</h1>
        </div>

        {/* Product List */}
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
