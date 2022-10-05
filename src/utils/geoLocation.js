const geoLocation = async (callback) => {
  let latitude, longitude, city;
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      async (position) => {
        console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let location = await fetch(
          `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${longitude},${latitude}`
        );
        let data = await location.json();
        city = data.address.City;
        callback({ latitude, longitude, city });
      },
      (error) => {
        console.log("Error");
      },
      { enableHighAccuracy: true }
    );
  }
};

export default geoLocation;
