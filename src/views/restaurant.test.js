import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";
import Restaurant from "./restaurant";

test("Restaurant component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Restaurant id={1} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
