import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import CardRestaurant from "./cardRestaurant";

test("cardRestaurant component", () => {
  const restaurant = {
    id: 1,
    name: "Restaurant-1"
  };

  const { asFragment } = render(
    <Provider store={store}>
      <CardRestaurant restaurant={restaurant} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
