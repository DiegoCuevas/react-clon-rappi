/** @jsx jsx */
import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { jsx } from "@emotion/core";

import { useSelectRestaurant } from "../action-hooks";
import { usePosition } from "../selectors";

const markerRest = new L.Icon({
  iconUrl: require("../assets/marker-restaurant.png"),
  iconRetinaUrl: require("../assets/marker-restaurant.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40]
});

function MarkerRestaurant({ id }) {
  const selectRestaurant = useSelectRestaurant();
  const positionRest = usePosition();

  React.useEffect(() => {
    selectRestaurant(id);
  });

  return (
    <Marker
      position={[positionRest.latitud, positionRest.longitud]}
      icon={markerRest}
    >
      <Popup>
        This is the restaurant
        <span role="img" aria-label="emoji dot position">
          🏘️
        </span>
      </Popup>
    </Marker>
  );
}

export default MarkerRestaurant;
