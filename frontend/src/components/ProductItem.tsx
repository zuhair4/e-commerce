import React from 'react';

interface ProductProps {
  product: {
    _id: string;
    name: string;
    price: number;
    description: string;
  };
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;
