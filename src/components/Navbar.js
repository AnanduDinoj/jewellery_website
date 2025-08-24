import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "#f4f4f4" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/collections">Collections</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
