/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import CardProduct from "./cardProduct";

const container = {
  display: "flex",
  flexWrap: "wrap"
};

function ListProducts() {
  return (
    <section css={container}>
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </section>
  );
}

export default ListProducts;
