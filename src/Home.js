import React, { useState } from "react";
import Card from "./component/Card";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import Mapbox from "./component/Map";

function Home() {
  let [map, setShowMap] = useState(false);
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();

  let calLatLong = () => {
    if (!navigator.geolocation) {
      return alert("Geolocation is not support by your browser");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    });
  };
  let handleMap = () => {
    setShowMap(!map);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-2 mx-5">
        {map && (
          <Mapbox
            width={window.innerWidth - 40}
            height={window.innerHeight * 0.5}
            longitude={longitude}
            latitude={latitude}
          />
        )}
        <button
          onClick={() => {
            handleMap();
            calLatLong();
          }}
        >
          {map ? "Hide" : "Show"} Map
        </button>
      </div>
      <div className=" relative flex flex-col">
        <div className="px-2">
          <span>NearBy</span>
        </div>
        <div className="flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <Link
            className="inline-block p-2 cursor-pointer "
            to="/shopdetail"
            state={{ name: "shivam", shopName: "OM", city: "Thane" }}
          >
            <Card name="Shivam" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Shubham", shopName: "Shree", city: "Thane" }}
          >
            <Card name="Shubham" shopName="Shree" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Mahendra", shopName: "OM Sai", city: "Thane" }}
          >
            <Card name="Mahendra" shopName="OM sai" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "siddhesh", shopName: "OM", city: "Thane" }}
          >
            <Card name="siddhesh" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
        </div>
      </div>
      <div className=" relative flex flex-col">
        <div className="px-2">
          <span>NearBy</span>
        </div>
        <div className="flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <Link
            className="inline-block p-2 cursor-pointer "
            to="/shopdetail"
            state={{ name: "shivam", shopName: "OM", city: "Thane" }}
          >
            <Card name="Shivam" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Shubham", shopName: "Shree", city: "Thane" }}
          >
            <Card name="Shubham" shopName="Shree" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Mahendra", shopName: "OM Sai", city: "Thane" }}
          >
            <Card name="Mahendra" shopName="OM sai" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "siddhesh", shopName: "OM", city: "Thane" }}
          >
            <Card name="siddhesh" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
        </div>
      </div>
      <div className=" relative flex flex-col">
        <div className="px-2">
          <span>NearBy</span>
        </div>
        <div className="flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <Link
            className="inline-block p-2 cursor-pointer "
            to="/shopdetail"
            state={{ name: "shivam", shopName: "OM", city: "Thane" }}
          >
            <Card name="Shivam" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Shubham", shopName: "Shree", city: "Thane" }}
          >
            <Card name="Shubham" shopName="Shree" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Mahendra", shopName: "OM Sai", city: "Thane" }}
          >
            <Card name="Mahendra" shopName="OM sai" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "siddhesh", shopName: "OM", city: "Thane" }}
          >
            <Card name="siddhesh" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
          <Link
            to="/shopdetail"
            state={{ name: "Govinda", shopName: "OM", city: "Thane" }}
          >
            <Card name="Govinda" shopName="OM" city="Thane" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
