import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
  isOpen = false,
  handleOnToggle,
  products,
  shoppingCart,
}) {
  const sideBarClassName = isOpen ? "sidebar open" : "sidebar closed";
  const showInfo = isOpen ? "info show" : "info close";
  const showIcons = isOpen ? "cart-icons close" : "cart-icons show";
  const [nameInput, setNameInput] = useState()
  const [emailInput, setEmailInput] = useState()

  function handleInput(e, i) {
    if (i === "name")
    {
      setNameInput(e.target.value)
    }
    else if (i === "email")
    {
      setEmailInput(e.target.value)
    }
  }

  return (
    <section className={sideBarClassName}>
      <div className="wrapper">
        <button className="toggle-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">menu</i>
        </button>
        <div className="shopping-cart">
          <div className={showIcons}>
            <span>
              <i className="material-icons md-48" onClick={handleOnToggle}>
                shopping_bag
              </i>
            </span>
          </div>
          <div className={showInfo}>
            <h2 className="shopping-cart-header">Shopping Cart</h2>
            <div className="cart-table">
              <ShoppingCart
                isOpen={isOpen}
                products={products}
                shoppingCart={shoppingCart}
              />
            </div>

            <div className="payment-form">
              <h3>Payment Info</h3>
              <div className="user-inputs">
                <label htmlFor="Name">Name</label> <br />
                <input
                  type="text"
                  name="Name"
                  value={nameInput}
                  onChange={(e) => handleInput(e, "name")}
                  placeholder="Student Name"
                />
              </div>
              <div className="user-inputs">
                <label htmlFor="Email">Email</label> <br />
                <input
                  type="text"
                  name="Email"
                  value={emailInput}
                  onChange={(e) => handleInput(e, "email")}
                  placeholder="student@codepath.org"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
