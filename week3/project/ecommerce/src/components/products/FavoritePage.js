import React, { useContext } from 'react'
import Buttons from './Buttons'
import Product from './Product';
import "./favoritePage.css"
import { FavoriteContext } from '../context/FavoriteContext';

const FavoritePage = () => {
  const { favorite } = useContext(FavoriteContext);

  return (
    <div>
      <div className='options'>
        <h1>Favorites</h1>
        <Buttons />
      </div>
      <div className='favoriteList'>
        {favorite.length === 0 ? <p>You haven't chosen any favorites yet!</p> :
          favorite.map((item, index) => <Product product={item} key={index} />)
        }
      </div>
    </div>

  )
}

export default FavoritePage
