import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  return (
    <>
      <div className="cart-headers">
        <span>Name</span>
        <span>Quantity</span>
        <span>Unit Price</span>
        <span>Cost</span>
      </div>
      <div className="cart-row">
        <p>{shoppingCart.id}</p>
      </div>
    </>
  );
}
