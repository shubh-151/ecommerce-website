import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span> website</span>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
