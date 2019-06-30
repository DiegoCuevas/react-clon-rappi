import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import Home from "./home";

test("Home component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
