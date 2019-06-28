/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRestaurant } from "../selectors";
import CardProduct from "./cardProduct";

const container = {
  display: "flex",
  flexWrap: "wrap"
};

function ListProducts() {
  const restaurant = useRestaurant();

  return (
    <section css={container}>
      {restaurant.menu_items.map(product => {
        return <CardProduct product={product} key={product.id} />;
      })}
    </section>
  );
}

export default ListProducts;
