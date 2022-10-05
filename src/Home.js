import Map from "./component/Map";
import Navbar from "./component/Navbar";
import React, { useState, useEffect } from "react";
import geoLocation from "./utils/geoLocation";
import useGeolocation from "react-hook-geolocation";

function Home() {
  let [city, setCity] = useState("");
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
  let [vendorData, setvendorData] = useState();
  const fetchData = async () => {
    await geoLocation(setValue);
  };

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  console.log("adjnfj", geolocation);

  const setValue = async (data) => {
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setCity(data.city);
    let res = await fetch("/admin/vendors/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addressName: data.city,
      }),
    });
    let data1 = await res.json();
    if (!data1) {
    } else {
      setvendorData(data1);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [latitude, longitude, city]);
  return (
    <>
      <Navbar />
      <Map
        latitude={latitude}
        longitude={longitude}
        address={city}
        vendorData={vendorData}
      />
    </>
  );
}

export default Home;
