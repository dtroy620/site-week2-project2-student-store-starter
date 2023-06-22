import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  console.log(shoppingCart);
  if (shoppingCart.length === 0) {
    return (
      <span className="empty-shopping-cart">There is nothing in the shopping cart! Start Shopping Now!</span>
    );
  } else {
    return (
      <div className="headers">
        <div className="cart-headers">
          <span className="name">Name</span>
          <span>Quantity</span>
          <span>Unit Price</span>
          <span>Cost</span>
        </div>
        <div className="cart-row">
          {shoppingCart.map((item) => (
            <div className="product-row">
              <span className="cart-product-name">
                {
                  products.filter((product) => item.itemId === product.id)[0]
                    .name
                }
              </span>
              <span className="center cart-product-quantity">
                {item.quantity}
              </span>
              <span className="center cart-product-price">
                {products
                  .filter((product) => item.itemId === product.id)[0]
                  .price.toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
              </span>
              <span className="center cart-product-subtotal">
                {(
                  products.filter((product) => item.itemId === product.id)[0]
                    .price * item.quantity
                ).toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
