import "./CheckoutForm.css";

export default function CheckoutForm({
  products,
  checkoutForm,
  hasCheckedOut,
  checkoutTotal,
  personalInformation,
}) {
  if (hasCheckedOut === true) {
    return (
      <div className="check-out-card">
        <h4>Receipt</h4>
        <div className="info">
          <p>
            Showing Receipt Information for {personalInformation.name} available
            at {personalInformation.email}:
          </p>
          <ul>
            {checkoutForm?.map((item) => (
              <li>
                {item.quantity + " total "}
                {products?.filter((product) => item.itemId === product.id)[0]
                  .name + " "}
                {"puchased at a cost of " +
                  (
                    products.filter((product) => item.itemId === product.id)[0]
                      .price * item.quantity
                  ).toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
              </li>
            ))}

            <li>
              Before taxes, the subtotal was
              {" " +
                checkoutTotal.subtotal.toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                })}
            </li>
            <li>
              After taxes and fees, the total is
              {" " +
                checkoutTotal.total.toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                })}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="check-out-card empty">
        <p>
          Please ensure you fill out all information and ensure to add items to
          cart!!!
        </p>
        <div className="reqiured-information-list">
          <ul>
            <li>Shopping Cart</li>
            <li>Name</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    );
  }
}
