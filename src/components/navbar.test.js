import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./navbar";

test("Navbar component", () => {
  const { asFragment } = render(<Navbar />);

  expect(asFragment()).toMatchSnapshot();
});
