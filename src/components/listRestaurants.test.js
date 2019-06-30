import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import ListRestaurants from "./listRestaurants";

test("ListRestaurants component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <ListRestaurants />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
