/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useAddMenuItem } from "../action-hooks";
import { Card } from "./ui";

const name = {
  fontSize: "16px",
  color: "#333",
  fontWeight: "400",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  display: "block"
};

const description = {
  fontSize: "12px",
  color: "#9faab7",
  margin: "0",
  minHeight: "12px",
  textOverflow: "ellipsis",
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const separetor = {
  color: "#9faab7",
  display: "inline-block",
  verticalAlign: "top",
  fontSize: "5px",
  padding: "0 5px"
};

const info = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#333",
  textAlign: "right"
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  margin: "10px 5px",
  minWidth: "30%",
  "@media (max-width: 768px)": {
    minWidth: "100%"
  }
};

const card = {
  display: "flex",
  padding: "0",
  "@media (max-width: 768px)": {
    borderRadius: "0px",
    borderTop: "1px solid #e5edef",
    borderButtom: "1px solid #e5edef"
  }
};

const data = {
  padding: "10px"
};

const restaurantImg = {
  position: "relative",
  width: "124px"
};

const img = {
  height: "100%",
  width: "100%",
  position: "absolute",
  borderRadius: ".5em 0 0 .5em"
};

function CardProduct({ idRestaurant, product }) {
  const addMenuItem = useAddMenuItem();
  const redirect = `/cart/${idRestaurant}`;

  function handleClick(item) {
    addMenuItem(item);
  }

  return (
    <div css={linkStyle}>
      <Card css={card}>
        <div css={restaurantImg}>
          <img
            src="https://images.rappi.pe/restaurants_background/1839-1556640864.png?d=124x124&e=webp"
            alt="restaurant"
          />
        </div>
        <div
          css={data}
          onClick={() => handleClick(product)}
          title="Add to cart"
        >
          <span css={name}>{product.name}</span>
          <span css={description}>{product.description}</span>
          <span css={info}>
            Envio S/. {product.price} <span css={separetor}>●</span>
            {product.estimated_time} min
          </span>
        </div>
      </Card>
    </div>
  );
}

export default CardProduct;
