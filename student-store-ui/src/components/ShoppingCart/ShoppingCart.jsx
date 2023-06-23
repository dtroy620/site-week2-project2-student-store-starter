import "./ShoppingCart.css";

export default function ShoppingCart({products, shoppingCart, tax, subtotal, total }) {

  if (shoppingCart.length === 0) {
    return (
      <span className="empty-shopping-cart">
        There is nothing in the shopping cart! Start Shopping Now!
      </span>
    );
  } else {
    return (
      <>
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
        <div className="receipt">
          <div className="subtotal">
            <span>Total:</span>
            <span>
              {subtotal.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="tax">
            <span>Tax:</span>
            <span>
              {tax.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>
              {total.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
      </>
    );
  }
}
