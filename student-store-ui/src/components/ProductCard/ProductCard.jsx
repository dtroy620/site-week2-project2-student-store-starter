import { Link } from "react-router-dom"
import { useState } from "react"
import "./ProductCard.css"

export default function ProjectCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription = false}) {
    const [quant, setQuant] = useState(0)
    function incrementBy1(){
        
        setQuant((quant) => quant+1)
        console.log(quant)
    }
    
    return(
        <div className="product-card">
            <div className="media">
                <Link to={"products/"+product.id}><img src={product.image} alt={`Picture of ${product.name}`}/></Link>
            </div>
            <div className="product-info">
            <div className="card-content">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
                
            </div>
            <div className="actions">
                <div className="card-buttons">
                    <button className="add" onClick={incrementBy1}>+</button>
                    <button className="remove" onClick={handleRemoveItemToCart}>-</button>
                </div>
                <span className="quantity-display">
                    <span className="quantity-box">L</span>
                </span>
            </div>
            </div>
        </div>
    )
}