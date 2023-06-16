import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavbar from "../SubNavbar/SubNavbar"
import About from "../About/About"
import Contact from "../Contact/Contact"
export default function Home({isSelected=false, handleSelected, value, products, handleAddItemToCart, handleRemoveItemToCart, handleChange, handleFilter, quantity, showDescription=false}) {
  return (
    <>
    <Hero/>
    <SubNavbar isSelected={isSelected} 
               handleSelected={handleSelected} 
               value={value} handleChange={handleChange} 
               products={products} 
               handleFilter={handleFilter}/>
    <div className="home">
      <ProductGrid products={products}
                   quantity={quantity}
                   handleAddItemToCart={handleAddItemToCart} 
                   handleRemoveItemToCart={handleRemoveItemToCart}
                   showDescription={showDescription}/>
    </div>
        <About/>
        <Contact/>
  
    </>
   
  )
} 
