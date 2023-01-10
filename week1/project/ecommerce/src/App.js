import React, { useState } from "react";
import Categories from './components/category/Categories';
import ProductList from './components/products/ProductList';

function App() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const handleClick = (e) => {
    setSelectedBtn(e.target.innerText.slice(6,));
  }
  return (
    <div>
      <h1>Products</h1>
      <Categories handleClick={handleClick} />
      <ProductList selectedBtn={selectedBtn} />

    </div>
  );
}

export default App;
