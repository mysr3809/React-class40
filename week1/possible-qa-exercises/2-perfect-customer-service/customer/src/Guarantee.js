import React from 'react'

const Guarantee = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>

    </div>
  )
}

export default Guarantee
