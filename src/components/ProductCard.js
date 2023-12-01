import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className=" border-2 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
      <p className="text-sm text-gray-600 mb-1">Color: {product.color}</p>
      <p className="text-sm text-gray-600 mb-1">Size: {product.size}</p>
      <p className="text-lg font-bold text-indigo-700">
        Price: ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
