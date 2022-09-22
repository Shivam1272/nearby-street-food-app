import React, { useState } from "react";
import Card from "./component/Card";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import Mapbox from "./component/Map";

function Home() {
  let [map, setShowMap] = useState(false);
  let handleMap = () => {
    setShowMap(!map);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center m-3 ">
        {map && <Mapbox className=" m-44" width="400px" height="400px" />}
        <button onClick={handleMap}>Show Map</button>
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
