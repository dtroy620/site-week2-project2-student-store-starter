import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavbar/SubNavbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useState } from "react"

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription = false,
}) {
  const [filter, setFilter] = useState();
  const [category, setCategory] = useState();
  const [value, setValue] = useState(""); 
  //console.log(value);

  function handleChange(e) {
    setValue(e.target.value);
    category
      ? setFilter(
          products
            ?.filter((product) => product.category === category)
            .filter((product) =>
              product.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
      : setFilter(
          products?.filter((products) => {
            if (value === "") return products;
            return products.name.toLowerCase().includes(e.target.value.toLowerCase());
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

  return (
    <>
      <Hero />
      <SubNavbar
        value={value}
        handleChange={handleChange}
        handleFilter={handleFilter}
      />
      <div className="home">
        <ProductGrid
          products={filter ? filter : products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={showDescription}
        />
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
