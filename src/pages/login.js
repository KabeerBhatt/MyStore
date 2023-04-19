// login.js

import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      {/* Login form */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          style={{
            color: "black",
            padding: "8px",
            marginBottom: "16px",
            width: "200px",
          }}
        />
        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          style={{
            color: "black",
            padding: "8px",
            marginBottom: "16px",
            width: "200px",
          }}
        />
        {/* Login button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "12px 24px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
