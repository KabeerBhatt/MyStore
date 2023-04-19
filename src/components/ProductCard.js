// components/ProductCard.js

import React from "react";

const ProductCard = ({ title, description, image, handleAddToCart }) => {
  return (
    <div
      style={{
        width: "200px",
        padding: "16px",
        margin: "8px",
        color: "white",
      }}
    >
      <img src={image} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        type="submit"
        onClick={handleAddToCart}
        style={{
          backgroundColor: "rgb(255, 0, 0)",
          color: "#fff",
          padding: "8px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
