import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../Data';

const ProductList = () => {
  return (
      <div className="grid grid-cols-3 gap-4 py-12 bg-green-100">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
};

export default ProductList;
