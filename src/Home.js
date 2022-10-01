import Map from "./component/Map";
import Navbar from "./component/Navbar";
import React, { useState, useEffect } from "react";

function Home() {
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (!navigator.geolocation) {
      return alert("Geolocation is not support by your browser");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    });
  }, [latitude, longitude]);
  return (
    <>
      <Navbar />
      <Map latitude={latitude} longitude={longitude} />
    </>
  );
}

export default Home;
