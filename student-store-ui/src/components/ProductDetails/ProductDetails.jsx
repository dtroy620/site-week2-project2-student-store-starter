import * as React from "react";
import "./ProductDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
  setShowDescription,
}) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const productUrl = `http://localhost:3001/store/products/${productId}`;

  useEffect(() => {
    axios.get(productUrl).then((res) => {
      setProduct(res.data.product);
    });
  }, []);
  if (!product) return <span>Loading...</span>;
  else {
    return (
      <div className="product-detail">
        <ProductView
          shoppingCart={shoppingCart}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          product={product}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />
      </div>
    );
  }
}
