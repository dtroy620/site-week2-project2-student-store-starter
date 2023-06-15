import * as React from "react"
import "./ProductDetails.css"
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import ProductView from "../ProductView/ProductView"

export default function ProductDetail({products, handleAddItemToCart, handleRemoveItemToCart}){
    const {productId} = useParams()
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        setFiltered(products?.filter(products => products.id == productId))}, [])
    
    return (
    <div className="product-detail">
        {filtered?.map(element => <ProductView product={filtered[1]}/>)}
    </div>
    )
} 