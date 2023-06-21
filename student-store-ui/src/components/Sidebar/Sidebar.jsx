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
  const [value, setValue] = useState();

  function handleInput(e) {
    setValue(e.target.value);
    console.log(value);
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
            <ShoppingCart
              isOpen={isOpen}
              products={products}
              shoppingCart={shoppingCart}
            />

            <div className="payment-form">
              <h3>Payment Info</h3>
              <div className="user-inputs">
                <label htmlFor="Name">Name</label> <br />
                <input
                  type="text"
                  name="Name"
                  value={value}
                  onChange={handleInput}
                  placeholder="Student Name"
                />
              </div>
              <div className="user-inputs">
                <label htmlFor="Email">Email</label> <br />
                <input
                  type="text"
                  name="Email"
                  value={value}
                  onChange={handleInput}
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
