import "./CheckoutForm.css";

export default function CheckoutForm({
  products,
  shoppingCart,
  hasCheckedOut,
  total,
  subtotal,
  tax,
  name,
  email,
}) {
  if (hasCheckedOut === true) {
    return (
      <div className="check-out-card">
        <h4>Receipt</h4>
        <div className="info">
          <p>
            Showing Receipt Information for {name} available at {email}:
          </p>
          <ul>
            {shoppingCart?.map((item) => (
              <li>
                {
                  products?.filter((product) => item.itemId === product.id)[0]
                    .name
                }
              </li>
            ))}

            <li>
              {total.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </li>
            <li>
              {total.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </li>
            <li>
              {total.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>FALSE</div>;
  }
}
