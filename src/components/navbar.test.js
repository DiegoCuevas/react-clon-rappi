import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";

import Navbar from "./navbar";

test("Navbar component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
