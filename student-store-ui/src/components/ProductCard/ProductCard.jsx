import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  product,
  shoppingCart,
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription = false,
}) {

  const description = showDescription ? "show-description" : "hide-description";
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"products/" + product.id}>
          <img src={product.image} alt={`Picture of ${product.name}`} />
        </Link>
      </div>
      <div className="product-info">
        <div className="card-content">
          <p className="product-name">{product.name}</p>
          <p className="product-price">
            {product.price?.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className={description}>{product.description}</p>
        </div>
        <div className="actions">
          <div className="card-buttons">
            <button
              className="add"
              onClick={() => {
                handleAddItemToCart(productId);
              }}
            >
              +
            </button>
            <button
              className="remove"
              onClick={() => {
                handleRemoveItemToCart(productId);
              }}
            >
              -
            </button>
          </div>
          <span className="quantity-display">
            <span className="quantity-box">
              {shoppingCart.map((item) => {
                if (item.itemId === productId) return item.quantity;
              })}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
