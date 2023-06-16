import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo/>
        <ul className="link">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/#about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
