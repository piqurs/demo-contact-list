import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
      }}
    >
      <li
        style={{
          margin: "0 10px",
        }}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        style={{
          margin: "0 10px",
        }}
      >
        <Link to="/add">Add contact</Link>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          Contact List
        </a>
      </h3>
      <nav
        style={{
          marginLeft: "auto",
        }}
      >
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
