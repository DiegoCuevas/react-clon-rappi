/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useListRestaurants } from "../action-hooks";
import { useRestaurants, useUser } from "../selectors";

import CardRestaurant from "./cardRestaurant";

const container = {
  display: "flex",
  flexWrap: "wrap"
};

function ListRestaurants() {
  const restaurants = useRestaurants();
  const listRestaurants = useListRestaurants();

  React.useEffect(() => {
    listRestaurants();
  }, []);

  return (
    <section css={container}>
      {restaurants.map(restaurant => {
        return <CardRestaurant restaurant={restaurant} key={restaurant.id} />;
      })}
    </section>
  );
}

export default ListRestaurants;
