import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import VendorDetail from "./vendorDetail";

function Map({ latitude, longitude, address, vendorData }) {
  let [vendors, setVendor] = useState({});
  const setVendorData = () => {
    setVendor(vendorData);
  };

  let redMarkerIcon = new L.Icon({
    iconUrl: require("../image/redmarker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  let greenMarkerIcon = new L.Icon({
    iconUrl: require("../image/greenmarker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  useEffect(() => {
    setVendorData();
  }, [vendorData, latitude, longitude]);
  console.log(vendors);

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
          {/* <Marker
            position={[latitude, longitude]}
            // icon={<i className="fa fa-location" />}
          >
            <Popup>Your Location : {address}</Popup>
          </Marker> */}
          {vendors &&
            vendors.map((vendor) => (
              <Marker
                key={vendor.name}
                position={[vendor.addressCoords.lat, vendor.addressCoords.long]}
                icon={
                  vendor.openOrCloseStatus ? greenMarkerIcon : redMarkerIcon
                }
              >
                <Popup>
                  <div className="bg-lime-400 rounded-md shadow-xl p-2 mt-2">
                    <VendorDetail
                      shopName={vendor.shopName}
                      name={vendor.name}
                      addressName={vendor.addressName}
                      openOrCloseStatus={vendor.openOrCloseStatus}
                      menuItem={vendor.menuItem}
                      takeAwayOrderstatus={vendor.takeAwayOrderstatus}
                    />
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    );
  }
}

export default Map;
