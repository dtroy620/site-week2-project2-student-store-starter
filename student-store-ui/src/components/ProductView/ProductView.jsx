import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";
import {useEffect} from "react"
export default function ProductView({
  product,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
  setShowDescription,
  showDescription,
}) {
  useEffect( () => {
    setShowDescription(true);
  })
  return (
    <div className="product-view">
      <h1>Product #{product.id}</h1>
      <ProductCard
        shoppingCart={shoppingCart}
        product={product}
        productId={product.id}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        showDescription={showDescription}
      />
    </div>
  );
}
