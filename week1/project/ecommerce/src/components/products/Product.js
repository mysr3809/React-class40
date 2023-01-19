import React from 'react';
import './product.css';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <img src={product.image} alt={product.image} />
      <p>{product.title}</p>
    </div >
  )
}

export default Product;
