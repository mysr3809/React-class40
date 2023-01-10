import React from 'react';
import allCategories from '../../fake-data/all-categories';
import './Categories.css'

const Categories = ({ handleClick }) => {
  return (
    <div className='category'>
      <button onClick={handleClick}>{allCategories[0]}</button>
      <button onClick={handleClick}>{allCategories[1]}</button>
      <button onClick={handleClick}>{allCategories[2]}</button>
      <button onClick={handleClick}>{allCategories[3]}</button>
    </div>
  )
}

export default Categories;
