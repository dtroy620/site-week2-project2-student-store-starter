import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo/>
        <div className="link">
          <Link to="/home">Home</Link>
          <Link to="/ProductGrid">ProductGrid</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/about">About Us</Link> */}
        </div>        
        {/* <ul className="link">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Buy Now</li>
        </ul> */}
      </div>
    </nav>
  )
}
