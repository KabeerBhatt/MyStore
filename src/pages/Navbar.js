// components/Navbar.js

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "16px",
        backgroundColor: "#006DCC",
      }}
    >
      {/* Home link */}
      <Link href="/">Home</Link>
      {/* Login link */}
      <Link href="/login">Login</Link>
      {/* Register link */}
      <Link href="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
