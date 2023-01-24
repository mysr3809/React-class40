import React from 'react';
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className='option'>
      <Link to={`/`}>
        <p >Products</p>
      </Link>
      <Link to={`/favorites`}>
        <p >Favorites</p>
      </Link>
    </div>
  )
}

export default Buttons
