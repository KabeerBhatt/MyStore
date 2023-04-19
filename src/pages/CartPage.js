import React from "react";
var cart = [];
const CartPage = ({ cart, handleRemoveFromCart, handleClearCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>Cart</h2>
      {cart && cart.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "1rem",
                }}
              />
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {item.title}
                </p>
                <p style={{ marginBottom: "0.5rem" }}>{item.description}</p>
                <p style={{ marginBottom: "0.5rem" }}>
                  Quantity: {item.quantity}
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                  <button onClick={() => handleClearCart(item)}>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => handleClearCart()}
            style={{ marginTop: "1rem" }}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
