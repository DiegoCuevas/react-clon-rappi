import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import ListProducts from "./listProducts";

test("listProducts component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <ListProducts />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
