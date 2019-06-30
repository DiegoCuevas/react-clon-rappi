import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import Login from "./login";

test("Login component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
