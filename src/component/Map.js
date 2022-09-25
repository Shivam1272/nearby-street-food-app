import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useEffect, useState } from "react";

function Mapbox({ width, height, longitude, latitude }) {
  // eslint-disable-next-line
  let [lng, setLng] = useState(longitude);
  // eslint-disable-next-line
  let [lat, setLat] = useState(latitude);
  useEffect(() => {
    if (latitude && longitude) {
      setLat(latitude);
      setLng(longitude);
    }
  }, [longitude, latitude]);
  console.log(lat, lng, latitude, longitude);
  return (
    <div className="-z-0">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
        style={{
          width: width,
          height: height,
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl className="-z-0" position="bottom-right" />
        <FullscreenControl className="-z-0" position="bottom-left" />
        <GeolocateControl className="-z-0" position="bottom-left" />
      </Map>
    </div>
  );
}

export default Mapbox;
