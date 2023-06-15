import * as React from "react"
import "./ProductDetails.css"
import { useParams, useState, useEffect } from "react"
import axios from "axios"

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}){
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const url=`https://codepath-store-api.herokuapp.com/store/${id}`
  useEffect(() => {
    axios.get(url).then((response ) => {
       setProduct(response.data.products)
    })
    .catch((error) => {
      setError(error);
    })
  }, [])
    return (
    <div className="product-detail">
        Show Link {product.description}
    </div>
    )
} 