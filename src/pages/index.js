import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const products = [
    {
      id: 0,
      title: "Hybrid Theory",
      description: "5,299",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjaN-gDHdfcY9QytJBe_jnWEP2c9GFfkoUPh6BF3qly0bim_Y6Y3NpJmLtBY7ULkYafA&usqp=CAU",
    },
    {
      id: 1,
      title: "Living Things",
      description: "6,599",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_Park_-_Living_Things.jpg?20120416051255",
    },
    {
      id: 2,
      title: "Parachutes",
      description: "4,699",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png",
    },
    {
      id: 3,
      title: "Carnival Of Rust",
      description: "5,499",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Potf-cor.jpg",
    },
    {
      id: 4,
      title: "American Idiot",
      description: "4,499",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png",
    },
    {
      id: 5,
      title: "Ride The Lightning",
      description: "6,499",
      image: "https://wallpaperaccess.com/full/4036542.png",
    },
  ];

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };
  console.log(cart);
  function myFun() {
    let a = document.getElementById("cart").style.display;

    if (a === "none") {
      document.getElementById("cart").style.display = "inline-block";
    } else {
      document.getElementById("cart").style.display = "none";
    }
  }

  return (
    <div>
      <div
        id="cart"
        style={{
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
          position: "fixed",
          display: "none",
          width: "30vw",
          color: "white",
          background: "black",
          marginLeft: "69.5vw",
          height: "70vh",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            webkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          {cart.map((product) => (
            <div
              key={product.id}
              style={{
                webkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                margin: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                />
              </div>
              <div style={{ marginLeft: "2%" }}>
                <h3 style={{ margin: "10px 0" }}>{product.title}</h3>
                <h3 style={{ margin: "10px 0" }}>
                  Description : {product.description}
                </h3>
              </div>
            </div>
          ))}

          <button
            style={{
              width: "100%",
              backgroundColor: "#333",
              color: "#f2f2f2",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Buy Now
          </button>
          <button
            style={{
              webkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
              width: "100%",
              backgroundColor: "#333",
              color: "#f2f2f2",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              marginTop: "2%",
            }}
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <button
        type="submit"
        style={{
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
          position: "fixed",
          marginTop: "-7vh",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          marginLeft: "90vw",
        }}
        onClick={myFun}
      >
        Show Cart
      </button>

      <div>
        <h1
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Check out our Latest Records!
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              button={product.button}
              handleAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
