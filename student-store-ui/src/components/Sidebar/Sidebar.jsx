import * as React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen = false,
  handleOnToggle,
  products,
  shoppingCart,
  setShoppingCart,
}) {
  const sideBarClassName = isOpen ? "sidebar open" : "sidebar closed";
  const showInfo = isOpen ? "info show" : "info close";
  const showIcons = isOpen ? "cart-icons close" : "cart-icons show";
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState()
  const [personalInformation, setPersonalInformation] = useState()
  const [checkoutTotal, setCheckoutTotal] = useState()
  
  let tax = 0.0875;
  let subtotal = 0;
  let total = 0;

  shoppingCart?.map(
    (item, id) =>
      (subtotal +=
        products.filter((product) => item.itemId === product.id)[0].price *
        item.quantity),
  );
  tax = tax * subtotal;
  total = tax + subtotal;


  function handleInput(e, i) {
    if (i === "name") {
      setNameInput(e.target.value);
    } else if (i === "email") {
      setEmailInput(e.target.value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setCheckoutForm(shoppingCart)
    setPersonalInformation({name:nameInput, email:emailInput})
    setCheckoutTotal({total:total, subtotal:subtotal, tax:tax})
    console.log(checkoutForm)
    if (shoppingCart.length === 0 || nameInput === "" || emailInput === "") {
      setHasCheckedOut(false);
    } else {
      setShoppingCart([])
      setHasCheckedOut(true);
      setNameInput("")
      setEmailInput("")
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
                products={products}
                shoppingCart={shoppingCart}
                tax={tax}
                subtotal={subtotal}
                total={total}
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
            <div className="checkout-button">
              <button onClick={handleClick}>Check Out</button>
            </div>
            <div className="check-out">
              <h3>Checkout Info</h3>
              <CheckoutForm
                hasCheckedOut={hasCheckedOut}
                personalInformation={personalInformation}
                checkoutForm={checkoutForm}
                products={products}
                checkoutTotal={checkoutTotal}
                name={nameInput}
                email={emailInput}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
