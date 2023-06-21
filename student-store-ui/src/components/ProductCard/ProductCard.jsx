import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductCard.css";

export default function ProjectCard({
  product,
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription = false,
}) {
  
  const description = showDescription ? "show-description" : "hide-description";
  const [quantity, setQuantity] = useState(0);
  
  function changeQuantity(e) {
    if (e === "add") setQuantity(quantity + 1);
    else if (e === "remove") {
      if (quantity === 0) setQuantity(0);
      else setQuantity(quantity - 1);
    }
  }
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
            {product.price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className={description}>{product.description}</p>
        </div>
        <div className="actions">
          <div className="card-buttons">
            <button className="add" onClick={() => {
              changeQuantity("add") 
              handleAddItemToCart(product.id, quantity)}}>
              +
            </button>
            <button className="remove" onClick={() => {
              changeQuantity("remove") 
              handleAddItemToCart(product.id, quantity)}}>
              -
            </button>
          </div>
          <span className="quantity-display">
            <span className="quantity-box">{quantity}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
