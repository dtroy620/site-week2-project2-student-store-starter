import "./SubNavbar.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react";

export default function SubNavbar({
  value,
  handleChange,
  handleFilter,
}) 
{
  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="search">
          <input
            value={value}
            className="search-input"
            type="text"
            name="search-input"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
        <div className="categories">
          <button className="category-button" onClick={() => handleFilter("")}>
            All Categories{" "}
          </button>
          <button
            className="category-button"
            onClick={() => handleFilter("clothing")}
          >
            Clothing
          </button>
          <button
            className="category-button"
            onClick={() => handleFilter("food")}
          >
            Food
          </button>
          <button
            className="category-button"
            onClick={() => handleFilter("accessories")}
          >
            Accessories
          </button>
          <button
            className="category-button"
            onClick={() => handleFilter("tech")}
          >
            Tech
          </button>
        </div>
      </div>
    </nav>
  );
}
