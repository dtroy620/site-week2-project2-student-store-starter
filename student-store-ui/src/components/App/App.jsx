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
  const url = "http://localhost:3001";
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
  const [shoppingCart, setShoppingCart] = useState([]); //Required
  const [showDescription, setShowDescription] = useState(false);

  //Required
  function handleOnToggle() {
    setIsOpen(!isOpen);
  }
  //Required
  function handleAddItemToCart(productId) {
    let isAlreadyInCart = shoppingCart.some(
      (product) => product.itemId === productId
    );
    if (isAlreadyInCart) {
      let i = shoppingCart.findIndex((product) => product.itemId === productId);
      let updatedCart = [...shoppingCart];
      updatedCart[i] = {
        itemId: updatedCart[i].itemId,
        quantity: ++updatedCart[i].quantity,
      };
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    }
  }

  // Required
  function handleRemoveItemToCart(productId) {
    let isAlreadyInCart = shoppingCart.some(
      (product) => product.itemId === productId
    );
    let i = shoppingCart.findIndex((product) => product.itemId === productId);
    if (isAlreadyInCart) {
      let updatedCart = [...shoppingCart];
      updatedCart[i] = {
        itemId: updatedCart[i].itemId,
        quantity: --updatedCart[i].quantity,
      };
      setShoppingCart(updatedCart);
      if (updatedCart[i].quantity === 0) {
        updatedCart = shoppingCart.filter((item) => item.itemId !== productId);
        setShoppingCart(updatedCart);
      }
    }
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
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
          <Routes>
            <Route
              path=""
              element={
                <Home
                  shoppingCart={shoppingCart}
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
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
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
