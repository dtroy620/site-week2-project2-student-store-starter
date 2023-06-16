import { Link } from "react-router-dom"
import { useState } from "react"
import "./ProductCard.css"

export default function ProjectCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription = false}) {
    const description = showDescription ? "show-description" : "hide-description"
    return(
        <div className="product-card">
            <div className="media">
                <Link to={"products/"+product.id}><img src={product.image} alt={`Picture of ${product.name}`}/></Link>
            </div>
            <div className="product-info">
            <div className="card-content">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${(Math.round(product.price*100) / 100).toFixed(2)}</p>
                <p className={description}>{product.description}</p>
            </div>
            <div className="actions">
                <div className="card-buttons">
                    <button className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
                    <button className="remove" onClick={handleRemoveItemToCart}>-</button>
                </div>
                <span className="quantity-display">
                    <span className="quantity-box">{quantity}</span>
                </span>
            </div>
            </div>
        </div>
    )
}