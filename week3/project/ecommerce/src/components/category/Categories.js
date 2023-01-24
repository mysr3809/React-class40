import React, { useState, useEffect } from 'react';
import './Categories.css'

const Categories = ({ handleClick, filterProduct }) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCategories()
  }, []);


  return (
    <div className='category'>
      {categories.map((category, index) => {
        return <button key={index} onClick={() => {
          handleClick(category);
          filterProduct(category)
        }}>{category}</button>
      })}
    </div>
  )
}

export default Categories;
