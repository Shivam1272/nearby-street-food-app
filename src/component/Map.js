import "../App.css";
import { Icon } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25],
});

function Map({ latitude, longitude }) {
  if (latitude && longitude) {
    return (
      <div className="m-2 flex justify-center">
        <MapContainer
          className="leaflet-container -z-0"
          center={[latitude, longitude]}
          zoom={14}
          scrollWheelZoom={true}
          style={{
            height: window.innerHeight * 0.7,
            width: window.innerWidth,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[19, 72]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default Map;
