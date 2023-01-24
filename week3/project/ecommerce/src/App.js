import React from "react";
import "./App.css"
import ProductList from './components/products/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
import FavoritePage from "./components/products/FavoritePage";
import { FavoriteProvider } from "./components/context/FavoriteContext";
function App() {


  return (
    <div>
      <Router>
        <FavoriteProvider>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </FavoriteProvider>
      </Router>
    </div>
  );
}

export default App;
