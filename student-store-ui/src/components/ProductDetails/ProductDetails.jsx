import * as React from "react";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
  setShowDescription,
}) {
  const { productId } = useParams();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(products?.filter((products) => products.id == productId));
  }, []);
  console.log(filtered[0]);
  return (
    <div className="product-detail">
      {filtered?.map((element, id) => (
        <ProductView
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          key={id}
          product={filtered[0]}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />
      ))}
    </div>
  );
}
