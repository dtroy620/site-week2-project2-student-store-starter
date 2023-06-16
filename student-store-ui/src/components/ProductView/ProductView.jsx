import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"
export default function ProductView ({product, handleAddItemToCart, handleRemoveItemToCart, setShowDescription, showDescription}) {
    setShowDescription(true)
    return (
        <div className="product-view">
            <h1>Product #{product.id}</h1>
            <ProductCard product={product} productId={product.id} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={showDescription}/>
        </div>
    )
}