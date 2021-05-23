import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  );
}

export default Navigation;
