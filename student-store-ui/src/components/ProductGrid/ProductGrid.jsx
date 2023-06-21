import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  return (
    <div id="buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Items...</h3>
        <div className="grid">
          {products?.map((product, id) => (
            <ProductCard
              key={id}
              product={product}
              productId={id}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}
              showDescription={showDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
