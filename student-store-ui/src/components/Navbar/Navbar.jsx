import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Navbar({setShowDescription}) {
  return (
    <>
    <nav className="navbar">
      <div className="content">
        <Link to="">
          <Logo/>
        </Link>
        <ul className="link">
          <li >
            <a href="/" onClick={() => setShowDescription(false)}>Home</a>
          </li>
          <li>
            <a href="/#about" onClick={() => setShowDescription(false)}>About Us</a>
          </li>
          <li>
              <a href="/#contact" onClick={() => setShowDescription(false)}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  )
}
