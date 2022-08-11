import { Marker } from "react-leaflet";
import { icon } from "./IconLocation.js";
import React, { useEffect } from "react";

import L from "leaflet";

const Markers = ({ location }) => {
  console.log(location);
  let DefaultIcon = L.Marker.prototype.options.icon;
  console.log(L);
  return (
    <div>
      <Marker position={{ lat: location[0], lng: location[1] }} icon={icon} />
    </div>
  );
};

export default Markers;
