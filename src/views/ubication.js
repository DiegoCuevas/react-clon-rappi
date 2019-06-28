import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelectRestaurant } from "../action-hooks";
import { usePosition } from "../selectors";

const container = {
  height: "100vh",
  width: "100vw",
  margin: "0 auto"
};

function Ubication({ id = 1 }) {
  const selectRestaurant = useSelectRestaurant();
  const [position, setPosition] = React.useState([0, 0]);
  const [zoomState, setZoomState] = React.useState(16);
  const positionRest = usePosition();

  React.useEffect(() => {
    console.log("effect");
    selectRestaurant(id);
  });

  const mapRef = React.useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  const handleOnZoom = map => {
    setZoomState(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <Map
      css={container}
      center={position}
      zoom={zoomState}
      ref={mapRef}
      onzoomend={handleOnZoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          You are here!
          <span role="img" aria-label="emoji dot position">
            👨‍🎤
          </span>
        </Popup>
      </Marker>
      <Marker position={[positionRest.latitud, positionRest.longitud]}>
        <Popup>
          This is the restaurant
          <span role="img" aria-label="emoji dot position">
            🏘️
          </span>
        </Popup>
      </Marker>
    </Map>
  );

  return map;
}

export default Ubication;
