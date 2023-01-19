import React, { useState } from "react";
import Categories from './components/category/Categories';
import ProductList from './components/products/ProductList';
import allProduct from "../src/fake-data/all-products";


function App() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const [filtered, setFiltered] = useState(allProduct);

  const handleClick = (categoryName) => {
    setSelectedBtn(categoryName);
  }

  const filterProduct = () => {
    setFiltered(allProduct.filter(product => product.category === selectedBtn))
  }
  return (
    <div>
      <h1>Products</h1>
      <Categories handleClick={handleClick} filterProduct={filterProduct} />
      <ProductList filtered={filtered} />

    </div>
  );
}

export default App;
