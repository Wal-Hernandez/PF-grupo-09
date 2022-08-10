import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { useSelector } from "react-redux";

export default function MapView({ packageDetail }) {
  const location = packageDetail.city?.location;
  console.log(location);
  return (
    <div>
      {location ? (
        <div>
          {console.log(location[0])}
          <MapContainer
            center={{ lat: location[0], lng: location[1] }}
            zoom={11}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers location={location} />
          </MapContainer>
        </div>
      ) : null}
    </div>
  );
}
