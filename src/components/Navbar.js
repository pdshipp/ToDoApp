import React from "react";

const Navbar = () => {
  return (
    <nav className="nav wrapper teal lighten-2">
      <div className="container">
        <a href="/" className="brand-logo">
          To Do
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
