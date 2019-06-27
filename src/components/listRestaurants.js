/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import CardRestaurant from "./cardRestaurant";

const container = {
  display: "flex",
  flexWrap: "wrap"
};

function ListRestaurants() {
  return (
    <section css={container}>
      <CardRestaurant />
      <CardRestaurant />
      <CardRestaurant />
    </section>
  );
}

export default ListRestaurants;
