import React, { useState, useEffect, useContext } from 'react';
import './product.css';
import { Link } from "react-router-dom";
import heartBlack from "../../assets/heart-solid.svg"
import heartWhite from "../../assets/heart-regular.svg"
import { FavoriteContext } from '../context/FavoriteContext';

const Product = ({ product }) => {
  const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext)

  const isFavorite = (id) => {
    return favorite.some((product) => product.id === id);
  }

  return (
    <div>
      <div className='product'>
        {isFavorite(product.id) ?
          <img className="icon" src={heartBlack} alt={heartWhite} onClick={() => removeFavorite(product)} /> :
          <img className="icon" src={heartWhite} alt={heartWhite} onClick={() => addFavorite(product)} />}
        <Link to={`/product/${product.id}`}>
          <img className="productImg" src={product.image} alt={product.image}></img>
          <p>{product.title} </p>
        </Link>
      </div >
    </div>
  )
}

export default Product;
