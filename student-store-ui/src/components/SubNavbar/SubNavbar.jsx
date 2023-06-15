import "./SubNavbar.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react"

export default function SubNavbar({isSelected = false, handleSelected, value, handleChange, products, handleFilter}){
    const selectedCategory = isSelected ? "category-button-selected" : "category-button" 
    return (
        <nav className="sub-navbar">
            <div className="content">
                <div className="search">
                    <input value={value} className="search-input" type="text" name="search-input" placeholder="Search" onChange={handleChange}/>
                </div>
                <div className="categories">
                    <button className={selectedCategory} onClick={handleFilter}>All Categories </button>
                    <button className={selectedCategory} onClick={handleFilter}>Clothing</button>
                    <button className={selectedCategory} onClick={handleFilter}>Food</button>
                    <button className={selectedCategory} onClick={handleFilter}>Accessories</button>
                    <button className={selectedCategory} onClick={handleFilter}>Tech</button>
                </div>
            </div>
            
        </nav>
    )
}