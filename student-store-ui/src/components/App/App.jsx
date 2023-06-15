import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetails from "../ProductDetails/ProductDetails"
import "./App.css"
import About from "../About/About"

export default function App() {
  const [products, setProducts] = useState();
  const [items, setItems] = useState({item: '', quantity: 0})
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [shoppingCart, setShoppignCart] = useState();
  const [checkOutForm, setCheckOutForm] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [search, setSearch] = useState()
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState()
  

  const url='https://codepath-store-api.herokuapp.com/store'
  useEffect(() => {
    axios.get(url).then((response ) => {
       setProducts(response.data.products)
       setCategories(response.data.categories)
    })
    .catch((error) => {
      setError(error);
    })
  }, [])

  function handleOnToggle(){
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart() {
    
  }
  
  function handleChange (e) {
    setValue(e.target.value)
    setSearch(products?.filter( products => {
        if (e.target.value  === '' ) return products;
        return products.name.toLowerCase().includes(e.target.value.toLowerCase());
    }
    ))
  }
  console.log("BEFORE BEFORE FILTER: ", filter)
  function handleFilter(e) {
    console.log("BEFORE FILTER: ", filter)
    setSelectedCategory(e.target.value)
    setFilter(products?.filter(item => {item.category === selectedCategory}
      ))
      
    
    console.log("AFTER FILTER: ", filter)
  }

  function handleSubmit(e) {
    e.preventDefeault();

  }

  function handleSelected() {
    setIsSelected(!isSelected);
    console.log(isSelected);
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/>
          <Sidebar
            handleOnToggle={handleOnToggle}
            isOpen={isOpen}/>
          <Routes>
            <Route path="/" element={<Home
                                        isSelected={isSelected} 
                                        handleSelected={handleSelected} 
                                        value={value} 
                                        products={search ? search : products} 
                                        handleAddItemToCart={handleAddItemToCart} 
                                        handleSubmit={handleSubmit} 
                                        handleChange={handleChange}
                                        handleFilter={handleFilter}/>}/>
            <Route path="/products/:productId" element={<ProductDetails products={products}/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
