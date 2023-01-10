
import React, { useEffect, useState } from 'react';
import allProduct from "../../fake-data/all-products";
import Product from './Product';
import './productList.css'

const ProductList = ({ selectedBtn }) => {
  const [filtered, setFiltered] = useState(allProduct);
  useEffect(() => {
    if (selectedBtn) {
      setFiltered(allProduct.filter(product => product.category === selectedBtn))
    }
  }, [selectedBtn]
  )

  console.log('selected', filtered)

  return (
    <div className='productList'>
      {filtered.map((product, index) => {
        return <Product product={product} key={index} filtered={filtered} />
      })}
    </div>
  )
}

export default ProductList;
