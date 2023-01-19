import Product from './Product';
import './productList.css'

const ProductList = ({ filtered }) => {

  return (
    <div className='productList'>
      {filtered.map((product, index) => {
        return <Product product={product} key={index} />
      })}
    </div>
  )
}

export default ProductList;
