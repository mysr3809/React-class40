
import React, { useEffect, useState } from 'react';
import Categories from '../category/Categories';
import Product from './Product';
import './productList.css'
import Buttons from './Buttons';

const ProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filtered, setFiltered] = useState(allProduct);
  const [selectedBtn, setSelectedBtn] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (category) => {
    setSelectedBtn(category)
  }

  const getProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setAllProduct(data);
      setTimeout(() => {
        setFiltered(data);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      alert(error)
    }

  };

  useEffect(() => {
    getProducts()
  }, []);

  const filterProduct = (category) => {
    const filter = allProduct.filter(product => product.category === category)
    setFiltered(filter)
  }

  return (
    <div className='homePage'>
      <div className='options'>
        <h1>Products</h1>
        <Buttons />
      </div>
      {!isLoading && <Categories handleClick={handleClick} filterProduct={filterProduct} />}
      <div className='productList'>
        {isLoading ? "Loading..." : filtered.map((product, index) => {
          return <Product product={product} key={index} />
        })}
      </div>
    </div>

  )
}

export default ProductList;
