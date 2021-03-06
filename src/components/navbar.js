/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useCart, useRestaurant } from "../selectors";

const container = {
  borderBottom: "1px solid rgba(0,0,0,.0975)",
  marginBottom: "2em"
};

const ul = {
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  margin: "0 auto",
  padding: ".5em 1.5em",
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

const center = {
  display: "flex",
  alignItems: "center"
};

const img = {
  width: "80px"
};

function Nabvar() {
  const cart = useCart();
  const restaurant = useRestaurant();

  return (
    <nav css={container}>
      <ul css={ul}>
        <li css={center}>
          <Link css={linkStyle} to="/">
            <img
              css={img}
              src="https://images.rappi.com/web/logo-rappi-new.svg?e=webp"
              alt="rappi"
            />
          </Link>
        </li>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            width: "100px"
          }}
        >
          <li>
            <Link css={linkStyle} to={"/cart/" + restaurant.id}>
              <div css={center}>
                <span>Cart </span>
                <span
                  css={{
                    marginLeft: "5px",
                    marginRight: "10px",
                    fontWeight: "bolder",
                    color: "rgb(31, 184, 44)"
                  }}
                >
                  {Object.values(cart).length}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link css={linkStyle} to="/login">
              <span css={center}>Logout</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nabvar;
