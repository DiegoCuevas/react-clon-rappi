import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Map } from "react-leaflet";

import store from "../store";
import MarkerRestaurant from "./markerRestaurant";

test("markerRestaurant component", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Map>
        <MarkerRestaurant id={1} />
      </Map>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
