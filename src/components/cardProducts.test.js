import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import CardProduct from "./cardProduct";

test("cardProduct component", () => {
  const restaurant = {
    id: 1,
    name: "Restaurant-1"
  };

  const product = {
    name: "Product-1"
  };

  const { asFragment } = render(
    <Provider store={store}>
      <CardProduct idRestaurant={restaurant.id} product={product} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
