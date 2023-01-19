import React from 'react';
import allCategories from '../../fake-data/all-categories';
import './Categories.css'

const Categories = ({ handleClick, filterProduct }) => {

  return (
    <div className='category'>
      {allCategories.map((category, index) => {
        return <button key={index} onClick={() => {
          handleClick(category.slice(6));
          filterProduct(category.slice(6));
        }}>{category}</button>
      })}

    </div>
  )
}

export default Categories;
