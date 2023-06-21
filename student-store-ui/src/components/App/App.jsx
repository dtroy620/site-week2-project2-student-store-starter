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

  const [products, setProducts] = useState();
  const [isOpen, setIsOpen] = useState(false); //Required
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const [items, setItems] = useState({ item: "", quant: 0 });
  const [error, setError] = useState();

  const [isFetching, setIsFetching] = useState(false);
  const [shoppingCart, setShoppignCart] = useState();
  const [checkOutForm, setCheckOutForm] = useState();

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(id) {
    products?.filter((product) => {
      if (product.id === id) setItems(product, quant + 1);
      console.log(items);
    });
    setQuantity((quant) => quant + 1);
  }
  function handleRemoveItemToCart() {
    setQuantity((quant) => quant - 1);
  }

  function handleChange(e) {
    setValue(e.target.value);

    category
      ? setFilter(
          products
            ?.filter((product) => product.category === category)
            .filter((product) =>
              product.name.toLowerCase().includes(value.toLowerCase())
            )
        )
      : setFilter(
          products?.filter((products) => {
            if (value === "") return products;
            return products.name.toLowerCase().includes(value.toLowerCase());
          })
        );
  }

  function handleFilter(c) {
    setCategory(c);
    setFilter(
      products?.filter((item) => {
        if (c === "") return item;
        return item.category === c;
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSelected() {
    setIsSelected(!isSelected);
    console.log(isSelected);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar setShowDescription={setShowDescription} />
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isSelected={isSelected}
                  handleSelected={handleSelected}
                  value={value}
                  products={filter ? filter : products}
                  quantity={quantity}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleFilter={handleFilter}
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
