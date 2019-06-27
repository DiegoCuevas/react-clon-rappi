/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRestaurants, useCart, useUser } from "../selectors";
import { useLogout, useListRestaurants } from "../action-hooks";
import ListRestaurants from "../components/listRestaurants";

const container = {
  "&:h1": {
    fontSize: "21px",
    margin: "0 5px",
    color: "#333"
  }
};

function Home() {


  return (
    <section css={container}>
      <h1>Restaurantes en tu zona</h1>
      <ListRestaurants />
    </section>
  );
}

export default Home;
