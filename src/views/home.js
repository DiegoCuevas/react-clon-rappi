/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect } from "@reach/router";

import { useUser } from "../selectors";
import ListRestaurants from "../components/listRestaurants";

const container = {
  "&:h1": {
    fontSize: "21px",
    margin: "0 5px",
    color: "#333"
  }
};

function Home() {
  const user = useUser();

  if (!user) return <Redirect to="/login" noThrow />;

  return (
    <section css={container}>
      <h1>Restaurantes en tu zona</h1>
      <ListRestaurants />
    </section>
  );
}

export default Home;
