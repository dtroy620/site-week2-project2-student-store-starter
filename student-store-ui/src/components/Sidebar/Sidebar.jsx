import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen = false, handleOnToggle }) {
  const sideBarClassName = isOpen ? "sidebar open" : "sidebar closed";
  const showInfo = isOpen ? "info show" : "info close"
  const showIcons = isOpen ? "cart-icons close" : "cart-icons show"
  return (
    <section className={sideBarClassName}>
      <div className="wrapper">
        <button className="toggle-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">menu</i>
        </button>
        <div className="shopping-cart">
          <div className={showIcons}>
            <span>
              <i className="material-icons md-48" onClick={handleOnToggle}>shopping_bag</i>
            </span>
          </div>
          <div className={showInfo}>
            <div className="cart-headers">
              <span>Name</span>
              <span>Quantity</span>
              <span>Unit Price</span>
              <span>Cost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
