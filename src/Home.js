import React from "react";
import Card from "./component/Card";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-3 ">
        <img src="./images/map.png" alt="" />
      </div>
      <div className="m-2 grid lg:grid-cols-5 justify-center gap-5">
        <Link
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
      </div>
    </>
  );
}

export default Home;
