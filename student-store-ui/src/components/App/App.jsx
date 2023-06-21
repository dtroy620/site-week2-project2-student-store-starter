import * as React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";

import About from "../About/About";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => {
        setProducts(response.data.products);
        setCategories(response.data.categories);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const [products, setProducts] = useState(); //Required
  const [isOpen, setIsOpen] = useState(false); //Required
  const [error, setError] = useState(); //Required
  const [isFetching, setIsFetching] = useState(false); //Required
  const [shoppingCart, setShoppingCart] = useState([]); //Required
  const [checkOutForm, setCheckOutForm] = useState(); //Required

  const [showDescription, setShowDescription] = useState(false);


  function handleOnToggle() { //Required
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(id, quant) { //Required
    setShoppingCart([...shoppingCart, { //implement if ID exists, increase quantity and not add new object
      id:id,
      quantity:quant
    }])
  }

  console.log(shoppingCart);

  function handleRemoveItemToCart() { //Required
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar setShowDescription={setShowDescription} />
          <Sidebar 
            handleOnToggle={handleOnToggle} 
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  handleSubmit={handleSubmit}
                  showDescription={showDescription}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetails
                  products={products}
                  setShowDescription={setShowDescription}
                  showDescription={showDescription}
                />
              }
            />
            <Route path="/#about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
