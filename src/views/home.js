/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRestaurants, useCart } from "../selectors";
import { useAddProduct } from "../action-hooks";

function Home() {
  const restaurants = useRestaurants();
  const cart = useCart();
  const addProduct = useAddProduct();

  function handleAddProduct() {
    addProduct(42);
  }

  return (
    <>
      <div>Home</div>
      <div>{JSON.stringify(restaurants)}</div>
      <div>{JSON.stringify(cart)}</div>
      <button onClick={handleAddProduct}>Add product</button>
    </>
  );
}

export default Home;
