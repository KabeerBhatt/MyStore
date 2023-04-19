import React from "react";

const Register = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Register</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{ marginBottom: "1rem", padding: "0.5rem", color: "black" }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{ marginBottom: "1rem", color: "black", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ marginBottom: "1rem", color: "black", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={{ marginBottom: "1rem", color: "black", padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
