/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const container = {
  borderBottom: "1px solid rgba(0,0,0,.0975)",
  marginBottom: "2em"
};

const ul = {
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  margin: "0 auto",
  padding: "1.5em",
  listStyle: "none",
  color: "#fff"
};

const linkStyle = {
  marginRight: "1em",
  textDecoration: "none",
  color: "#000",
  "&:hover": {
    color: "#003569"
  }
};

function Nabvar() {
  return (
    <nav css={container}>
      <ul css={ul}>
        <li>
          <Link css={linkStyle} to="/">
            <img
              src="https://images.rappi.com/web/logo-rappi-new.svg?e=webp"
              alt="rappi"
            />
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;
